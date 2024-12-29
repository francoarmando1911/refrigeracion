import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaBars, FaSearch, FaTools } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import { IoHome } from 'react-icons/io5';
import { IoIosContact } from 'react-icons/io';
import { CgSmartHomeBoiler, CgSmartHomeRefrigerator } from 'react-icons/cg';
import { GiSplitCross } from 'react-icons/gi';
import { TbWavesElectricity } from 'react-icons/tb';
import { SiProtools } from 'react-icons/si';

interface HeaderProps {
    toggleCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleCart }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            console.log('Clicked element:', event.target);
            const target = event.target as HTMLElement | null;
            if (isMenuOpen && target && !target.closest('.menu-container')) {
                console.log('Closing menu');
                setIsMenuOpen(false);
            }
        };


        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <header className="relative sticky top-0 z-10 overflow-hidden"> 
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 h-auto flex flex-col md:flex-row md:justify-between items-center p-4 space-y-4 md:space-y-0">
                
                {/* Logo */}
                <div className="flex justify-center md:justify-start">
                    <Link to="/">
                        <img src="/logo3.png" alt="Logo" className="h-12 w-auto sm:h-20" />
                    </Link>
                </div>

                {/* Barra de búsqueda */}
                <div className="w-full md:w-auto flex justify-center">
                    <input
                        type="text"
                        placeholder="Buscar productos..."
                        className="w-10/12 md:w-96 p-2 rounded-2xl text-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    />
                    <button className="p-2 text-black hover:bg-blue-600">
                        <FaSearch />
                    </button>
                </div>

                {/* Botones */}
                <div className="flex flex-row justify-center items-center space-x-4">
                    <button
                        onClick={() => navigate('/')}
                        className="bg-white text-red-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-300"
                    >
                        <IoHome />
                    </button>
                    <button
                        onClick={toggleMenu}
                        aria-expanded={isMenuOpen}
                        aria-label="Abrir menú"
                        className="bg-white text-red-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-300"
                    >
                        <FaBars />
                    </button>
                    <button
                        onClick={() => navigate('/contact')}
                        aria-label="Contacto"
                        className="bg-white text-red-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-300"
                    >
                        <IoIosContact />
                    </button>
                    <button
                        onClick={toggleCart}
                        className="bg-white text-red-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-300"
                    >
                        <FaShoppingCart />
                    </button>
                </div>
            </div>

            {/* Menú móvil de las categorias*/}
            {isMenuOpen && (
                <div className="sticky top-16 left-0 bg-slate-200 text-red-700 p-4 menu-container md:top-0 md:static md:bg-white md:flex md:flex-col md:items-start">
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
                        <CgSmartHomeRefrigerator className="inline-block mr-2" /> Refrigeracion
                    </button>
                    <button
                        onClick={() => navigate('/AireAcondicionado')}
                        className="w-full bg-slate-50 text-red-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-300 flex items-center mb-2 md:w-auto"
                    >
                        <GiSplitCross className="inline-block mr-2" /> Aire Acondicionado
                    </button>
                    <button
                        onClick={() => navigate('/pages/login')}
                        className="w-full bg-slate-50 text-red-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-300 flex items-center mb-2 md:w-auto"
                    >
                        <SiProtools className="inline-block mr-2" /> Caños de cobre y Accesorios
                    </button>
                    <button
                        onClick={() => navigate('/pages/login')}
                        className="w-full bg-slate-50 text-red-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-300 flex items-center mb-2 md:w-auto"
                    >
                        <CgSmartHomeBoiler className="inline-block mr-2" /> Gases Refrigerantes
                    </button>
                    <button
                        onClick={() => navigate('/pages/login')}
                        className="w-full bg-slate-50 text-red-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-300 flex items-center mb-2 md:w-auto"
                    >
                        <TbWavesElectricity className="inline-block mr-2" /> Electricidad
                    </button>
                    <button
                        onClick={() => navigate('/pages/login')}
                        className="w-full bg-slate-50 text-red-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition duration-300 flex items-center mb-2 md:w-auto"
                    >
                        <FaTools className="inline-block mr-2" /> Herramientas
                    </button>
                </div>
            )}

        </header>
    );
};

export default Header;