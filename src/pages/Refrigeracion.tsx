import React from 'react';
import { productsRefri } from '../data/refrigeracion';
//import { Product } from '../types/types';
import { useCart } from '../context/CartContext';

const Refrigeración: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <>
      <div className="relative overflow-hidden rounded-xl">
        <div className="w-full h-60 relative flex items-center justify-center px-6">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/linBlanca.png')", opacity: 0.5 }}
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <h1 className="text-4xl font-bold text-center leading-tight text-white relative z-10"
            style={{ zIndex: '1' }}>
            Refrigeración
          </h1>
        </div>
      </div>

      <h1 className="text-4xl font-bold text-center pt-10">Productos destacados</h1>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap justify-center gap-6">
          {productsRefri.map((product) => (
            <div
              key={product.id}
              className="relative min-w-[200px] max-w-xs border rounded-xl shadow-lg overflow-hidden flex flex-col transition-transform duration-200 hover:scale-105"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-40 object-cover"
              />
              {product.discount && (
                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-lg">
                  {product.discount}%
                </div>
              )}
              <div className="p-4 flex-grow">
                <h2 className="text-lg font-bold">{product.name}</h2>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-gray-700 font-semibold">
                    ${product.price.toFixed(2)}
                  </p>
                  {product.discount && (
                    <p className="text-sm text-gray-500 line-through">
                      ${(product.price / (1 - product.discount / 100)).toFixed(2)}
                    </p>
                  )}
                </div>
              </div>
              <div className="p-4 flex justify-center">
                <button
                  onClick={() => addToCart({
                    ...product,
                    quantity: 1
                  })}
                  className="w-full bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors duration-200 py-2"
                >
                  Agregar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Refrigeración;