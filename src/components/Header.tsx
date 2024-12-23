import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import { VscAccount } from 'react-icons/vsc';
import { useNavigate, Link } from 'react-router-dom';
import { IoHome } from 'react-icons/io5';
import { IoIosContact } from 'react-icons/io';

interface HeaderProps {
    toggleCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleCart }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
        <header className="header fixed overflow-hidden"> {/*relative overflow-hidden*/}
            <div className="bg-gradient-to-r from-[#7ed40d] to-purple-900 h-auto flex flex-col md:flex-row md:justify-between items-center p-4 space-y-4 md:space-y-0">
                {/* Logo */}
                <div className="flex justify-center md:justify-start">
                    <Link to="/">
                        <img src="/1.png" alt="Logo" className="h-12 w-auto sm:h-16" />
                    </Link>
                </div>

                {/* Barra de búsqueda */}
                <div className="w-full md:w-auto flex justify-center">
                    <input
                        type="text"
                        placeholder="Buscar productos..."
                        className="w-10/12 md:w-96 p-2 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    />
                </div>

                {/* Botones */}
                <div className="flex flex-row justify-center items-center space-x-4">
                    <button
                        onClick={() => navigate('/')}
                        className="bg-white text-orange-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-300"
                    >
                        <IoHome />
                    </button>
                    <button
                        onClick={toggleMenu}
                        aria-expanded={isMenuOpen}
                        aria-label="Abrir menú"
                        className="bg-white text-orange-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-300"
                    >
                        <FaBars />
                    </button>
                    <button
                        onClick={() => navigate('/contact')}
                        aria-label="Contacto"
                        className="bg-white text-orange-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-300"
                    >
                        <IoIosContact />
                    </button>
                    <button
                        onClick={toggleCart}
                        className="bg-white text-orange-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-300"
                    >
                        <FaShoppingCart />
                    </button>
                </div>
            </div>

            {/* Menú móvil */}
            {isMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white text-purple-600 p-4 md:hidden menu-container">
                    <button onClick={toggleMenu} className="text-lg mb-4">Cerrar</button>
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
                        <li><Link to="/category1" className="block">Categoría 1</Link></li>
                        <li><Link to="/category2" className="block">Categoría 2</Link></li>
                        <li><Link to="/category3" className="block">Categoría 3</Link></li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;