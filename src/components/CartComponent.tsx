import React, { useEffect, useRef } from 'react';
import { useCart } from '../context/CartContext';
import { CSSTransition } from 'react-transition-group';
//import { useLocation } from 'react-router-dom';
import { CartItem } from '../types/types';

const CartComponent: React.FC<{ onClose: () => void; isOpen: boolean }> = ({ onClose, isOpen }) => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    isEmpty,
    cartTotal
  } = useCart();

  const cartRef = useRef<HTMLDivElement>(null);
  //const transitionRef = useRef(null);
  //const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <CSSTransition
      in={isOpen}
      nodeRef={cartRef}
      timeout={300}
      classNames="cart-transition"
      unmountOnExit
    >
      <div
        ref={cartRef}
        className="fixed top-16 left-0 md:left-0 md:top-32 mx-auto w-full bg-gradient-to-r from-blue-50 to-indigo-50 shadow-xl z-40 p-4"
        style={{
          maxHeight: 'calc(100vh - 5rem)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Carrito</h2>
          <button
            onClick={onClose}
            className="text-red-600 hover:text-red-800 text-2xl transition-colors duration-150"
            aria-label="Cerrar carrito"
          >
            &times;
          </button>
        </div>

        {isEmpty ? (
          <div className="text-center text-gray-600 p-4">El carrito está vacío</div>
        ) : (
          <>
            <ul className="overflow-y-auto pr-2 flex-grow" style={{ maxHeight: '60vh' }}>
              {cart.map((item: CartItem) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center p-3 border-b hover:bg-gray-50"
                >
                  <div className="flex-1">
                    <span className="font-semibold text-gray-800">{item.name}</span>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="bg-gray-200 px-3 py-1 rounded-l hover:bg-gray-300 transition-colors duration-150"
                      >
                        -
                      </button>
                      <span className="mx-3 w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="bg-gray-200 px-3 py-1 rounded-r hover:bg-gray-300 transition-colors duration-150"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center ml-4">
                    <span className="text-gray-700 min-w-[80px] text-right">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center ml-3 hover:bg-red-200 transition-colors duration-150"
                    >
                      ✕
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="pt-4 mt-4 border-t border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-gray-800">Total:</span>
                <span className="font-bold text-blue-600">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex flex-col md:flex-row gap-2">
                <button
                  onClick={clearCart}
                  className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-150"
                >
                  Vaciar todo
                </button>
                <button
                  onClick={() => console.log('Procesar compra...')}
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-150"
                >
                  Hacer pedido por whatsapp
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </CSSTransition>
  );
};

export default CartComponent;