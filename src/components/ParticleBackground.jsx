import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const ParticleBackground = () => {
  // Esta función se llama una sola vez para cargar el motor de tsParticles
  const particlesInit = useCallback(async (engine) => {
    // Carga la versión "slim" del motor, que es más ligera
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    background: {
      color: {
        value: '#1a1a1a', // Fondo gris oscuro, casi negro
      },
    },
    fpsLimit: 60, // Limita los FPS para un mejor rendimiento
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse', // Activa el modo de repulsión al pasar el mouse
        },
      },
      modes: {
        repulse: {
          distance: 150, // Distancia de repulsión
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ['#7f8c8d', '#95a5a6', '#bdc3c7'], // Tonos metálicos/grises
      },
      links: {
        enable: false, // Desactivamos las líneas entre partículas
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'out', // Las partículas desaparecen al salir del lienzo
        },
        random: true,
        speed: 1, // Velocidad de movimiento lenta y sutil
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 50, // Cantidad de partículas. Ajusta según rendimiento.
      },
      opacity: {
        value: { min: 0.3, max: 0.8 }, // Opacidad aleatoria para dar profundidad
      },
      shape: {
        type: 'polygon', // Forma de polígono para simular fragmentos
        polygon: {
          nb_sides: 6, // Hexágonos, parecen tuercas o fragmentos
        },
      },
      size: {
        value: { min: 1, max: 4 }, // Tamaños aleatorios
      },
    },
    detectRetina: true, // Mejora la calidad en pantallas de alta resolución
  };

  return (
    <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
  );
};

export default ParticleBackground;