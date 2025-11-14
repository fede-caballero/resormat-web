import React from 'react';
import useIntersectionObserver from './useIntersectionObserver';

// Placeholder icons
const MailIcon = () => <svg className="w-6 h-6 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>;
const PhoneIcon = () => <svg className="w-6 h-6 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>;
const LocationIcon = () => <svg className="w-6 h-6 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>;


const Contact = () => {
  const [contactRef, isVisible] = useIntersectionObserver({
    threshold: 0.1, // El elemento se considerará visible cuando el 10% esté en pantalla
  });

  // TODO: Reemplaza la URL con tu propio endpoint de Formspree.
  // Puedes crear uno gratis en https://formspree.io/
  const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORM_ID";

  return (
    <div
      ref={contactRef}
      className={`container mx-auto px-6 py-20 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-dark">
          Contactanos
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-dark mb-4">Hablemos</h3>
            <p className="text-dark/80">
              Estamos listos para asesorarte y ofrecerte la mejor solución en resortes para tu proyecto. Completa el formulario o contáctanos directamente.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <PhoneIcon />
              <span className="text-lg text-dark">(011) 4754-3389 / 4752-7833</span>
            </div>
            <div className="flex items-center">
              <MailIcon />
              <span className="text-lg text-dark">ventas@resormat.com.ar</span>
            </div>
            <div className="flex items-center">
              <LocationIcon />
              <span className="text-lg text-dark">San Andrés, Buenos Aires, Argentina</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form action={FORMSPREE_URL} method="POST" className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-5">
              <label htmlFor="name" className="block text-dark font-bold mb-2">Nombre</label>
              <input type="text" id="name" name="name" placeholder="Tu nombre" className="w-full px-4 py-3 border rounded-lg bg-light focus:outline-none focus:ring-2 focus:ring-primary" required />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block text-dark font-bold mb-2">Email</label>
              <input type="email" id="email" name="email" placeholder="tu@email.com" className="w-full px-4 py-3 border rounded-lg bg-light focus:outline-none focus:ring-2 focus:ring-primary" required />
            </div>
            <div className="mb-5">
              <label htmlFor="message" className="block text-dark font-bold mb-2">Mensaje</label>
              <textarea id="message" name="message" rows="5" placeholder="¿En qué podemos ayudarte?" className="w-full px-4 py-3 border rounded-lg bg-light focus:outline-none focus:ring-2 focus:ring-primary" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
