import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Importa el Router
import App from './App';
import { CartProvider } from './context/CartContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router> 
      <CartProvider>
        <App />
      </CartProvider>
    </Router>
  </React.StrictMode>
);