import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ChevronRight, ArrowRight, BookOpen, Heart, Users, Compass, Megaphone, MessageCircle, Star, GraduationCap, Music, Droplets, Gift, CircleDot, Copy, Check, QrCode, Building2 } from 'lucide-react';
import heroAltar from '../assets/hero_church_altar.png';
import marianImg from '../assets/our_lady_guide.png';
import horarios from '../data/horarios.json';
import avisos from '../data/avisos.json';
import dizimoData from '../data/dizimo.json';

export default function Home({ setActivePage, scrollToSection }) {
  const [copiedPix, setCopiedPix] = useState(false);

  const handleCopyPix = () => {
    if (dizimoData?.chave_pix) {
      navigator.clipboard.writeText(dizimoData.chave_pix);
      setCopiedPix(true);
      setTimeout(() => setCopiedPix(false), 2500);
    }
  };
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
              onClick={() => setActivePage('contact')}
              className="w-full sm:w-auto border border-white/20 hover:border-white/60 hover:bg-white/5 text-white font-semibold px-8 py-4 rounded-full transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Fale Conosco</span>
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

      {/* 3. PARISH ANNOUNCEMENTS SECTION */}
      <section id="noticias" className="py-24 bg-mariana-navy relative overflow-hidden border-b border-white/5">
        {/* Soft decorative blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-mariana-blue-light/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-liturgical-gold-light bg-liturgical-gold/10 px-4 py-1.5 rounded-full border border-liturgical-gold/20 inline-block mb-4">
              Mural da Paróquia
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
              Avisos Paroquiais
            </h2>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              Fique por dentro das últimas notícias, comunicados da secretaria e recados importantes da nossa comunidade.
            </p>
          </div>

          {/* Avisos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(Array.isArray(avisos) ? avisos : (avisos.avisos || [])).map((aviso, idx) => (
              <div 
                key={aviso.id || aviso.titulo}
                className="bg-white/5 border border-white/10 hover:border-liturgical-gold/30 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-liturgical-gold bg-liturgical-gold/10 px-3 py-1 rounded-full border border-liturgical-gold/20">
                      {aviso.categoria}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">
                      {aviso.data}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-white mb-3 leading-snug">
                    {aviso.titulo}
                  </h3>

                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-sans font-light">
                    {aviso.conteudo}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 mt-6 flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center space-x-1.5 text-gray-400">
                    <Megaphone size={14} className="text-liturgical-gold shrink-0" />
                    <span>Paróquia N. S. da Guia</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3.5 DÍZIMO E PIX SECTION - oculto temporariamente */}
      {false && (
      <section id="dizimo" className="py-24 bg-gradient-to-b from-mariana-navy to-mariana-navy/95 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-liturgical-gold/5 via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-liturgical-gold-light bg-liturgical-gold/10 px-4 py-1.5 rounded-full border border-liturgical-gold/20 inline-block mb-4">
              Gratidão e Partilha
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
              {dizimoData.titulo || 'Dízimo e Ofertas'}
            </h2>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              {dizimoData.subtitulo}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* PIX Card */}
            <div className="lg:col-span-7 bg-gradient-to-br from-white/5 to-white/[0.02] border border-liturgical-gold/30 rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-liturgical-gold/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-liturgical-gold/15 border border-liturgical-gold/30 text-liturgical-gold flex items-center justify-center shrink-0">
                    <QrCode size={26} />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-white">Chave PIX Oficial</h3>
                    <span className="text-xs text-liturgical-gold font-medium">Chave {dizimoData.tipo_chave}</span>
                  </div>
                </div>

                <div className="bg-mariana-navy/80 border border-white/10 rounded-2xl p-4 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left overflow-hidden w-full">
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 block font-semibold">Chave para Cópia:</span>
                    <span className="text-sm sm:text-base font-mono font-bold text-white break-all">{dizimoData.chave_pix}</span>
                  </div>
                  <button
                    onClick={handleCopyPix}
                    className="w-full sm:w-auto bg-liturgical-gold hover:bg-liturgical-gold-dark text-mariana-navy font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-md flex items-center justify-center space-x-2 shrink-0 cursor-pointer active:scale-95"
                  >
                    {copiedPix ? (
                      <>
                        <Check size={16} />
                        <span>Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        <span>Copiar Chave</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="space-y-2 text-xs text-gray-300">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-gray-400">Favorecido:</span>
                    <span className="font-semibold text-white">{dizimoData.titular}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-gray-400">Banco:</span>
                    <span className="text-gray-200">{dizimoData.banco}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 mt-6 text-xs text-center sm:text-left text-liturgical-gold-light italic">
                "{dizimoData.mensagem}"
              </div>
            </div>

            {/* Bank Details Card */}
            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 text-white flex items-center justify-center shrink-0">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-white">Transferência Bancária</h3>
                    <span className="text-xs text-gray-400">Depósito / TED / DOC</span>
                  </div>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="bg-mariana-navy/50 p-3 rounded-xl border border-white/5">
                    <span className="block text-gray-400 text-[10px] uppercase font-semibold">Banco</span>
                    <span className="text-sm font-bold text-white">{dizimoData.banco}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-mariana-navy/50 p-3 rounded-xl border border-white/5">
                      <span className="block text-gray-400 text-[10px] uppercase font-semibold">Agência</span>
                      <span className="text-sm font-bold text-white">{dizimoData.agencia}</span>
                    </div>
                    <div className="bg-mariana-navy/50 p-3 rounded-xl border border-white/5">
                      <span className="block text-gray-400 text-[10px] uppercase font-semibold">Conta Corrente</span>
                      <span className="text-sm font-bold text-white">{dizimoData.conta}</span>
                    </div>
                  </div>
                  <div className="bg-mariana-navy/50 p-3 rounded-xl border border-white/5">
                    <span className="block text-gray-400 text-[10px] uppercase font-semibold">Titular / Razão Social</span>
                    <span className="text-xs font-semibold text-gray-200">{dizimoData.titular}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 mt-6 text-[11px] text-gray-400 flex items-center space-x-2">
                <Gift size={16} className="text-liturgical-gold shrink-0" />
                <span>Deus abençoe a sua fidelidade e generosidade!</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

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
    </div>
  );
}
