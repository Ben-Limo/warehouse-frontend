import './widgetlarge.css'

export default function WidgetLarge() {
  const Button = ({type}) => {
    return <button className={"widgetLargeButton " + type}>{type}</button>
  }
  return (
    <div className='widgetlarge'>
      <h3 className="widgetLargeTitle">Latest Transactions</h3>
      <table className="widgetLargeTable">
        <tr className="widgetLargeTr">
          <th className="widgetLargeTh">Customer</th>
          <th className="widgetLargeTh">Product</th>
          <th className="widgetLargeTh">Amount</th>
          <th className="widgetLargeTh">Date</th>
          <th className="widgetLargeTh">Status</th>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeCustomer">Safaricom</td>
          <td className="widgetLargeCategory">Laptops</td>
          <td className="widgetLargeAmount">Ksh.1,204,534</td>
          <td className="widgetLargeDate">27/07/2022</td>
          <td className="widgetLargeStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeCustomer">Safaricom</td>
          <td className="widgetLargeCategory">Laptops</td>
          <td className="widgetLargeAmount">Ksh.1,204,534</td>
          <td className="widgetLargeDate">27/07/2022</td>
          <td className="widgetLargeStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeCustomer">Safaricom</td>
          <td className="widgetLargeCategory">Laptops</td>
          <td className="widgetLargeAmount">Ksh.1,204,534</td>
          <td className="widgetLargeDate">27/07/2022</td>
          <td className="widgetLargeStatus">
            <Button type="Pending" />
          </td>
        </tr>
      </table>
    </div>
  )
}
