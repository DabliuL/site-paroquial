import React from 'react';
import { Shield, Target, Award, Compass, Eye, Heart } from 'lucide-react';
import marianImg from '../assets/our_lady_guide.png';

export default function About() {
  return (
    <div className="flex-grow pt-24 bg-mariana-navy">
      {/* HEADER banner */}
      <section className="relative py-20 bg-gradient-to-b from-mariana-navy/80 to-mariana-navy border-b border-white/5">
        <div className="absolute inset-0 bg-radial-gradient from-liturgical-gold/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
            Quem Somos
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Conheça o testemunho de fé, a caminhada histórica e o compromisso de evangelização da Paróquia Nossa Senhora da Guia em Mauá, Magé.
          </p>
        </div>
      </section>

      {/* HISTORY & DEVOTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="relative group">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-liturgical-gold via-liturgical-red to-mariana-blue-accent opacity-30 blur-lg group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-mariana-navy rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src={marianImg} 
                  alt="Nossa Senhora da Guia" 
                  className="w-full h-auto object-cover max-h-[550px] transition-transform duration-500 hover:scale-102"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <span className="text-xs uppercase tracking-widest text-liturgical-gold font-bold">Nossa Padroeira</span>
                  <h3 className="text-lg font-serif font-bold text-white">Nossa Senhora da Guia</h3>
                  <p className="text-xs text-gray-300">"Guiai os nossos passos no caminho da paz e da salvação."</p>
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest text-liturgical-gold font-semibold">Nossa Trajetória</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
                Uma Jornada Centenária de Fé e Acolhimento
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                A história da **Paróquia Nossa Senhora da Guia** está profundamente entrelaçada com as raízes do distrito de Mauá, em Magé. Nascida inicialmente a partir de pequenas reuniões e da fervorosa devoção dos pescadores e moradores locais à Virgem Maria, a comunidade edificou seu primeiro altar de oração como um sinal visível da presença de Deus entre as famílias.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Ao longo das décadas, o que começou como uma capela simples cresceu em espírito e estrutura. Hoje, constituída como paróquia centenária sob a tutela da **Diocese de Petrópolis**, temos a alegria de ser o lar espiritual e administrativo de 9 capelas que estendem o serviço pastoral por todo o território local.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Nossos sacerdotes e fiéis leigos continuam a perpetuar esse legado de amor, mantendo as portas abertas a todos os visitantes e paroquianos que buscam os sacramentos da confissão e da eucaristia, bem como a vivência fraterna e a solidariedade cristã.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION, VISION & VALUES */}
      <section className="py-20 bg-gradient-to-b from-mariana-navy to-mariana-navy/95 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission Card */}
            <div className="bg-white/5 border border-white/5 hover:border-liturgical-gold/20 rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-liturgical-gold/10 flex items-center justify-center border border-liturgical-gold/20 text-liturgical-gold mb-6">
                  <Target size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-4">Missão</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Anunciar o Evangelho de Jesus Cristo, celebrar com zelo os santos sacramentos e acolher fraternalmente a todos, agindo como presença viva da caridade e da oração sob a guia materna da Virgem Maria.
                </p>
              </div>
              <div className="w-12 h-0.5 bg-liturgical-gold mt-6"></div>
            </div>

            {/* Vision Card */}
            <div className="bg-white/5 border border-white/5 hover:border-liturgical-red/20 rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-liturgical-red/10 flex items-center justify-center border border-liturgical-red/20 text-liturgical-red-light mb-6">
                  <Compass size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-4">Visão</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Ser uma comunidade de comunidades viva, participativa e solidária, que dialogue com a realidade de Mauá Magé e seja referência regional de evangelização, comunhão e amparo social.
                </p>
              </div>
              <div className="w-12 h-0.5 bg-liturgical-red mt-6"></div>
            </div>

            {/* Values Card */}
            <div className="bg-white/5 border border-white/5 hover:border-mariana-blue-accent/20 rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-mariana-blue-accent/10 flex items-center justify-center border border-mariana-blue-accent/20 text-mariana-blue-accent mb-6">
                  <Heart size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-4">Valores</h3>
                <ul className="text-gray-400 text-sm leading-relaxed space-y-2">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-liturgical-gold"></span>
                    <span>Fé Viva e Devoção Litúrgica</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-liturgical-gold"></span>
                    <span>Acolhimento Misericordioso</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-liturgical-gold"></span>
                    <span>Caridade e Assistência Social</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-liturgical-gold"></span>
                    <span>Transparência e Fraternidade</span>
                  </li>
                </ul>
              </div>
              <div className="w-12 h-0.5 bg-mariana-blue-accent mt-6"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
