import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer({ setActivePage, scrollToSection }) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (page, sectionId = null) => {
    setActivePage(page);
    if (sectionId) {
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-mariana-navy border-t border-white/5 pt-16 pb-8 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand & About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavClick('home')}>
              <div className="bg-liturgical-gold/20 p-2 rounded-full border border-liturgical-gold/40">
                <span className="text-liturgical-gold font-serif font-bold text-lg leading-none">†</span>
              </div>
              <div>
                <span className="block text-md font-serif font-bold text-white tracking-wide">
                  Paróquia N. S. da Guia
                </span>
                <span className="block text-[9px] uppercase text-gray-500 tracking-wider">
                  Mauá - Magé - RJ
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Uma comunidade de fé acolhedora e atuante, buscando levar a presença e o amor de Deus a cada lar no distrito de Mauá.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-liturgical-gold hover:text-mariana-navy transition-all text-gray-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-liturgical-gold hover:text-mariana-navy transition-all text-gray-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-liturgical-gold hover:text-mariana-navy transition-all text-gray-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.002 3.002 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-white font-serif font-semibold text-base mb-4 border-b border-liturgical-gold/20 pb-2">
              Links Úteis
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-liturgical-gold hover:translate-x-1 transition-all cursor-pointer">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-liturgical-gold hover:translate-x-1 transition-all cursor-pointer">
                  Quem Somos (Sobre Nós)
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('home', 'horarios')} className="hover:text-liturgical-gold hover:translate-x-1 transition-all cursor-pointer">
                  Horários de Missa
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('home', 'capelas')} className="hover:text-liturgical-gold hover:translate-x-1 transition-all cursor-pointer">
                  Nossas 9 Capelas
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('home', 'pastorais')} className="hover:text-liturgical-gold hover:translate-x-1 transition-all cursor-pointer">
                  Pastorais e Serviços
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-liturgical-gold hover:translate-x-1 transition-all cursor-pointer">
                  Fale Conosco
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Secretariat Hours */}
          <div>
            <h3 className="text-white font-serif font-semibold text-base mb-4 border-b border-liturgical-gold/20 pb-2">
              Secretaria Paroquial
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2.5">
                <Clock size={16} className="text-liturgical-gold shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-gray-300">Terça a Sexta</span>
                  <span className="block text-gray-500 text-xs">08:00 - 12:00 | 17:00 - 18:30</span>
                </div>
              </li>
              <li className="flex items-start space-x-2.5">
                <Clock size={16} className="text-liturgical-gold shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-gray-300">Sábados</span>
                  <span className="block text-gray-500 text-xs">08:00 - 12:00</span>
                </div>
              </li>
              <li className="text-xs text-liturgical-gold/80 italic pt-1">
                * Agende confissões, batismos e casamentos com antecedência por telefone ou presencialmente.
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h3 className="text-white font-serif font-semibold text-base mb-4 border-b border-liturgical-gold/20 pb-2">
              Onde Estamos
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start space-x-2.5">
                <MapPin size={18} className="text-liturgical-gold shrink-0 mt-0.5" />
                <span className="leading-tight text-gray-300">
                  Igreja de São Pedro<br />
                  Praça Palmira Barenco – Praia de Olaria – Mauá<br />
                  Guia de Pacobaíba (Magé), RJ<br />
                  CEP: 25930-000
                </span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone size={16} className="text-liturgical-gold shrink-0" />
                <span className="text-gray-300">+55 (21) 98578-0538</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail size={16} className="text-liturgical-gold shrink-0" />
                <span className="text-gray-300 break-all">nsguia-pacobaiba@diocesepetropolis.org.br</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {currentYear} Paróquia Nossa Senhora da Guia. Todos os direitos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span>Doutrina Católica</span>
            <span>•</span>
            <span>Diocese de Petrópolis</span>
            <span>•</span>
            <span>Feito com fé e devoção</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
