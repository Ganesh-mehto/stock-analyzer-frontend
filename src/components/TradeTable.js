import React from 'react';
import { Table } from 'react-bootstrap';

function TradeTable({ trades }) {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Date</th>
          <th>Symbol</th>
          <th>Action</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Transaction Value</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {trades.map((trade, index) => (
          <tr key={index}>
            <td>{new Date(trade.date).toLocaleDateString()}</td>
            <td>{trade.symbol}</td>
            <td>{trade.action}</td>
            <td>{trade.quantity}</td>
            <td>{trade.price}</td>
            <td>{trade.transactionValue}</td>
            <td>{trade.currency}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TradeTable;
