import React, { useEffect, useState } from 'react';
import UploadForm from './components/UploadForm';
import TradeTable from './components/TradeTable';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import XirrSummary from './components/XirrSummary';

function App() {
  const [trades, setTrades] = useState([]);

 const fetchTrades = async () => {
  try {
    const res = await axios.get('/api/trades'); // ✅ Use relative path
    setTrades(res.data);
  } catch (err) {
    console.error('Error fetching trades:', err.response?.data || err.message);
  }
};


  useEffect(() => {
    fetchTrades();
  }, []);

  return (
    <Container className="mt-5">
      <h2> Stock Trade Upload</h2>
      <UploadForm onUploadSuccess={fetchTrades} />
      <TradeTable trades={trades} />
      <XirrSummary />
    </Container>
  );
}

export default App;
