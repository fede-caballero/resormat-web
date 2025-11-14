import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ParticleBackground from './components/ParticleBackground';
import Nosotros from './components/Nosotros';
import Productos from './components/Productos';
import ContactoFooter from './components/ContactoFooter';

function App() {
  const [activeSection, setActiveSection] = useState('');

  return (
    <div className="bg-transparent text-light font-sans">
      {/* El fondo de partículas se posiciona detrás de todo */}
      <div className="fixed top-0 left-0 w-full h-full z-[-1]">
        <ParticleBackground />
      </div>

      {/* El Header ahora es fixed para que se mantenga sobre todo el contenido */}
      <Header activeSection={activeSection} />

      <main>
        {/* Hero se renderiza directamente para usar el fondo de partículas */}
        <Hero setActiveSection={setActiveSection} />

        {/* Este div contendrá el resto de las secciones con un fondo claro */}
        <div className="relative z-10 bg-transparent">
          <Nosotros setActiveSection={setActiveSection} />
          <Productos setActiveSection={setActiveSection} />
          <ContactoFooter setActiveSection={setActiveSection} />
        </div>
      </main>
    </div>
  );
}

export default App;
