import React, { useEffect, useState} from 'react'

import Table from '../../components/table/Table'
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import Widget from '../../components/widget/Widget'

import './home.scss'

const Home = () => {
  const [transactions, setTransactions] = useState([])
  const [numTransactions, setNumOfTransactions] = useState()
  const [totalSales, setTotalSales] = useState()
  const [numProducts, setNumProducts] = useState()
  const [numCustomers, setNumCustomers] = useState()
  const [transactionRecords, setTransactionRecords] = useState([])

  useEffect(() => {
      fetch('http://localhost:8080/api/transactions')
      .then(response => response.json())
      .then(data => {
        setTransactions(data);
        setNumOfTransactions(data.length);  
        setNumCustomers(data.length)
        })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    transactions.forEach(transaction => {
      let products = transaction.products
      let sales = 0
      let productCounter = 0
      let transactionDetail = {}
      products.forEach(product => {
        sales += product.price
        transactionDetail["products"] += product.name + ","
        productCounter++
      })

      setTotalSales(sales)
      setNumProducts(productCounter)

      transactionDetail["trackId"] = transaction.id
      transactionDetail["customer"] = transaction.customer.name 
      transactionDetail["date"] = transaction.createdAt
      transactionDetail["amount"] = sales
      transactionDetail["paymentMethod"] = "Cash On Delivery"
      transactionDetail["status"] = transaction.status

      setTransactionRecords([...transactionRecords, transactionDetail])
    })
  }, transactions)

  console.log(transactions)
  console.log(numTransactions)
  console.log(totalSales)
  console.log(numCustomers)
  console.log(transactionRecords)

  return (
    <div className='home'>
      <Sidebar />
      <div className='home-container'>
        <Topbar />
        <div className="home-container__widgets">
          <Widget type="transaction" amount={numTransactions}/>
          <Widget type="sale" amount={totalSales}/>
          <Widget type="product" amount={numProducts}/>
          <Widget type="customer" amount={numCustomers}/>
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