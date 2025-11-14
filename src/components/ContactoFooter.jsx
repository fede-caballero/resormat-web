import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const ContactoFooter = ({ setActiveSection }) => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      setActiveSection('contacto');
    }
  }, [inView, setActiveSection]);

  return (
    <>
      <section ref={ref} id="contacto" className="py-20 px-6 bg-transparent">
        {/* Mantenemos AnimateOnScroll para el efecto de entrada */}
        <div className="container mx-auto">
          <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-100">Contacto</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">¿Tenés un proyecto en mente? Completá el formulario o contactanos directamente. Estamos para ayudarte.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Columna de Información de Contacto */}
              <div className="space-y-6 text-center">
                <h3 className="text-2xl font-bold text-gray-100">Información de Contacto</h3>
                <p className="text-xl text-gray-300"><strong>Teléfono/Whatsapp:</strong> <a href="https://wa.me/5491130308394" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300">11 3030-8394</a></p>
                <p className="text-xl text-gray-300"><strong>Dirección:</strong> Vicente López, Buenos Aires</p>
                <p className="text-xl text-gray-300"><strong>Mail:</strong> <a href="mailto:info@resormat.com.ar" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300">info@resormat.com.ar</a></p>
              </div>

              {/* Columna del Formulario */}
              <div>
                <form className="space-y-6">
                  <div>
                    <input type="text" placeholder="Tu Nombre" required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <input type="email" placeholder="Tu Correo Electrónico" required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <input type="tel" placeholder="Tu Teléfono" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <input type="text" placeholder="Asunto" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
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
              </div>
            </div>
          </div>
        </section>

      <footer className="bg-black/30 text-gray-300 py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Resormat S.R.L. Todos los derechos reservados.</p>
          <a 
            href="https://github.com/fede-caballero" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors duration-300 mt-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
            Desarrollado por Federico Caballero
          </a>
        </div>
      </footer>
    </>
  );
};

export default ContactoFooter;