import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimateOnScroll = ({ children, delay = 0, className = '' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // La animación se dispara solo una vez
    threshold: 0.1,    // Se activa cuando el 10% del elemento es visible
  });

  return (
    <div
      ref={ref}
      // Clases para la transición: empieza invisible y desplazado, termina visible y en su posición
      className={`transition-all duration-700 ease-out ${className} ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }} // Aplica el delay recibido
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;