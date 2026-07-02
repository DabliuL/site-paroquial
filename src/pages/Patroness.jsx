import React from 'react';
import { Compass, Sparkles, BookOpen, Heart, Eye } from 'lucide-react';
import marianImg from '../assets/our_lady_guide.png';

export default function Patroness() {
  return (
    <div className="flex-grow pt-24 bg-mariana-navy">
      {/* HEADER banner */}
      <section className="relative py-20 bg-gradient-to-b from-mariana-navy/80 to-mariana-navy border-b border-white/5">
        <div className="absolute inset-0 bg-radial-gradient from-liturgical-gold/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
            Nossa Padroeira
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto font-sans font-light">
            Conheça a história, o simbolismo e a profunda devoção a Nossa Senhora da Guia, Estrela do Mar e farol espiritual de Mauá.
          </p>
        </div>
      </section>

      {/* HISTORY & DEVOCTION */}
      <section className="py-20 animate-fade-in">
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
                  <span className="text-xs uppercase tracking-widest text-liturgical-gold font-bold">Imagem da Matriz</span>
                  <h3 className="text-lg font-serif font-bold text-white">Virgem Maria, Senhora da Guia</h3>
                  <p className="text-xs text-gray-300">"Conduzi-nos ao porto seguro da salvação que é Cristo."</p>
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="space-y-6 font-sans">
              <span className="text-xs uppercase tracking-widest text-liturgical-gold font-semibold">Origem e Tradição</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
                A Estrela que Guia o Povo de Mauá
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                A devoção a **Nossa Senhora da Guia** possui profundas raízes na tradição cristã marítima e ibérica. Sob esse título, a Virgem Maria é invocada como a "Estrela do Mar" (*Stella Maris*), aquela que serve de farol espiritual e norte seguro para os navegantes que enfrentavam tempestades e incertezas em alto-mar.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Essa devoção encontrou terra fértil no distrito de Mauá, em Magé. Sendo historicamente uma região costeira onde a pesca e a navegação fluvial eram a base da vida diária das famílias, os moradores e pescadores locais naturalmente colocavam suas vidas, barcos e famílias sob o patrocínio celestial de Maria. Ela era a mãe amorosa a quem oravam antes de lançar as redes e a quem agradeciam ao retornar com segurança para a praia.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Ao apontar com a sua mão direita para o Menino Jesus em seus braços, Nossa Senhora da Guia nos ensina que o verdadeiro caminho, a verdade e a vida residem em seu Filho. Ela não atrai a atenção para si, mas atua como a guia perfeita que nos conduz através dos mares agitados da vida terrena até o porto seguro do Reino de Deus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEVOTIONAL ASPECTS GRID */}
      <section className="py-20 bg-gradient-to-b from-mariana-navy to-mariana-navy/95 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Aspect 1 */}
            <div className="bg-white/5 border border-white/5 hover:border-liturgical-gold/20 rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-liturgical-gold/10 flex items-center justify-center border border-liturgical-gold/20 text-liturgical-gold mb-6">
                  <Compass size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-4">Guia dos Navegantes</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-sans font-light">
                  A devoção nasceu da necessidade de proteção contra os perigos das águas e das tormentas. Espiritualmente, Maria é a nossa bússola nas tempestades morais e nas provações cotidianas, mantendo-nos no rumo de Deus.
                </p>
              </div>
              <div className="w-12 h-0.5 bg-liturgical-gold mt-6"></div>
            </div>

            {/* Aspect 2 */}
            <div className="bg-white/5 border border-white/5 hover:border-liturgical-red/20 rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-liturgical-red/10 flex items-center justify-center border border-liturgical-red/20 text-liturgical-red-light mb-6">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-4">O Simbolismo</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-sans font-light">
                  A iconografia tradicional nos mostra Maria segurando Jesus com o braço esquerdo e apontando para Ele com a mão direita. Jesus segura o globo terrestre em Suas mãos, mostrando que Ele é o Senhor do universo e a nossa única Guia.
                </p>
              </div>
              <div className="w-12 h-0.5 bg-liturgical-red mt-6"></div>
            </div>

            {/* Aspect 3 */}
            <div className="bg-white/5 border border-white/5 hover:border-mariana-blue-accent/20 rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-mariana-blue-accent/10 flex items-center justify-center border border-mariana-blue-accent/20 text-mariana-blue-accent mb-6">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-4">Oração da Guia</h3>
                <p className="text-gray-400 text-xs sm:text-sm italic leading-relaxed font-sans font-light">
                  "Ó Maria, Virgem Imaculada, Senhora da Guia, nós Vos escolhemos para ser a nossa guia nas estradas da vida. Dai-nos força nas fraquezas, luz nas trevas e coragem nas dificuldades. Guiai-nos até Jesus. Amém."
                </p>
              </div>
              <div className="w-12 h-0.5 bg-mariana-blue-accent mt-6"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
