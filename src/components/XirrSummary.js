import React, { useEffect, useState } from 'react';
import axios from 'axios';


function XirrSummary() {
  const [data, setData] = useState([]);

  useEffect(() => {
   axios.get(`${process.env.REACT_APP_API}/api/transform/transform`)

  .then(res => {
    if (Array.isArray(res.data)) {
      setData(res.data);
    } else {
      console.error('Expected array but received:', res.data);
      setData([]);
    }
  })
  .catch(err => {
    console.error('Failed to fetch data:', err);
    setData([]);
  });

  }, []);

  return (
    <div>
      <h4>Adjusted Portfolio</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Adjusted Qty</th>
            <th>Adjusted Price</th>
            <th>Value in USD</th>
            <th>Value in INR</th>
            <th>Value in SGD</th>
          </tr>
        </thead>
        <tbody>
          {data.map(trade => (
            <tr key={trade._id}>
              <td>{trade.symbol}</td>
              <td>{trade.adjustedQuantity}</td>
              <td>{trade.adjustedPrice.toFixed(2)}</td>
              <td>{trade.usdValue.toFixed(2)}</td>
              <td>{trade.inrValue.toFixed(2)}</td>
              <td>{trade.sgdValue.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default XirrSummary;