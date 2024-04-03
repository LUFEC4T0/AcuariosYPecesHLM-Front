import React, { useState } from 'react';
import { useCart } from '../utils/cart';
import { Link } from 'react-router-dom';
function Header() {
    const token = localStorage.getItem("token");
    const cart = localStorage.getItem("cart")
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () =>{
        localStorage.removeItem("token")
    }

    
    return (
        <>
        <div className="relative shadow bg-gray-900 md:flex md:justify-around md:sticky md:top-0 md:z-50">
            <div className="px-6 py-4 md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <a href="#">
                        <img className="lg:w-[3.3rem] lg:h-[3.3rem] sm:h-[2.5rem] sm:w-[2.5rem] w-[2rem] h-[2rem]" src="../public/Acuarios HLM logo blanco (sin letras) PNG.png" alt="" />
                    </a>

                    <div className="flex md:hidden">
                        <button onClick={toggleMenu} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                            {!isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <div className={`${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'} absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-900 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center md:gap-1`}>
                <div className="flex flex-col md:flex-row md:mx-20">
                    <a className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="/home">Inicio</a>
                    <a className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="/shop">Tienda</a>
                    <a className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="/about">Nosotros</a>
                    {!token ? (
                        <a className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="/login">Iniciar sesion</a>
                        ):(
                            <div className="flex flex-row ml-16 gap-5">
                                <a className="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="/clientcart">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
                                </a>
                                <Link className='flex flex-row gap-2' to='/clientinfo'>
                                    <p className='text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300'>Perfil</p>
                                    <img src="../public/logoPerfil.png" alt="" />
                                </Link>
                                <a onClick={handleLogout} className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="/">Cerrar sesión</a>
                            </div>
                        )    
                    }
                </div>
            </div>
        </div>
        <img className='w-[100%] h-[.8rem]' src="../public/barraFooter.png" alt="" />
        </>
    );
}


export default Header;
