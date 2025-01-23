import React, { useEffect, useRef } from 'react';
import type { CartProps } from '../types/types';

const CartComponent: React.FC<CartProps> = ({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  cartTotal,
  isEmpty,
  onClose,
}) => {
  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={cartRef}
      className="fixed top-16 right-2 md:right-4 w-full max-w-md bg-gradient-to-r from-blue-50 to-indigo-50 shadow-xl z-50 p-4 rounded-lg"
      style={{ maxHeight: '80vh' }} // Limitar altura máxima
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Carrito</h2>
        <button
          onClick={onClose}
          className="text-red-600 hover:text-red-800 text-2xl"
          aria-label="Cerrar carrito"
        >
          &times;
        </button>
      </div>

      {isEmpty ? (
        <div className="text-center text-gray-600 p-4">El carrito está vacío</div>
      ) : (
        <>
          <ul className="overflow-y-auto pr-2" style={{ maxHeight: '60vh' }}>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center p-3 border-b hover:bg-blue-100">
                <div className="flex-1">
                  <span className="font-semibold text-gray-800">{item.name}</span>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-blue-200 px-3 py-1 rounded-l hover:bg-blue-300"
                      aria-label="Reducir cantidad"
                    >
                      -
                    </button>
                    <span className="mx-3 w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-blue-200 px-3 py-1 rounded-r hover:bg-blue-300"
                      aria-label="Aumentar cantidad"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex items-center ml-4">
                  <span className="text-gray-700 min-w-[80px] text-right">
                    ${(item.price * (item.quantity || 1)).toFixed(2)}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center ml-3 hover:bg-red-200"
                    aria-label="Eliminar producto"
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
            <div className="flex justify-between gap-2">
              <button
                onClick={clearCart}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex-1 transition-colors"
              >
                Vaciar todo
              </button>
              <button
                onClick={() => { /* Lógica de checkout */ }}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex-1 transition-colors"
              >
                Comprar
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartComponent;