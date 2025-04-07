import React from 'react';
import { Link } from 'react-router-dom';

const Missing = () => {
  return (
    <div style={{ padding: "100px", textAlign: "center" }}>
      <h2>Page Not Found</h2>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" style={{ color: '#007bff', textDecoration: 'underline' }}>Go to Home</Link>
    </div>
  );
};

export default Missing;
