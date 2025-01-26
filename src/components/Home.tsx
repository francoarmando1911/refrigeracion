import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/discounts';

const Home: React.FC = () => {

  const { addToCart } = useCart();

  return (
    <div className="flex flex-col items-center space-y-8 p-6">

      {/* Primera Sección */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 w-full max-w-5xl">
        {/* Box 1 */}
        <div
          aria-label="Refrigeracion"
          className="link-box p-6 text-white text-center rounded-lg shadow-lg hover:bg-red-900 transition transform duration-200 ease-in-out relative"
          style={{
            backgroundImage: "url('/electrod2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
          <div className="relative z-10">
            <h2 className="text-xl font-semibold">Envios</h2>
            <p>Envios disponibles a cualquier lugar del pais 🚛 🇦🇷</p>
          </div>
        </div>

        {/* Box 2 */}
        <div
          aria-label="Contacto"
          className="link-box bg-red-700 p-6 text-white text-center rounded-lg shadow-lg hover:bg-red-900 transition transform duration-200 ease-in-out relative"
          style={{
            backgroundImage: "url('/electrod3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
          <div className="relative z-10">
            <h2 className="text-xl font-semibold">Ofertas especiales</h2>
            <p>No te pierdas nuestras ofertas exclusivas</p>
          </div>
        </div>

        {/* Box 3 */}
        <Link
          to="/Contacto"
          aria-label="Contacto"
          className="link-box bg-red-700 p-6 text-white text-center rounded-lg shadow-lg hover:bg-red-900 transition transform duration-200 ease-in-out relative"
          style={{
            backgroundImage: "url('/wpp.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
          <div className="relative z-10">
            <h2 className="text-xl font-semibold">Contacto</h2>
            <p>Ponte en contacto con nosotros para más información</p>
          </div>
        </Link>

      </div>

      <h1 className="text-3xl font-bold text-center md:text-4xl">Bienvenidos a nuestra tienda</h1>

      {/* Segunda Sección */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 w-full max-w-5xl">

        <Link to="/Refrigeracion" className="block">
          <div className="relative h-72 w-full sm:w-72 p-6 bg-purple-500 text-white text-center rounded-xl shadow-lg hover:bg-red-600 hover:scale-105 transition transform duration-200 ease-in-out overflow-hidden">
            <img
              src="/productos/slider4.png"
              alt="Heladeras y Freezers"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-black opacity-60 z-5"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              <h2 className="text-xl font-semibold">Refrigeración</h2>
              <p>Familiar, comercial e industrial.</p>
            </div>
          </div>
        </Link>

        <Link to="/AireAcondicionado" className="block">
          <div className="relative h-72 w-full sm:w-72 p-6 bg-purple-500 text-white text-center rounded-xl shadow-lg hover:bg-red-600 hover:scale-105 transition transform duration-200 ease-in-out overflow-hidden">
            <img
              src="/productos/aire1.png"
              alt="Aire Acondicionados"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-black opacity-60 z-5"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              <h2 className="text-xl font-semibold">Aires Acondicionados</h2>
              <p>Repuestos, accesorios y equipos.</p>
            </div>
          </div>
        </Link>

        <Link to="/LineaBlanca" className="block">
          <div className="relative h-72 w-full sm:w-72 p-6 bg-purple-500 text-white text-center rounded-xl shadow-lg hover:bg-red-600 hover:scale-105 transition transform duration-200 ease-in-out overflow-hidden">
            <img
              src="/productos/blanca1.png"
              alt="Línea Blanca"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-black opacity-60 z-5"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              <h2 className="text-xl font-semibold">Línea Blanca</h2>
              <p>Lavarropas, secarropas, microondas y más.</p>
            </div>
          </div>
        </Link>

      </div>

      <h1 className="text-3xl font-bold text-center md:text-4xl">Productos destacados</h1>

      <div className="w-full overflow-x-auto py-2">
        <div className="flex space-x-4 px-4 sm:space-x-6 lg:space-x-8 ">
          {products.map((product, ProductId) => (
            <div
              key={ProductId}
              className="relative min-w-[200px] max-w-xs border rounded-xl shadow-lg overflow-hidden flex flex-col bg-gradient-to-r from-blue-50 to-indigo-50"
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
                  onClick={() => {
                    console.log("Producto a agregar: ", product);
                    addToCart(product);
                  }}
                  className="w-full bg-red-600 text-white rounded-xl hover:bg-red-700 transition duration-200 py-2"
                >
                  Agregar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;