import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg rounded-t-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between gap-8">
                    <div className="space-y-4 transition-all duration-300 hover:transform hover:scale-105">
                        <h3 className="text-lg font-semibold text-gray-900">Sobre nosotros</h3>
                        <p className="text-gray-600">
                            Somos líderes en el mercado de electrodomésticos, ofreciendo productos
                            de alta calidad para hacer tu vida más fácil. Nuestra misión es brindarte
                            soluciones innovadoras y el mejor servicio al cliente.
                        </p>
                    </div>

                    <div className="space-y-4 transition-all duration-300 hover:transform hover:scale-105">
                        <h3 className="text-lg font-semibold text-gray-900">Contacto</h3>
                        <p className="text-gray-600">Email: francoarmando1911@gmail.com</p>
                        <p className="text-gray-600">Teléfono: (3442) 310036</p>
                        <p className="text-gray-600">
                            Concepción del Uruguay (ER) - Argentina
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">Redes</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Follow us on Facebook"
                                className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                            >
                                <FaFacebook className="w-6 h-6" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Follow us on Instagram"
                                className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
                            >
                                <FaInstagram className="w-6 h-6" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Follow us on Twitter"
                                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                            >
                                <FaTwitter className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-300 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-gray-500 text-sm">
                        © 2024 TiendaElectrodomesticos E-commerce. Todos los derechos reservados ©.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;