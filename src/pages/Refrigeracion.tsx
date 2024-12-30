import React from 'react';

const Refrigeración: React.FC = () => {
  return (
    <>
      <div className="relative overflow-hidden rounded-lg">
        <div className="bg-gradient-to-b from-red-600 to-red-400 w-full h-96 flex items-center justify-center px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white text-center">
            Refrigeración
            <br />
            Encontra lo mejor en refrigeración.
          </h1>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-center md:text-4xl pt-10">Ofertas Imperdibles</h1>
    
    </>
    
  );
};

export default Refrigeración;
