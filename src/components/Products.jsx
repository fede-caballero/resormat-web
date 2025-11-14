import React from 'react';
import useIntersectionObserver from './useIntersectionObserver';

// TODO: Reemplaza con los nombres de tus archivos de imagen
import imgCompresion from '../assets/images/img_3.png';
import imgTraccion from '../assets/images/img_4.png';
import imgFormas from '../assets/images/formas-alambre.jpeg';

const ProductCard = ({ title, description, imageSrc }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
    <img src={imageSrc} alt={`Imagen de ${title}`} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-dark mb-2">{title}</h3>
      <p className="text-dark/80">{description}</p>
    </div>
    <div className="bg-primary h-1"></div>
  </div>
);

const Products = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const products = [
    {
      title: 'Resortes de Compresión',
      description: 'Fabricados para resistir fuerzas de compresión. Disponibles en una amplia gama de tamaños y materiales para todo tipo de aplicaciones.',
      imageSrc: imgCompresion,
    },
    {
      title: 'Resortes de Tracción',
      description: 'Diseñados para operar con una carga de tensión. Producimos resortes de tracción con diferentes tipos de ganchos según sus necesidades.',
      imageSrc: imgTraccion,
    },
    {
      title: 'Formas de Alambre',
      description: 'Desarrollamos piezas complejas y formas de alambre a medida, utilizando maquinaria de precisión para cumplir con sus especificaciones exactas.',
      imageSrc: imgFormas,
    },
  ];

  return (
    <div
      ref={ref}
      className={`container mx-auto px-6 py-20 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-dark">
          Nuestra Línea de Productos
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
