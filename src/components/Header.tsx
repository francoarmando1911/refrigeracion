import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaSearch, FaTools } from 'react-icons/fa';
import { IoHome } from 'react-icons/io5';
import { IoIosContact } from 'react-icons/io';
import { CgSmartHomeRefrigerator } from 'react-icons/cg';
import { GiSplitCross } from 'react-icons/gi';
import { SiProtools } from 'react-icons/si';
import { CSSTransition } from 'react-transition-group';
import { useCart } from '../hooks/useCart'; 

interface HeaderProps {
    toggleCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleCart }) => {
    const { cartItemsCount } = useCart(); 
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const menuRef = useRef<HTMLDivElement | null>(null);
    const transitionRef = useRef(null); 

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="sticky top-0 z-10">
            {/* Contenedor principal */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 flex flex-col md:flex-row md:justify-between items-center p-4 space-y-4 md:space-y-0">
                {/* Logo */}
                <div className="flex justify-center md:justify-start">
                    <Link to="/">
                        <img
                            src="/logo2.png"
                            alt="Logo"
                            className="h-12 w-auto sm:h-20 transition-transform duration-300 hover:scale-105"
                        />
                    </Link>
                </div>

                {/* Barra de búsqueda */}
                <div className="w-full md:w-auto flex justify-center">
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
                        className="bg-white text-red-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-300 transform hover:scale-105"
                    >
                        <IoHome />
                    </button>
                    <button
                        onClick={toggleMenu}
                        className="bg-white text-red-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-300 transform hover:scale-105"
                    >
                        <FaBars />
                    </button>
                    <button
                        onClick={() => navigate('/Contacto')}
                        className="bg-white text-red-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-300 transform hover:scale-105"
                    >
                        <IoIosContact />
                    </button>
                    <button
                        onClick={toggleCart}
                        className="relative bg-white text-red-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-300 transform hover:scale-105"
                    >
                        <FaShoppingCart />
                        {cartItemsCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                                {cartItemsCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* Menú desplegable */}
            <CSSTransition
                in={isMenuOpen}
                nodeRef={transitionRef}
                timeout={300}
                classNames="menu-transition"
                unmountOnExit
            >
                <div 
                    ref={transitionRef}
                    className="absolute top-full left-0 w-full bg-gradient-to-r from-blue-50 to-indigo-50 p-4 z-20"
                >
                    <button onClick={toggleMenu} className="text-lg mb-4">
                        Cerrar
                    </button>
                    <button
                        onClick={() => navigate('/Refrigeracion')}
                        className="w-full bg-slate-200 text-red-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-300 flex items-center mb-2"
                    >
                        <CgSmartHomeRefrigerator className="inline-block mr-2" /> Refrigeración
                    </button>
                    <button
                        onClick={() => navigate('/AireAcondicionado')}
                        className="w-full bg-slate-200 text-red-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-300 flex items-center mb-2 md:w-auto"
                    >
                        <GiSplitCross className="inline-block mr-2" /> Aire Acondicionado
                    </button>
                    <button
                        onClick={() => navigate('/Cobre')}
                        className="w-full bg-slate-200 text-red-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-300 flex items-center mb-2 md:w-auto"
                    >
                        <SiProtools className="inline-block mr-2" /> Caños de cobre | Gases refrigerantes
                    </button>
                    <button
                        onClick={() => navigate('/Herramientas')}
                        className="w-full bg-slate-200 text-red-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-300 flex items-center mb-2 md:w-auto"
                    >
                        <FaTools className="inline-block mr-2" /> Electricidad y Herramientas
                    </button>
                </div>
            </CSSTransition>
        </header>
    );
};

export default Header;