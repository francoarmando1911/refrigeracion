import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaBars, FaWhatsapp } from 'react-icons/fa';
import { VscAccount } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';
import type { HeaderProps } from '../types/types';
import { Link } from 'react-router-dom';
import Home from './Home';
import { IoHome } from 'react-icons/io5';
import { BiSolidCategory } from 'react-icons/bi';
import { IoIosContact } from 'react-icons/io';

const Header: React.FC<HeaderProps> = ({ toggleCart }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;  
            if (isMenuOpen && !target.closest('.menu-container')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);  

    return (
        <header className="relative overflow-hidden">
            <div className="bg-gradient-to-r from-[#7ed40d] to-purple-900 h-[100px] flex flex-col justify-between">
                {/* Logo */}
                <div className="flex items-center justify-between p-4">
                    <Link to="/">
                        <img src="/1.png" alt="Logo" className="h-12 w-auto sm:h-16" />
                    </Link>
                    {/* Barra de búsqueda */}
                    <div className="flex-1 mx-4">
                        <input
                            type="text"
                            placeholder="Buscar productos..."
                            className="w-96 p-2 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        />
                    </div>
                    {/* Menú y botones */}
                    <br/>
                    <div className="flex items-center space-x-2 md:space-x-4">
                        {/*<button
                            onClick={toggleMenu}
                            aria-label="Abrir menú"
                            className="bg-white text-orange-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-300 flex items-center"
                        >
                            <FaBars className="inline-block mr-2" /> Categorías
                        </button>
                        <button
                            onClick={() => navigate('/pages/login')} //modificar para que tome numero de whatsapp
                            className="hidden sm:flex bg-white text-orange-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-300 items-center"
                        >
                            <FaWhatsapp className="inline-block mr-2" /> Whatsapp
                        </button>*/}
                        <button
                            onClick={Home}
                            className="bg-white text-orange-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-300 flex items-center"
                        >
                            <IoHome className='mr-2'/>Inicio
                        </button>
                        <button
                            onClick={toggleMenu}
                            aria-label="Abrir menú"
                            className="bg-white text-orange-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-300 flex items-center"
                        >
                            <FaBars className="inline-block mr-2"/>Categorias
                        </button>
                        <button
                            onClick={toggleMenu}
                            aria-label="Abrir menú"
                            className="bg-white text-orange-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-300 flex items-center"
                        >
                            <IoIosContact className="inline-block mr-2" />Contacto
                        </button>
                        <button
                            onClick={toggleCart}
                            className="bg-white text-orange-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-300 flex items-center"
                        >
                            <FaShoppingCart />
                        </button>
                        
                    </div>
                </div>
            </div>

            {/* Menú móvil (visible solo si está abierto) */}
            {isMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white text-purple-600 p-4 md:hidden menu-container">
                    <button onClick={toggleMenu} className="text-lg">Cerrar</button>
                    <div className="mt-4 mb-2">
                        <input
                            type="text"
                            placeholder="Buscar productos..."
                            className="w-full p-2 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        />
                    </div>
                    <button
                        onClick={() => navigate('/pages/login')}
                        className="w-full bg-white text-purple-600 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-300 flex items-center mb-2"
                    >
                        <VscAccount className="inline-block mr-2" /> Ingresar
                    </button>
                    <ul className="mt-2 space-y-2">
                        <li><a href="#" className="block">Categoría 1</a></li>
                        <li><a href="#" className="block">Categoría 2</a></li>
                        <li><a href="#" className="block">Categoría 3</a></li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;