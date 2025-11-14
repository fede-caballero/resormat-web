import React from 'react';
import useIntersectionObserver from './useIntersectionObserver';
import ImageCarousel from './ImageCarousel';

// 1. Importa tus imágenes desde la carpeta de assets
// TODO: Reemplaza estos nombres con los nombres reales de tus archivos de imagen
import maquina1 from '../assets/images/fabrica1.png';
import maquina2 from '../assets/images/fabrica2.png';
import maquina3 from '../assets/images/fabrica3.png';
import maquina4 from '../assets/images/fabrica4.png';

// 2. Usa las imágenes importadas en tu array
const factoryImages = [
  { src: maquina1, alt: 'Vista de máquina' },
  { src: maquina2, alt: 'Vista de máquina' },
  { src: maquina3, alt: 'Vista de máquina' },
  { src: maquina4, alt: 'Vista de máquina' },
  // Puedes agregar más imágenes aquí simplemente importándolas y añadiéndolas al array
];

const About = () => {
  const [aboutRef, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div
      ref={aboutRef}
      className={`py-20 bg-light transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Columna de Texto */}
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Más de 40 Años de Experiencia
            </h2>
            <div className="w-24 h-1 bg-primary mb-6"></div>
            <p className="text-dark/80 mb-4">
              Desde 1979, Resormat S.R.L. se ha consolidado como un referente en la fabricación de resortes de precisión. Nuestro compromiso con la calidad y la innovación nos permite ofrecer soluciones a medida para las industrias más exigentes.
            </p>
            <p className="text-dark/80">
              Contamos con tecnología de punta y un equipo de profesionales altamente capacitados para garantizar productos que cumplen con los más altos estándares internacionales.
            </p>
          </div>

          {/* Columna de Imagen (ahora carrusel) */}
          <div className="w-full h-80 md:h-96 min-w-0"> {/* Añadido min-w-0 para prevenir overflow en flex/grid */}
            {/* El componente ImageCarousel ahora usa tus imágenes locales */}
            <ImageCarousel images={factoryImages} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
