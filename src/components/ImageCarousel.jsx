import React from 'react';
// Importa los componentes de Swiper que necesitas
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Importa los estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ImageCarousel = ({ images }) => {
  return (
    <Swiper
      // Instala los módulos que usarás
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation // Habilita las flechas de navegación
      pagination={{ clickable: true }} // Habilita la paginación (los puntos inferiores)
      loop={true} // Permite que el carrusel sea infinito
      autoplay={{
        delay: 4000, // Cambia de imagen cada 4 segundos
        disableOnInteraction: false, // No detiene el autoplay si el usuario interactúa
      }}
      className="w-full h-full rounded-lg shadow-lg"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="group overflow-hidden bg-gray-200">
          <img 
            src={image.src} 
            alt={image.alt} 
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" 
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
