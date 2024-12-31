import React from 'react';
import { productsAires } from '../data/aires';
import { Product } from '../types/types';

const Herramientas: React.FC = () => {
    const addToCart = (product: Product) => {
        console.log('Producto agregado al carrito:', product);
    };

    return (
        <>
            <div className="relative overflow-hidden rounded-xl">
                <div className="w-full h-60 relative flex items-center justify-center px-6">
                    <div
                        className="absolute inset-0 w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: "url('/electricidadSlider.png')", opacity: 0.5 }}
                    ></div>
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <h1 className="text-4xl font-bold text-center leading-tight text-white relative z-10"
                        style={{ zIndex: '1' }}>
                        Electricidad y Herramientas
                    </h1>
                </div>
            </div>

            <h1 className="text-4xl font-bold text-center pt-10">Productos destacados</h1>

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-wrap justify-center gap-6">
                    {productsAires.map((product) => (
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

export default Herramientas;
