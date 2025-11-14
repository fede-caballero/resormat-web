import React, { useState, useEffect } from 'react';
import logo from '../assets/images/Logo-solo.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Si el scroll vertical es mayor a 10px, cambiamos el estado
      setScrolled(window.scrollY > 10);
    };

    // Agregamos el listener cuando el componente se monta
    window.addEventListener('scroll', handleScroll);

    // Limpiamos el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Evita el scroll del body cuando el menú está abierto
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]); // Ahora se ejecuta cada vez que isMenuOpen cambia

  return (
    <header
      className={`bg-light/95 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : 'shadow-md'}`}
    >
      <div className={`container mx-auto px-6 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3">
            <img src={logo} alt="Logo Resormat" className={`w-auto transition-all duration-300 ${scrolled ? 'h-10' : 'h-16'}`} />
            <span className={`font-saira-stencil text-dark hidden sm:block transition-all duration-300 ${scrolled ? 'text-2xl' : 'text-3xl'}`}>
              Resormat
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#nosotros" className="text-dark hover:text-primary transition-colors font-semibold text-lg">Nosotros</a>
            <a href="#productos" className="text-dark hover:text-primary transition-colors font-semibold text-lg">Productos</a>
            <a href="#contacto" className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors text-lg">
              Contacto
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-dark focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="flex flex-col px-6 pb-4 space-y-2">
          <a href="#nosotros" onClick={() => setIsMenuOpen(false)} className="block py-2 text-dark text-lg hover:text-primary transition-colors">Nosotros</a>
          <a href="#productos" onClick={() => setIsMenuOpen(false)} className="block py-2 text-dark text-lg hover:text-primary transition-colors">Productos</a>
          <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="block py-2 text-dark text-lg hover:text-primary transition-colors">Contacto</a>
        </nav>
      </div>

    </header>
  );
};

export default Header;
