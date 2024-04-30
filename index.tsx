import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from '/App';
import './styles/main.scss';

// Use createRoot to manage the root of app
const root = ReactDOM.createRoot(document.getElementById('root')!); 

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);