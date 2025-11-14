import React from 'react';
// 1. Importa las imágenes de los productos desde la carpeta de assets
import imgCompresion from '../assets/images/img_3.png';
import AnimateOnScroll from './AnimateOnScroll';
import imgTraccion from '../assets/images/img_4.png';
import imgAlambre from '../assets/images/formas-alambre.jpeg';

// Datos de ejemplo para los productos
const productos = [
  {
    nombre: 'Resortes de Compresión',
    descripcion: 'Ideales para aplicaciones que requieren resistencia a fuerzas de compresión.',
    imagen: imgCompresion // 2. Usa la imagen importada
  },
  {
    nombre: 'Resortes de Tracción',
    descripcion: 'Diseñados para operar con una carga de tensión, con ganchos en los extremos.',
    imagen: imgTraccion // 2. Usa la imagen importada
  },
  {
    nombre: 'Formas de Alambre',
    descripcion: 'Piezas de alambre dobladas en formas específicas para funciones mecánicas diversas.',
    imagen: imgAlambre // 2. Usa la imagen importada
  }
];

const Productos = () => {
  return (
    <section id="productos" className="py-20 px-6 bg-transparent">
      <div className="container mx-auto">
        <AnimateOnScroll className="text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-100">Nuestros Productos</h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productos.map((producto, index) => (
            <AnimateOnScroll key={index} delay={index * 150}>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg shadow-lg overflow-hidden h-full transform hover:-translate-y-2 transition-transform duration-300">
                <img src={producto.imagen} alt={producto.nombre} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{producto.nombre}</h3>
                  <p className="text-gray-600">{producto.descripcion}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Productos;