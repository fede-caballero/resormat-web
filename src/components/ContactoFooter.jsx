import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const ContactoFooter = () => {
  return (
    <>
      <section id="contacto" className="py-20 px-6 bg-transparent">
        <div className="container mx-auto">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-100">Contacto</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">¿Tenés un proyecto en mente? Completá el formulario o contactanos directamente. Estamos para ayudarte.</p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Columna de Información de Contacto */}
            <AnimateOnScroll delay={150} className="space-y-6 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-100">Información de Contacto</h3>
              <p className="text-gray-300"><strong>Dirección:</strong> Av. Industrial 123, Parque Industrial, Buenos Aires, Argentina.</p>
              <p className="text-gray-300"><strong>Teléfono:</strong> +54 11 4444-5555</p>
              <p className="text-gray-300"><strong>Email:</strong> <a href="mailto:consultas@resormat.com.ar" className="text-primary hover:underline">consultas@resormat.com.ar</a></p>
              <p className="text-gray-300"><strong>Horario:</strong> Lunes a Viernes de 8:00 a 17:00 hs.</p>
            </AnimateOnScroll>

            {/* Columna del Formulario */}
            <AnimateOnScroll delay={300}>
              <form className="space-y-6">
                <div>
                  <input type="text" placeholder="Tu Nombre" required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <input type="email" placeholder="Tu Correo Electrónico" required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <textarea placeholder="Tu Mensaje" rows="5" required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-primary text-white font-bold text-lg px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 w-full disabled:bg-gray-400"
                >
                  Enviar Consulta
                </button>
              </form>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <footer className="bg-black/30 text-gray-300 py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Resormat S.R.L. Todos los derechos reservados.</p>
          <p className="text-sm text-gray-400 mt-2">Diseño y Desarrollo Web</p>
        </div>
      </footer>
    </>
  );
};

export default ContactoFooter;