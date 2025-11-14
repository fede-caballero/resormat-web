import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
// 1. Importa la imagen de fondo
import heroBackground from '../assets/images/interior-fabrica.png';

const Hero = ({ setActiveSection }) => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Se activa cuando el 50% de la sección es visible
  });

  useEffect(() => {
    if (inView) {
      setActiveSection('hero');
    }
  }, [inView, setActiveSection]);

  return (
    <section 
      ref={ref}
      id="hero"
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-gray-100"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Velo oscuro para mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* El contenido se coloca en un contenedor relativo para que esté por encima del velo */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Soluciones Precisas en Resortes Industriales
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"> {/* Cambiado a un gris más claro */}
          Fabricamos resortes a medida con más de 40 años de experiencia y calidad garantizada.
        </p>
        <a 
          href="#productos" 
          className="bg-primary text-gray-100 font-bold text-lg px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          Ver Nuestros Productos
        </a>
      </div>
    </section>
  );
};

export default Hero;
