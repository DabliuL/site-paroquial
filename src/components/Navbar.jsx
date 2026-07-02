import React, { useState, useEffect } from 'react';
import { Menu, X, Cross } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, scrollToSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page, sectionId = null) => {
    setIsMobileMenuOpen(false);
    setActivePage(page);
    
    if (sectionId) {
      if (page === 'home') {
        // Allow state change to render home first, then scroll
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Início', page: 'home', sectionId: null },
    { label: 'Quem Somos', page: 'about', sectionId: null },
    { label: 'Padroeira', page: 'patroness', sectionId: null },
    { label: 'Capelas', page: 'home', sectionId: 'capelas' },
    { label: 'Pastorais', page: 'home', sectionId: 'pastorais' },
    { label: 'Notícias', page: 'home', sectionId: 'noticias' },
    { label: 'Contato', page: 'contact', sectionId: null },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-mariana-navy/90 shadow-lg border-b border-white/5 backdrop-blur-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="bg-liturgical-gold/20 p-2 rounded-full border border-liturgical-gold/40 group-hover:bg-liturgical-gold/30 transition-all">
              <span className="text-liturgical-gold font-serif font-bold text-xl leading-none">†</span>
            </div>
            <div>
              <span className="block text-lg font-serif font-bold text-white tracking-wide leading-tight group-hover:text-liturgical-gold transition-colors">
                N. S. da Guia
              </span>
              <span className="block text-[10px] uppercase text-gray-400 tracking-widest font-sans">
                Paróquia • Magé - RJ
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isLinkActive = 
                (link.page === activePage && !link.sectionId) ||
                (link.sectionId && activePage === 'home'); // simplify active checking
              
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.page, link.sectionId)}
                  className={`text-sm font-medium tracking-wide transition-all hover:text-liturgical-gold cursor-pointer relative py-1 ${
                    isLinkActive ? 'text-liturgical-gold' : 'text-gray-300'
                  }`}
                >
                  {link.label}
                  {isLinkActive && !link.sectionId && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-liturgical-gold rounded-full"></span>
                  )}
                </button>
              );
            })}
            
            <button
              onClick={() => handleNavClick('home', 'horarios')}
              className="bg-liturgical-gold hover:bg-liturgical-gold-dark text-mariana-navy font-bold text-sm px-5 py-2.5 rounded-full shadow-md shadow-liturgical-gold/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              Horários de Missa
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2 focus:outline-none cursor-pointer"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-4 space-y-1 bg-mariana-navy/95 border-b border-white/5 backdrop-blur-lg">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.page, link.sectionId)}
                className="block w-full text-left px-4 py-3 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-liturgical-gold rounded-lg transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 px-4">
              <button
                onClick={() => handleNavClick('home', 'horarios')}
                className="w-full bg-liturgical-gold hover:bg-liturgical-gold-dark text-mariana-navy font-bold text-center py-3 rounded-full transition-colors cursor-pointer"
              >
                Horários de Missa
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
