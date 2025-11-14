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
          <p className="text-sm text-gray-400 mt-2">Diseño y Desarrollo Web</p>
        </div>
      </footer>
    </>
  );
};

export default ContactoFooter;