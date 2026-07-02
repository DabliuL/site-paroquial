import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ChevronRight, ArrowRight, BookOpen, Heart, Users, Compass, Megaphone, MessageCircle, Star, GraduationCap, Music, Droplets, Gift, CircleDot } from 'lucide-react';
import heroAltar from '../assets/hero_church_altar.png';
import priestPortrait from '../assets/priest_portrait.png';
import marianImg from '../assets/our_lady_guide.png';
import horarios from '../data/horarios.json';

export default function Home({ setActivePage, scrollToSection }) {


  const capelas = [
    {
      name: 'Igreja São Pedro',
      desc: 'Paróquia Nossa Senhora da Guia',
      address: 'Guia de Pacobaíba, Magé - RJ',
      time: 'Domingos às 10:00',
    },
    {
      name: 'Igreja Nossa Senhora da Guia',
      desc: 'Pacobaíba (Igreja Matriz)',
      address: 'Guia de Pacobaíba, Magé - RJ',
      time: 'Domingos às 08:00',
    },
    {
      name: 'Igreja Nossa Senhora das Graças e São Jorge',
      desc: 'Jardim da Prata',
      address: 'R. 81 - Jardim da Prata, Magé - RJ',
      time: 'Sábados às 18:00',
    },
    {
      name: 'Capela Nossa Senhora da Lampadosa',
      desc: 'Jardim da Paz',
      address: 'R. Vinte Seis Lto Jardim Da Paz, 455 - Jardim da Paz, Magé - RJ',
      time: 'Sábados às 19:30',
    },
    {
      name: 'Capela Nossa Senhora Aparecida e São Frei Galvão',
      desc: 'Parque Recreio Dom Pedro II',
      address: 'R. José Maria - Parque Recreio Dom Pedro II, Magé - RJ',
      time: 'Domingos às 18:30',
    },
    {
      name: 'Igreja Santa Filomena',
      desc: 'Leque Azul',
      address: 'R. Santa Filomena, 0 - Leque Azul, Magé - RJ',
      time: 'Domingos às 18:30',
    },
    {
      name: 'Igreja Nossa Senhora dos Remédios',
      desc: 'Jardim da Prata',
      address: 'R. Francisco Ab S Cruz, 204 - Jardim da Prata, Magé - RJ',
      time: 'Sábados às 08:30',
    },
    {
      name: 'Capela São Francisco de Croará',
      desc: 'Guia de Pacobaíba',
      address: 'Av. Beira Mar - Guia de Pacobaíba, Magé - RJ',
      time: 'Consulte a secretaria',
    },
    {
      name: 'Capela São Lourenço',
      desc: 'Goya',
      address: 'Estr. da Batalha, 416 - Goya, Magé - RJ',
      time: 'Consulte a secretaria',
    },
  ];

  const pastorais = [
    {
      title: 'Pastoral Familiar',
      icon: <Users size={24} />,
      desc: 'Evangelização e apoio ao matrimônio e à vida familiar. Encontros de noivos, casais e aconselhamento espiritual.',
    },
    {
      title: 'Setor Juventude',
      icon: <Compass size={24} />,
      desc: 'Espaço de partilha, música e aprofundamento na fé feito por jovens para jovens. Dinâmicas, retiros e oração.',
    },
    {
      title: 'Pastoral da Caridade',
      icon: <Heart size={24} />,
      desc: 'Assistência material e espiritual direta a famílias em vulnerabilidade social em Magé. Cestas básicas, agasalhos e apoio solidário.',
    },
    {
      title: 'Pastoral Litúrgica',
      icon: <BookOpen size={24} />,
      desc: 'Formação de leitores, acólitos e equipe de acolhida para enriquecer a celebração da Santa Missa.',
    },
    {
      title: 'Coroinhas',
      icon: <Star size={24} />,
      desc: 'Grupo de crianças e jovens que servem ao altar nas celebrações eucarísticas, desenvolvendo o amor à liturgia e à vida de fé.',
    },
    {
      title: 'Catequese',
      icon: <GraduationCap size={24} />,
      desc: 'Preparação de crianças, jovens e adultos para receber os sacramentos da iniciação cristã: Batismo, Eucaristia e Confirmação.',
    },
    {
      title: 'Pastoral do Dízimo',
      icon: <Gift size={24} />,
      desc: 'Animação e formação da comunidade sobre a importância do dízimo como ato de gratidão, partilha e sustento da missão paroquial.',
    },
    {
      title: 'Pastoral dos Músicos',
      icon: <Music size={24} />,
      desc: 'Grupo de cantores e instrumentistas que animam a oração e as celebrações litúrgicas com louvor, alegria e serviço à comunidade.',
    },
    {
      title: 'Terço dos Homens',
      icon: <CircleDot size={24} />,
      desc: 'Movimento de evangelização masculina que reúne homens de todas as idades para rezar o Terço, partilhar a fé e crescer em santidade.',
    },
    {
      title: 'Pastoral do Batismo',
      icon: <Droplets size={24} />,
      desc: 'Acompanhamento e preparação de pais e padrinhos para o sacramento do Batismo, primeiro passo na vida cristã e na comunidade eclesial.',
    },
  ];

  const priests = [
    {
      name: 'Padre Mateus Silva',
      role: 'Pároco Atual (Desde 2020)',
      period: '2020 - Presente',
      bio: 'Foco na dinamização das pastorais juvenis, ampliação dos serviços de caridade social em Magé e fortalecimento da unidade entre as 9 capelas.',
    },
    {
      name: 'Padre Francisco Souza',
      role: 'Pároco Emérito',
      period: '2012 - 2020',
      bio: 'Responsável pela reforma estrutural da Igreja Matriz e reestruturação administrativa e contábil da secretaria paroquial.',
    },
    {
      name: 'Padre Antônio Santos',
      role: 'Pároco Anterior',
      period: '2000 - 2012',
      bio: 'Fundador das pastorais sociais de acolhimento e forte incentivador da criação das comunidades e capelas periféricas.',
    },
  ];

  return (
    <div className="flex-grow">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 bg-black overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroAltar} 
            alt="Altar da Paróquia" 
            className="w-full h-full object-cover object-center opacity-40 scale-105 transition-all duration-1000"
          />
          {/* Overlays - Injected with richer blue and liturgical red tones */}
          <div className="absolute inset-0 bg-gradient-to-t from-mariana-navy via-mariana-navy/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-mariana-navy via-liturgical-red-dark/15 to-mariana-blue-light/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-12">
          {/* Humility Verse - Text only, centered */}
          <p className="text-[11px] sm:text-xs tracking-wider uppercase font-sans font-medium text-white max-w-3xl mx-auto mb-6 leading-relaxed">
            "Sirvam uns aos outros com um espírito humilde, pois Deus concede bênçãos especiais àqueles que são humildes, mas se opõe aos orgulhosos." - São Pedro
          </p>

          {/* Main Title - Replaced with the Parish Name */}
          <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight mb-6 leading-tight drop-shadow-md text-white">
            Paróquia <br className="sm:hidden" />
            <span className="text-liturgical-gold font-serif">Nossa Senhora da Guia</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-300 font-sans font-light max-w-3xl mx-auto mb-10 leading-relaxed">
            Bem-vindo à nossa paróquia em Mauá, Magé. Um espaço sagrado de acolhimento, oração e serviço onde juntos caminhamos sob o olhar maternal de Maria.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection('horarios')}
              className="w-full sm:w-auto bg-liturgical-gold hover:bg-liturgical-gold-dark text-mariana-navy font-bold px-8 py-4 rounded-full shadow-lg shadow-liturgical-gold/25 transition-all hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Horários de Missa</span>
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => setActivePage('about')}
              className="w-full sm:w-auto border border-white/20 hover:border-white/60 hover:bg-white/5 text-white font-semibold px-8 py-4 rounded-full transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Conheça Nossa História</span>
            </button>
          </div>
        </div>

        {/* Liturgical bottom border glow */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-liturgical-red via-liturgical-gold to-mariana-blue-accent"></div>
      </section>

      {/* 2. LITURGICAL MASS SCHEDULE */}
      <section id="horarios" className="py-24 bg-gradient-to-b from-mariana-navy to-mariana-navy/95 relative border-b border-white/5">
        <div className="absolute inset-0 bg-radial-gradient from-liturgical-red/5 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
              Encontro com o Sagrado
            </h2>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              Celebre os mistérios de Cristo em nossa comunidade. Confira os horários regulares de missas e sacramentos da Paróquia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mass Times Card - Liturgical Red Styling */}
            <div className="bg-gradient-to-br from-liturgical-red/15 to-mariana-navy/90 border border-liturgical-red/30 rounded-3xl p-8 backdrop-blur-sm shadow-md shadow-liturgical-red/5">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-liturgical-red/20 rounded-2xl border border-liturgical-red/40 text-liturgical-red-light">
                  <Calendar size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-white">Santas Missas</h3>
                  <p className="text-xs text-red-300">Celebrações nos Finais de Semana</p>
                </div>
              </div>
              
              <div className="space-y-5">
                {/* Sábados */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-liturgical-red-light mb-2 pb-1 border-b border-liturgical-red/20">
                    Sábados
                  </h4>
                  <div className="space-y-2">
                    {horarios.sabados.map((missa, i) => (
                      <div
                        key={i}
                        className={`flex justify-between items-center py-1 text-xs sm:text-sm ${
                          i < horarios.sabados.length - 1 ? 'border-b border-white/5' : ''
                        }`}
                      >
                        <span className="text-gray-300">{missa.igreja}</span>
                        <span className="bg-liturgical-red/20 text-red-200 text-xs font-bold px-2.5 py-0.5 rounded-full border border-liturgical-red/30">
                          {missa.horario}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Domingos */}
                <div className="pt-1">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-liturgical-gold mb-2 pb-1 border-b border-liturgical-gold/20">
                    Domingos
                  </h4>
                  <div className="space-y-2">
                    {horarios.domingos.map((missa, i) => (
                      <div
                        key={i}
                        className={`flex justify-between items-center py-1 text-xs sm:text-sm ${
                          i < horarios.domingos.length - 1 ? 'border-b border-white/5' : ''
                        }`}
                      >
                        <span className={`text-gray-300 ${
                          i === 0 ? 'font-medium text-white' : ''
                        }`}>{missa.igreja}</span>
                        <span className="bg-liturgical-gold/20 text-liturgical-gold-light text-xs font-bold px-2.5 py-0.5 rounded-full border border-liturgical-gold/30">
                          {missa.horario}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Confession & Office Card - Marian Blue Styling */}
            <div className="bg-gradient-to-br from-mariana-blue-light/15 to-mariana-navy/90 border border-mariana-blue-light/30 rounded-3xl p-8 backdrop-blur-sm shadow-md shadow-mariana-blue-light/5">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-mariana-blue-accent/20 rounded-2xl border border-mariana-blue-accent/40 text-mariana-blue-accent">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-white">Confissões e Secretaria</h3>
                  <p className="text-xs text-blue-300">Atendimento e Reconciliação</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="py-3 border-b border-white/5">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-gray-300">Atendimento de Confissão</span>
                    <span className="text-xs font-bold text-liturgical-gold">Horário Marcado</span>
                  </div>
                  <p className="text-sm text-gray-400">{horarios.confissoes}</p>
                </div>
                <div className="py-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-gray-300">Expediente Paroquial</span>
                    <span className="text-xs font-bold text-emerald-400">Aberto</span>
                  </div>
                  <p className="text-sm text-gray-400 whitespace-pre-line">{horarios.expediente}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Weekly Masses and Announcements Info Banner */}
          <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-mariana-blue-light/10 via-mariana-navy to-liturgical-red/10 border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h4 className="text-white font-serif font-semibold text-lg mb-1">
                Missas Semanais e Secretaria
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">{horarios.aviso_banner}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0 justify-end">
              <button
                onClick={() => setActivePage('contact')}
                className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold px-6 py-4 rounded-full flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
              >
                Falar com a Secretaria
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setActivePage('contact')}
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all cursor-pointer inline-flex items-center space-x-2"
            >
              <span>Pedir Intenção de Missa</span>
              <Megaphone size={14} className="text-liturgical-gold" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. PARISH WHATSAPP ANNOUNCEMENTS GROUP SECTION */}
      <section id="noticias" className="py-24 bg-mariana-navy relative overflow-hidden border-b border-white/5">
        {/* Soft decorative blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-mariana-blue-light/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-liturgical-gold-light bg-liturgical-gold/10 px-4 py-1.5 rounded-full border border-liturgical-gold/20 inline-block mb-4">
              Comunidade Conectada
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
              Grupo de Avisos Paroquiais
            </h2>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              Fique por dentro de todas as celebrações, atualizações de horários, eventos e avisos importantes diretamente no seu celular.
            </p>
          </div>

          {/* Unified Card */}
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-liturgical-gold/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Info & Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <MessageCircle size={26} className="animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                      Canal Oficial no WhatsApp
                    </h3>
                    <p className="text-xs text-emerald-400 font-medium">Grupo Silencioso e Informativo</p>
                  </div>
                </div>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans font-light">
                  Para facilitar a comunicação com todos os paroquianos e moradores de Mauá (Magé), criamos um canal de avisos no WhatsApp. Ele funciona de forma silenciosa: apenas os coordenadores e a secretaria enviam mensagens importantes. Sem conversas paralelas ou spam.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-emerald-400 text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-xs sm:text-sm">Avisos Rápidos</h4>
                      <p className="text-gray-400 text-xs mt-0.5">Comunicados urgentes e notícias paroquiais.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-emerald-400 text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-xs sm:text-sm">Liturgia Diária</h4>
                      <p className="text-gray-400 text-xs mt-0.5">Leituras e meditações do dia para alimentar sua fé.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-emerald-400 text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-xs sm:text-sm">Horários e Eventos</h4>
                      <p className="text-gray-400 text-xs mt-0.5">Datas de retiros, festas das capelas e missas.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-emerald-400 text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-xs sm:text-sm">100% Silencioso</h4>
                      <p className="text-gray-400 text-xs mt-0.5">Sem notificações desnecessárias ou conversas paralelas.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href="https://chat.whatsapp.com/mockGroupLink"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm px-8 py-4 rounded-2xl items-center justify-center space-x-3 shadow-lg shadow-emerald-500/15 hover:shadow-emerald-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer w-full sm:w-auto"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.742.002-2.602-1.005-5.05-2.839-6.89C16.656 2.134 14.22 1.127 11.99 1.127c-5.444 0-9.866 4.372-9.87 9.749-.001 1.764.476 3.486 1.382 5.01l-1.025 3.743 3.864-1.004c1.554.898 3.09 1.353 4.706 1.353zm11.233-7.513c-.301-.15-1.782-.872-2.056-.971-.274-.1-.475-.15-.675.15-.2.299-.775.971-.95 1.171-.175.2-.35.224-.651.075-1.162-.577-1.921-1.02-2.686-2.316-.2-.345-.2-.15.075-.425.275-.274.301-.349.45-.599.15-.25.075-.475-.038-.675-.112-.2-.675-1.623-.925-2.223-.244-.589-.494-.509-.675-.518-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8.375-.274.3-.15 1.172.925 2.196.2.274.3 1.162.775 1.871.4.6 1.05 1.163 1.775 1.5.725.337 1.45.225 1.95-.274.5-.499 1.701-1.696 1.751-2.122.05-.425-.075-.675-.225-.824z" />
                    </svg>
                    <span>Entrar no Grupo de Avisos</span>
                  </a>
                </div>
              </div>
              
              {/* Right Column: Interactive Chat Mockup */}
              <div className="lg:col-span-5 bg-mariana-navy/60 border border-white/10 rounded-2xl p-5 shadow-2xl relative space-y-4 max-w-sm mx-auto w-full">
                {/* Header bar of Chat */}
                <div className="flex items-center space-x-3 pb-3 border-b border-white/5">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-serif font-bold shrink-0">
                    †
                  </div>
                  <div className="font-sans">
                    <h4 className="text-white font-semibold text-xs sm:text-sm">Avisos - N. S. da Guia</h4>
                    <p className="text-[10px] text-emerald-400 font-medium">Canal Oficial Paroquial</p>
                  </div>
                </div>

                {/* Message list */}
                <div className="space-y-3 font-sans">
                  {/* Msg 1 */}
                  <div className="bg-emerald-950/40 border border-emerald-500/20 text-white rounded-2xl rounded-tl-none p-3.5 text-xs relative max-w-[90%]">
                    <p className="font-semibold text-emerald-400 mb-1">Pascom - Liturgia</p>
                    <p className="text-gray-300 leading-relaxed">Paz e Bem! A leitura bíblica de hoje nos convida à paciência e ao amor fraterno. Que Maria Santíssima guie seus passos neste dia. 📖🙏</p>
                    <span className="absolute bottom-1 right-2 text-[8px] text-gray-500">07:15</span>
                  </div>

                  {/* Msg 2 */}
                  <div className="bg-emerald-950/40 border border-emerald-500/20 text-white rounded-2xl rounded-tl-none p-3.5 text-xs relative max-w-[90%]">
                    <p className="font-semibold text-emerald-400 mb-1">Secretaria Paroquial</p>
                    <p className="text-gray-300 leading-relaxed">⚠️ Atenção: Excepcionalmente amanhã, o atendimento da secretaria será realizado apenas no horário da manhã (08:00 às 12:00) devido a reuniões pastorais diocesanas. Agradecemos a compreensão!</p>
                    <span className="absolute bottom-1 right-2 text-[8px] text-gray-500">14:30</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-center text-[10px] text-gray-500 font-sans">
                  <span>Somente administradores podem enviar mensagens</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 4. THE 9 CHAPELS GRID */}
      <section id="capelas" className="py-24 bg-mariana-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
              Nossas 9 Capelas
            </h2>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              Nossa paróquia abrange um vasto território em Mauá Magé, abrigando 9 capelas comunidades que realizam celebrações semanais e atividades pastorais locais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capelas.map((capela, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-b from-mariana-blue/60 to-mariana-navy/80 border border-mariana-blue-light/15 hover:border-liturgical-gold/40 rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between hover:translate-y-[-4px] shadow-sm hover:shadow-md"
              >
                <div>
                  {/* Decorative Cross Icon */}
                  <div className="w-8 h-8 rounded-full bg-liturgical-gold/10 flex items-center justify-center border border-liturgical-gold/20 mb-4">
                    <span className="text-xs text-liturgical-gold">†</span>
                  </div>
                  
                  <h3 className="text-lg font-serif font-bold text-white mb-1">
                    {capela.name}
                  </h3>
                  <p className="text-xs text-liturgical-gold-light font-medium tracking-wide mb-3">
                    {capela.desc}
                  </p>
                  
                  <p className="text-gray-400 text-xs flex items-start space-x-1.5 leading-relaxed mb-4">
                    <MapPin size={14} className="text-liturgical-gold shrink-0 mt-0.5" />
                    <span>{capela.address}</span>
                  </p>
                </div>
                
                <div className="border-t border-white/5 pt-4 mt-4 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-1 text-gray-500">
                    <Clock size={12} />
                    <span>{capela.time}</span>
                  </div>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(capela.name + ' ' + capela.address)}`} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-liturgical-gold font-bold hover:underline cursor-pointer"
                  >
                    Ver no Mapa
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PASTORALS & MINISTRIES */}
      <section id="pastorais" className="py-24 bg-gradient-to-b from-mariana-navy to-mariana-navy/95 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
              Pastorais e Serviços
            </h2>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              Participe ativamente e doe seus dons. Nossa paróquia conta com pastorais dedicadas aos jovens, às famílias, a retiros e a ações solidárias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastorais.map((pastoral, index) => {
              // Cycle through 5 accent color themes
              const colorCycle = index % 5;
              let borderHoverClass = 'hover:border-liturgical-gold/40';
              let iconBgClass = 'bg-liturgical-gold/10 border-liturgical-gold/20 text-liturgical-gold';

              if (colorCycle === 0) {
                borderHoverClass = 'hover:border-mariana-blue-light/50';
                iconBgClass = 'bg-mariana-blue-light/20 border-mariana-blue-light/30 text-blue-300';
              } else if (colorCycle === 1) {
                borderHoverClass = 'hover:border-liturgical-red/50';
                iconBgClass = 'bg-liturgical-red/20 border-liturgical-red/30 text-red-300';
              } else if (colorCycle === 2) {
                borderHoverClass = 'hover:border-emerald-500/50';
                iconBgClass = 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300';
              } else if (colorCycle === 3) {
                borderHoverClass = 'hover:border-liturgical-gold/50';
                iconBgClass = 'bg-liturgical-gold/10 border-liturgical-gold/20 text-liturgical-gold';
              } else {
                borderHoverClass = 'hover:border-purple-400/50';
                iconBgClass = 'bg-purple-500/10 border-purple-500/20 text-purple-300';
              }
              
              return (
                <div 
                  key={index} 
                  className={`bg-mariana-blue/30 border border-white/5 ${borderHoverClass} rounded-3xl p-8 flex items-start space-x-5 transition-all duration-300 hover:bg-mariana-blue/40`}
                >
                  <div className={`p-4 rounded-2xl border shrink-0 ${iconBgClass}`}>
                    {pastoral.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-white mb-2">
                      {pastoral.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {pastoral.desc}
                    </p>
                    <button 
                      onClick={() => {
                        const phoneNumber = '5521985780538';
                        const text = `Olá! Tenho interesse em participar ou ajudar na ${pastoral.title}. Como posso me inscrever?`;
                        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
                      }}
                      className="text-xs font-bold text-liturgical-gold hover:text-liturgical-gold-light flex items-center space-x-1 cursor-pointer"
                    >
                      <span>Quero Participar</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. TIMELINE OF PRIESTS */}
      <section className="py-24 bg-mariana-navy border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
              Nossos Párocos
            </h2>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              Nossa sincera gratidão aos sacerdotes que doaram suas vidas guiando espiritualmente nossa paróquia em Mauá ao longo de nossa história.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-12 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-white/10">
            {priests.map((priest, index) => (
              <div 
                key={index}
                className={`flex flex-col md:flex-row relative ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot/Icon */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-liturgical-gold border-4 border-mariana-navy z-10 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-mariana-navy leading-none">†</span>
                </div>

                {/* Content Block */}
                <div className="pl-12 md:pl-0 w-full md:w-1/2 px-4">
                  <div className="bg-white/5 border border-white/5 rounded-3xl p-6 hover:border-liturgical-gold/20 transition-all duration-300">
                    <div className="flex items-center space-x-4 mb-4">
                      {index === 0 && (
                        <img 
                          src={priestPortrait} 
                          alt={priest.name} 
                          className="w-16 h-16 rounded-full object-cover border-2 border-liturgical-gold/60"
                        />
                      )}
                      <div>
                        <h3 className="text-lg font-serif font-bold text-white leading-tight">{priest.name}</h3>
                        <span className="text-xs text-liturgical-gold-light font-medium">{priest.role}</span>
                        <span className="block text-[10px] text-gray-500 font-semibold uppercase tracking-wider mt-0.5">{priest.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {priest.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
