import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-8 p-6">

      {/* Primera Sección */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 w-full max-w-5xl">
        {/* Box 1 */}
        <Link to="/productos" aria-label="Ver productos" className="p-6 bg-blue-500 text-white text-center rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105 transition transform duration-200 ease-in-out">
          <h2 className="text-xl font-semibold">Ver Productos</h2>
          <p>Explora nuestra variedad de productos disponibles.</p>
        </Link>

        {/* Box 2 */}
        <Link to="/ofertas" aria-label="Ver ofertas" className="p-6 bg-green-500 text-white text-center rounded-lg shadow-lg hover:bg-green-600 hover:scale-105 transition transform duration-200 ease-in-out">
          <h2 className="text-xl font-semibold">Ofertas Especiales</h2>
          <p>No te pierdas nuestras ofertas exclusivas.</p>
        </Link>

        {/* Box 3 */}
        <Link to="/contacto" aria-label="Contacto" className="p-6 bg-orange-500 text-white text-center rounded-lg shadow-lg hover:bg-orange-600 hover:scale-105 transition transform duration-200 ease-in-out">
          <h2 className="text-xl font-semibold">Contacto</h2>
          <p>Ponte en contacto con nosotros para más información.</p>
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-center md:text-4xl">Bienvenido a nuestra tienda</h1>

      {/* Segunda Sección */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 w-full max-w-5xl">
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

        <div className="relative h-72 w-full sm:w-72 p-6 bg-purple-500 text-white text-center rounded-xl shadow-lg hover:bg-red-600 hover:scale-105 transition transform duration-200 ease-in-out overflow-hidden">
          <img
            src="/productos/aire1.png"
            alt="Heladeras y Freezers"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-black opacity-60 z-5"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h2 className="text-xl font-semibold">Aire Acondicionados</h2>
            <p>Repuestos, accesorios y equipos</p>
          </div>
        </div>

        <div className="relative h-72 w-full sm:w-72 p-6 bg-purple-500 text-white text-center rounded-xl shadow-lg hover:bg-red-600 hover:scale-105 transition transform duration-200 ease-in-out overflow-hidden">
          <img
            src="/productos/blanca1.png"
            alt="Heladeras y Freezers"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-black opacity-60 z-5"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h2 className="text-xl font-semibold">Línea Blanca</h2>
            <p>Lavarropas, secarropas, microondas y más.</p>
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-center md:text-4xl">Ofertas Imperdibles</h1>

    </div>
  );
};

export default Home;
