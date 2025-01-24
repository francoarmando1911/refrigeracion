import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Home from './components/Home';
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
  const [showCart, setShowCart] = useState(false);
  const location = useLocation();

  const toggleCart = () => setShowCart(prev => !prev);
  const closeCart = () => setShowCart(false);

  useEffect(() => {
    closeCart();
  }, [location]);

  return (
    <>
      <First />
      <Header toggleCart={toggleCart} />

      <CSSTransition
        in={showCart}
        timeout={300}
        classNames="cart-transition"
        unmountOnExit
      >
        <CartComponent isOpen={showCart} onClose={closeCart} />
      </CSSTransition>

      {location.pathname === '/' && <Slider />}

      <main className="flex-grow p-4 mt-[10px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Refrigeracion" element={<Refrigeracion />} />
          <Route path="/AireAcondicionado" element={<AireAcondicionado />} />
          <Route path="/LineaBlanca" element={<LineaBlanca />} />
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