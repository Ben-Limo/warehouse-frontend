import React, { useEffect, useState} from 'react'

import Table from '../../components/table/Table'
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import Widget from '../../components/widget/Widget'

import './home.scss'

const Home = () => {
  const [transactionList, setTransactionsList] = useState([])
  const [numberOfTransactions, setNumberOfTransactions] = useState()
  const [totalSales, setTotalSales] = useState()
  const [numberOfProducts, setNumberOfProducts] = useState()
  const [numberOfCustomers, setNumberOfCustomers] = useState()
  const [transactionRecords, setTransactionRecords] = useState([])

  useEffect(() => {
      fetch('http://localhost:8080/api/transactions')
      .then(response => response.json())
      .then(data => {
        setTransactionsList(data);
        setNumberOfTransactions(data.length);  
        })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    let transactionsTableRecord = []
    let productCounter = 0
    let sumPrices =0

    transactionList.forEach(transaction => {
      
      let record = {
        "trackId" : transaction.id,
        "imageURL": "",
        "products": [],
        "customer": transaction.customer.name,
        "date": transaction.createdAt, 
        "amount": 0,
        "paymentMethod" : transaction.paymentMethod,
        "status": transaction.status

      }

      transaction.products.forEach(product => {
        record["imageURL"] += product.imageURL
        record["amount"] += product.price
        record["products"].push(product.name)
        productCounter++
      })

      sumPrices += record["amount"]
      transactionsTableRecord.push(record)

    })
    setTotalSales(sumPrices)
    setNumberOfProducts(productCounter)
    setTransactionRecords(transactionsTableRecord)
    setNumberOfCustomers([...new Set(transactionList.map(item => item.customer.id))].length)

  }, [transactionList])

  return (
    <div className='home'>
      <Sidebar />
      <div className='home-container'>
        <Topbar />
        <div className="home-container__widgets">
          <Widget type="transaction" amount={numberOfTransactions}/>
          <Widget type="sale" amount={totalSales}/>
          <Widget type="product" amount={numberOfProducts}/>
          <Widget type="customer" amount={numberOfCustomers}/>
        </div>
        <div className="home-container__charts">
          <Featured />
          <Chart />
        </div>
        <div className="home-container__table">
          <div className="table-title">Latest Transactions</div>
          <Table transactionRecords={transactionRecords}/>
        </div>
      </div>
    </div>
  )
}

export default Home