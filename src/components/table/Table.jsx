import {Table,
        TableBody,
        TableCell,
        TableContainer,
        TableHead,
        TableRow,
        Paper} from "@mui/material";

import './table.scss'


const TableRecords = ({transactionRecords}) => {

  return (
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className="table-cell">Tracking ID</TableCell>
          <TableCell className="table-cell">Product</TableCell>
          <TableCell className="table-cell">Customer</TableCell>
          <TableCell className="table-cell">Date</TableCell>
          <TableCell className="table-cell">Amount</TableCell>
          <TableCell className="table-cell">Payment Method</TableCell>
          <TableCell className="table-cell">Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {transactionRecords.map((row) => (
          <TableRow key={row.trackId}>
            <TableCell className="table-cell">{row.trackId}</TableCell>
            <TableCell className="table-cell">
              <div className="cell-wrapper">
                <img src={row.imageURL} alt="" className="image" />
                {row.products.slice().join()}
              </div>
            </TableCell>
            <TableCell className="table-cell">{row.customer}</TableCell>
            <TableCell className="table-cell">{row.date}</TableCell>
            <TableCell className="table-cell">{row.amount}</TableCell>
            <TableCell className="table-cell">{row.paymentMethod}</TableCell>
            <TableCell className="table-cell">
              <span className={`status ${row.status}`}>{row.status}</span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default TableRecords