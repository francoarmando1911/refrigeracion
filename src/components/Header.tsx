import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaSearch, FaTools } from 'react-icons/fa';
import { IoHome } from 'react-icons/io5';
import { IoIosContact } from 'react-icons/io';
import { CgSmartHomeBoiler, CgSmartHomeRefrigerator } from 'react-icons/cg';
import { GiSplitCross } from 'react-icons/gi';
import { SiProtools } from 'react-icons/si';

interface HeaderProps {
    toggleCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleCart }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation(); 

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]); 

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement | null;
            if (isMenuOpen && target && !target.closest('.menu-container')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <header className="sticky top-0 z-10 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 h-auto flex flex-col md:flex-row md:justify-between items-center p-4 space-y-4 md:space-y-0">

                {/* Logo */}
                <div className="flex justify-center md:justify-start">
                    <Link to="/">
                        <img src="/logo3.png" alt="Logo" className="h-12 w-auto sm:h-20 transition-transform duration-300 hover:scale-105" />
                    </Link>
                </div>

                {/* Barra de búsqueda */}
                <div className="w-full md:w-auto flex justify-center animate__animated animate__fadeIn">
                    <input
                        type="text"
                        placeholder="Buscar productos..."
                        className="w-10/12 md:w-96 p-2 rounded-2xl text-black focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all duration-200"
                    />
                    <button className="p-2 text-black hover:bg-blue-600 transition-all duration-300 ease-in-out">
                        <FaSearch />
                    </button>
                </div>

                {/* Botones */}
                <div className="flex flex-row justify-center items-center space-x-4">
                    <button
                        onClick={() => navigate('/')}
                        className="bg-white text-red-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        <IoHome />
                    </button>
                    <button
                        onClick={toggleMenu}
                        aria-expanded={isMenuOpen}
                        aria-label="Abrir menú"
                        className="bg-white text-red-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        <FaBars />
                    </button>
                    <button
                        onClick={() => navigate('/contact')}
                        aria-label="Contacto"
                        className="bg-white text-red-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        <IoIosContact />
                    </button>
                    <button
                        onClick={toggleCart}
                        className="bg-white text-red-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        <FaShoppingCart />
                    </button>
                </div>
            </div>

            {/* Menú móvil de las categorías */}
            {isMenuOpen && (
                <div className="sticky top-16 left-0 bg-slate-200 text-red-700 p-4 menu-container md:top-0 md:static md:bg-white md:flex md:flex-col md:items-start transition-transform duration-300 transform animate__animated animate__fadeIn animate__faster">
                    <button
                        onClick={toggleMenu}
                        className="text-lg mb-4 md:hidden"
                    >
                        Cerrar
                    </button>

                    <button
                        onClick={() => navigate('/Refrigeracion')}
                        className="w-full bg-slate-50 text-red-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-300 flex items-center mb-2 md:w-auto"
                    >
                        <CgSmartHomeRefrigerator className="inline-block mr-2" /> Refrigeración
                    </button>
                    <button
                        onClick={() => navigate('/AireAcondicionado')}
                        className="w-full bg-slate-50 text-red-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-300 flex items-center mb-2 md:w-auto"
                    >
                        <GiSplitCross className="inline-block mr-2" /> Aire Acondicionado
                    </button>
                    <button
                        onClick={() => navigate('/Cobre')}
                        className="w-full bg-slate-50 text-red-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-300 flex items-center mb-2 md:w-auto"
                    >
                        <SiProtools className="inline-block mr-2" /> Caños de cobre y Accesorios
                    </button>
                    <button
                        onClick={() => navigate('/Gas')}
                        className="w-full bg-slate-50 text-red-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-300 flex items-center mb-2 md:w-auto"
                    >
                        <CgSmartHomeBoiler className="inline-block mr-2" /> Gases Refrigerantes
                    </button>
                    <button
                        onClick={() => navigate('/Herramientas')}
                        className="w-full bg-slate-50 text-red-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-300 flex items-center mb-2 md:w-auto"
                    >
                        <FaTools className="inline-block mr-2" /> Electricidad y Herramientas
                    </button>
                </div>
            )}

        </header>
    );
};

export default Header;
