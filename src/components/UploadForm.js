import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Spinner } from 'react-bootstrap';

function UploadForm({ onUploadSuccess }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append('file', file);
    setLoading(true);

    try {
      await axios.post('/api/upload', formData);
      alert('Upload successful');
      onUploadSuccess(); // Refresh trades
    } catch (err) {
      console.error(err);
      alert('Upload failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form className="mb-4">
      <Form.Group>
        <Form.Control type="file" onChange={(e) => setFile(e.target.files[0])} />
      </Form.Group>
      <Button onClick={handleUpload} disabled={loading} className="mt-2">
        {loading ? <Spinner animation="border" size="sm" /> : 'Upload CSV'}
      </Button>
    </Form>
  );
}

export default UploadForm;
