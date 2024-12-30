import React from 'react';
import { productsRefri } from '../data/refrigeracion';
import { Product } from '../types/types';

const Refrigeración: React.FC = () => {
  const addToCart = (product: Product) => {
    console.log('Producto agregado al carrito:', product);
  };

  return (
    <>
      <div className="relative overflow-hidden rounded-xl">
        <div className="bg-gradient-to-b from-red-600 to-red-400 w-full h-60 flex items-center justify-center px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white text-center">
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
              className="relative min-w-[200px] max-w-xs border rounded-xl shadow-lg overflow-hidden flex flex-col"
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
                <p className="text-gray-700 font-semibold">${product.price}</p>
              </div>
              <div className="p-4 flex justify-center">
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-red-600 text-white rounded-xl hover:bg-red-700 transition duration-200 py-2"
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
