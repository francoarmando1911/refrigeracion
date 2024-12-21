import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useCart } from './hooks/useCart';
import './index.css';
import Header from './components/Header';
import Home from './components/Home';
import LoginPage from './pages/LoginPage';
import Register from './pages/Register';
import Footer from './components/Footer';
import Slider from './components/Slider';
import CartComponent from './components/CartComponent';
import { Product } from './types/types';

const App: React.FC = () => {
  const { cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, isEmpty, cartTotal } = useCart('productos');
  const [showCart, setShowCart] = useState(false);
  const location = useLocation();

  const toggleCart = () => {
    setShowCart(prev => !prev);
  };

  const sampleProduct: Product = { id: 1, name: 'Producto Ejemplo', price: 100, category: 'ejemplo', stock: 10 };

  // Verifica si la ruta actual es de registro o inicio de sesión
  const isAuthPage = location.pathname === '/pages/login' || location.pathname === '/register';

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
        showCart={showCart}
        toggleCart={toggleCart}
      />

      {showCart && !isAuthPage && (
        <CartComponent
          cart={cart}
          removeFromCart={removeFromCart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          clearCart={clearCart}
          cartTotal={cartTotal}
          isEmpty={isEmpty}
        />
      )}

      {!isAuthPage && <Slider />}

      <button
        onClick={() => addToCart(sampleProduct)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Agregar Producto Ejemplo
      </button>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/pages/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;



