import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Geral',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      alert('Por favor, preencha o Nome e a Mensagem.');
      return;
    }

    setIsSubmitting(true);

    // Format the message for WhatsApp
    const formattedText = `*Contato do Site Paroquial*\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*E-mail:* ${formData.email || 'Não informado'}\n` +
      `*Assunto:* ${formData.subject}\n\n` +
      `*Mensagem:*\n${formData.message}`;

    const phoneNumber = '5521985780538';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(formattedText)}`;

    // Simulate sending progress and redirect
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      window.open(whatsappUrl, '_blank');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: 'Geral',
        message: '',
      });
      
      // Hide success flag after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    }, 1200);
  };

  return (
    <div className="flex-grow pt-24 bg-mariana-navy">
      {/* HEADER banner */}
      <section className="relative py-20 bg-gradient-to-b from-mariana-navy/80 to-mariana-navy border-b border-white/5">
        <div className="absolute inset-0 bg-radial-gradient from-liturgical-red/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
            Fale Conosco
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Dúvidas sobre sacramentos, intenções de missa, dízimo ou atendimento pastoral? Entre em contato com a secretaria paroquial.
          </p>
        </div>
      </section>

      {/* CONTACT INFORMATION & FORM */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Contacts Info */}
            <div className="space-y-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-liturgical-gold font-semibold">Atendimento</span>
                <h2 className="text-3xl font-serif font-bold text-white mt-1 mb-4">Secretaria Paroquial</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Visite-nos pessoalmente ou use nossos canais de atendimento digital para agendar sacramentos (Batismo, Crisma, Casamento), pedir orações ou realizar sua contribuição do Dízimo.
                </p>
              </div>

              {/* Direct Info List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/5 rounded-2xl p-5 flex items-start space-x-3.5">
                  <Phone className="text-liturgical-gold shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="text-sm font-semibold text-white">WhatsApp / Telefone</h4>
                    <p className="text-xs text-gray-400 mt-1">+55 (21) 98578-0538</p>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/5 rounded-2xl p-5 flex items-start space-x-3.5">
                  <Mail className="text-liturgical-gold shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="text-sm font-semibold text-white">E-mail</h4>
                    <p className="text-xs text-gray-400 mt-1 break-all">nsguia-pacobaiba@diocesepetropolis.org.br</p>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/5 rounded-2xl p-5 flex items-start space-x-3.5 col-span-1 sm:col-span-2">
                  <MapPin className="text-liturgical-gold shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Endereço Principal</h4>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                      Praça da Matriz, s/nº - Distrito de Mauá, Magé - RJ, CEP 25930-000
                    </p>
                  </div>
                </div>
              </div>

              {/* Opening Hours Info */}
              <div className="bg-gradient-to-r from-liturgical-red/10 to-mariana-blue-accent/10 border border-white/5 rounded-3xl p-6 flex items-start space-x-4">
                <Clock className="text-liturgical-gold shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-md font-serif font-bold text-white mb-2">Horário de Funcionamento</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    **Terça a Sexta-feira:** 08h às 12h e 17h às 18h30<br />
                    **Sábados:** 08h às 12h<br />
                    **Domingos e Segundas-feiras:** Fechado
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden">
              {/* Gold light glow decoration */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-liturgical-gold/5 rounded-full blur-2xl"></div>
              
              <h3 className="text-xl font-serif font-bold text-white mb-2">Envie uma Mensagem</h3>
              <p className="text-xs text-gray-400 mb-6">
                Preencha o formulário abaixo para enviar diretamente ao nosso canal de WhatsApp.
              </p>

              {success && (
                <div className="bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs px-4 py-3 rounded-xl mb-6 flex items-center space-x-2 animate-fade-in">
                  <MessageCircle size={16} />
                  <span>Mensagem formatada com sucesso! Redirecionando para o WhatsApp...</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome"
                    className="w-full bg-white/5 border border-white/10 focus:border-liturgical-gold rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    E-mail (opcional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="exemplo@email.com"
                    className="w-full bg-white/5 border border-white/10 focus:border-liturgical-gold rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Assunto da Mensagem
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-mariana-navy border border-white/10 focus:border-liturgical-gold rounded-xl px-4 py-3 text-sm text-white outline-none transition-all cursor-pointer"
                  >
                    <option value="Geral">Informações Gerais</option>
                    <option value="Batismo">Dúvidas sobre Batismo</option>
                    <option value="Casamento">Agendamento de Casamento</option>
                    <option value="Missa">Intenção de Santa Missa</option>
                    <option value="Dízimo">Como Contribuir (Dízimo)</option>
                    <option value="Pastorais">Dúvida sobre Pastorais</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Escreva sua Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Olá secretaria paroquial, gostaria de..."
                    className="w-full bg-white/5 border border-white/10 focus:border-liturgical-gold rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-liturgical-gold hover:bg-liturgical-gold-dark disabled:bg-white/10 text-mariana-navy font-bold text-sm py-4 rounded-xl shadow-lg transition-all hover:scale-101 active:scale-99 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-mariana-navy border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Enviar no WhatsApp</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* LOCALIZATION MAP */}
      <section className="py-12 bg-mariana-navy border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-liturgical-gold font-semibold">Localização</span>
            <h3 className="text-2xl font-serif font-bold text-white mt-1">Como nos Encontrar</h3>
          </div>
          
          {/* Iframe Google Maps */}
          <div className="w-full h-96 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative bg-white/5">
            <iframe
              title="Mapa Paróquia Nossa Senhora da Guia"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14755.945207797743!2d-43.12061614275037!3d-22.57947113110271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9979c5a176b6db%3A0xe53bc9658252277d!2sMau%C3%A1%2C%20Mag%C3%A9%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(110%)' }} // Elegant dark-stylized map
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
