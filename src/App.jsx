import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import About from './pages/About';
import Patroness from './pages/Patroness';
import Contact from './pages/Contact';

function App() {
  const [activePage, setActivePage] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset for sticky navbar (approx 80px)
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} scrollToSection={scrollToSection} />;
      case 'about':
        return <About />;
      case 'patroness':
        return <Patroness />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActivePage={setActivePage} scrollToSection={scrollToSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-mariana-navy flex flex-col font-sans select-none antialiased">
      {/* Sticky Glassmorphism Header */}
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        scrollToSection={scrollToSection} 
      />

      {/* Main Page Content */}
      <main className="flex-grow flex flex-col">
        {renderPage()}
      </main>

      {/* Footer component */}
      <Footer 
        setActivePage={setActivePage} 
        scrollToSection={scrollToSection} 
      />

      {/* Floating interactive elements */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
