import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

// 1. Importa Swiper y sus módulos
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

// 2. Importa los estilos de Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// 3. Importa las imágenes para el carrusel
import fabrica1 from '../assets/images/fabrica1.png';
import fabrica2 from '../assets/images/fabrica2.png';
import fabrica3 from '../assets/images/fabrica3.png';
import fabrica4 from '../assets/images/fabrica4.png';

const imagenesFabrica = [fabrica1, fabrica2, fabrica3, fabrica4];

const Nosotros = () => {
  return (
    <AnimateOnScroll>
      <section id="nosotros" className="py-20 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Columna de Texto */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6 text-gray-100">Sobre Nosotros</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Desde 1979, en Resormat S.R.L. nos dedicamos a la fabricación de resortes de precisión para todo tipo de industrias. Nuestra trayectoria de más de 40 años es un testimonio de nuestro compromiso con la calidad, la innovación y la satisfacción del cliente. Contamos con tecnología de punta y un equipo de expertos para ofrecer soluciones a medida.
            </p>
          </div>

          {/* Columna del Carrusel de Imágenes */}
          <div className="w-full">
            <Swiper
              modules={[Autoplay, Pagination, EffectFade]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              effect="fade"
              className="rounded-lg shadow-xl overflow-hidden"
            >
              {imagenesFabrica.map((img, index) => (
                <SwiperSlide key={index}>
                  <img src={img} alt={`Imagen de la fábrica ${index + 1}`} className="w-full h-full object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </AnimateOnScroll>
  );
};

export default Nosotros;