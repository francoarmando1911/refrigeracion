import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-8 p-6">
      <h1 className="text-3xl font-bold text-center md:text-4xl">Bienvenido a nuestra tienda</h1>

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

      <div className="w-full max-w-5xl overflow-x-auto p-4">
        <div className="flex space-x-4">

          <div className="min-w-[200px] flex-shrink-0 p-4 bg-white text-black text-center rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-300 hover:shadow-xl">
            <h2 className="text-xl font-semibold">Refrigeracion</h2>
            <p>Familiar, comercial e industrial</p>
            <img src="ruta-de-la-imagen-1.jpg" alt="Celulares" className="w-full h-32 object-cover mt-2 rounded-lg" />
          </div>

          <div className="min-w-[200px] flex-shrink-0 p-4 bg-yellow-500 text-white text-center rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-red-600 hover:shadow-xl">
            <h2 className="text-xl font-semibold">Aires Acondicionados</h2>
            <p>Repuestos, accesorios y equipos.</p>
            <img src="ruta-de-la-imagen-2.jpg" alt="Electrodomesticos" className="w-full h-32 object-cover mt-2 rounded-lg" />
          </div>

          <div className="min-w-[200px] flex-shrink-0 p-4 bg-purple-500 text-white text-center rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-red-600 hover:shadow-xl">
            <h2 className="text-xl font-semibold">Linea blanca</h2>
            <p>Lavarropas, secarropas, microondas y mas.</p>
            <img src="ruta-de-la-imagen-3.jpg" alt="Heladeras y Freezers" className="w-full h-32 object-cover mt-2 rounded-lg" />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;