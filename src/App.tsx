import React, { useState } from 'react';
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
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, isEmpty, cartTotal } = useCart('productos');
  const [showCart, setShowCart] = useState(false);
  const location = useLocation();

  const toggleCart = () => setShowCart((prev) => !prev);

  const isAuthPage = ['/pages/login', '/register'].includes(location.pathname);

  return (
    <>
      <First />
      <Header 
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
