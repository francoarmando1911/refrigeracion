import React from "react";

const Contacto: React.FC = () => {
    return (
        <div className="relative overflow-hidden rounded-xl min-h-screen flex items-center justify-center">
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('/frente.png')", opacity: 0.5 }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className="relative z-10 text-center text-white px-6 py-10">

                <h1 className="text-4xl font-bold mb-8">Contáctenos</h1>

                <div className="space-y-4">
                    <p className="text-lg sm:text-xl md:text-2xl">
                        Email: <span className="font-medium">refrigeracion@gmail.com</span>
                    </p>
                    <p className="text-lg sm:text-xl md:text-2xl">
                        Teléfono: <span className="font-medium">3442-310036</span>
                    </p>
                    <p className="text-lg sm:text-xl md:text-2xl">
                        Dirección: <span className="font-medium">Boulevard Los Constituyentes 7078</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contacto;

