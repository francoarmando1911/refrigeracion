import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import { useCart } from './hooks/useCart';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Slider from './components/Slider';
import CartComponent from './components/CartComponent';
import First from './components/First';
import Refrigeracion from './pages/Refrigeracion';
import AireAcondicionado from './pages/AireAcondicionado';
import Cobre from './pages/Cobre';
import Herramientas from './pages/Herramientas';
import Contacto from './pages/Contacto';
import LineaBlanca from './pages/LineaBlanca';

const App: React.FC = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, isEmpty, cartTotal } = useCart('Product');
  const [showCart, setShowCart] = useState(false);
  const location = useLocation();
  const cartItemsCount = cart.reduce((total, item) => total + (item.quantity || 1), 0);

  const toggleCart = () => setShowCart((prev) => !prev);
  const closeCart = () => setShowCart(false);

  useEffect(() => {
    closeCart();
  }, [location]);

  return (
    <>
      <First />

      <Header 
        toggleCart={toggleCart}
        cartItemsCount={cartItemsCount}
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
        showCart={showCart}
      />

      {showCart && (
        <CartComponent
          cart={cart}
          removeFromCart={removeFromCart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          clearCart={clearCart}
          cartTotal={cartTotal}
          isEmpty={isEmpty}
          onClose={closeCart}
          
        />
      )}
      
      {location.pathname === '/' && <Slider />}

      <main className="flex-grow p-4 mt-[10px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Refrigeracion" element={<Refrigeracion />} />
          <Route path="/AireAcondicionado" element={<AireAcondicionado />} />
          <Route path="/Lineablanca" element={<LineaBlanca />} />
          <Route path="/Cobre" element={<Cobre />} />
          <Route path="/Herramientas" element={<Herramientas />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
