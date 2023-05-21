import React from 'react';
import ReactDOM from 'react-dom/client';
import Box from './Box';
import './index.css';
import Navbar from './Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Box/>
  </React.StrictMode>
);
