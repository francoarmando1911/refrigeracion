import React, { useEffect, useRef} from 'react';
import type { CartProps } from '../types/types';

const CartComponent: React.FC<CartProps> = ({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  cartTotal,
  isEmpty,
}) => {
  const cartRef = useRef<HTMLDivElement>(null);

  // Detectar si se hace clic fuera del carrito
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        clearCart(); 
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [clearCart]);

  return (
    <div
      ref={cartRef}
      className="fixed right-0 mt-2 w-full max-w-xs bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg z-10 p-4 rounded-lg"
    >
      {isEmpty ? (
        <div className="text-center text-gray-600">El carrito está vacío</div>
      ) : (
        <>
          <ul className="max-h-60 overflow-y-auto">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center p-2 border-b">
                <div className="flex-1">
                  <span className="text-black">{item.name}</span>
                  <div className="flex items-center mt-1">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-gray-200 px-2 py-1 rounded-l"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-gray-200 px-2 py-1 rounded-r"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-black">{item.quantity} x ${item.price}</span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center ml-2"
                    title="Eliminar"
                  >
                    X
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="p-2 text-right">
            <span className="block text-black font-bold">Total: ${cartTotal}</span>
            <button onClick={clearCart} className="mt-2 bg-red-500 text-white rounded-full px-4 py-2">
              Vaciar carrito
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartComponent;
