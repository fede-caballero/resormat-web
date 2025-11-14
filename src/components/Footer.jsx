import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-primary">Resormat</h3>
            <p className="text-sm text-light/70">&copy; {currentYear} Resormat. Todos los derechos reservados.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#nosotros" className="hover:text-primary transition-colors">Nosotros</a>
            <a href="#productos" className="hover:text-primary transition-colors">Productos</a>
            <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
