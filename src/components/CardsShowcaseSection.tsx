import React, { useState } from 'react';
import { BANK_CARDS } from '../data/asiaOnlineData';
import { CheckCircle2, Truck, Sparkles, ArrowRight } from 'lucide-react';
import type { BankCard } from '../types';
import { CylinderCardCarousel } from './CylinderCardCarousel';

export const CardsShowcaseSection: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<BankCard>(BANK_CARDS[0]);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  return (
    <section id="cards-section" className="bg-[#F1F0F3] px-6 py-24 overflow-hidden">
      <div className="max-w-[88rem] mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#D72426] text-xs font-bold uppercase tracking-widest block mb-2">
            Интерактивный 3D Картинг
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#002650] mb-4">
            Премиальные карты Банка Азии
          </h2>
          <p className="text-[#002650]/70 text-base leading-relaxed font-medium">
            Наводите курсор для 3D наклона карт. Выберите лучшую карту для ежедневных покупок, путешествий с VIP-привилегиями и выгодой.
          </p>
        </div>

        {/* 3D Cylinder Horizontal Video Card Carousel */}
        <CylinderCardCarousel />

        {/* Card Tabs */}
        <div className="flex justify-center gap-3 mb-12 overflow-x-auto pb-2">
          {BANK_CARDS.map((card) => (
            <button
              key={card.id}
              type="button"
              onClick={() => setSelectedCard(card)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                selectedCard.id === card.id
                  ? 'bg-[#002650] text-white shadow-md'
                  : 'bg-white text-[#002650] hover:bg-[#002650]/10 border border-[#002650]/10'
              }`}
            >
              {card.name}
            </button>
          ))}
        </div>

        {/* Active Card Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-[#002650]/10">
          {/* Visual Card (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div
              className={`w-full max-w-md h-64 sm:h-72 rounded-3xl p-7 flex flex-col justify-between shadow-2xl relative overflow-hidden bg-gradient-to-br ${selectedCard.bgGradient} ${selectedCard.textColor}`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between z-10">
                <span className="text-xs uppercase tracking-widest font-bold opacity-80">Asia Online</span>
                {selectedCard.badge && (
                  <span className="bg-[#D72426] text-white text-xs px-3 py-1 rounded-full font-bold shadow-sm">
                    {selectedCard.badge}
                  </span>
                )}
              </div>

              {/* Card Chip & Name */}
              <div className="z-10 my-auto">
                <div className="w-11 h-8 bg-amber-400/90 rounded-md mb-4 border border-amber-300/40" />
                <p className="text-2xl font-bold tracking-tight">{selectedCard.name}</p>
                <p className="text-xs opacity-80 mt-1 font-medium">{selectedCard.tagline}</p>
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between z-10 text-xs font-mono opacity-90">
                <span>•••• •••• •••• 8842</span>
                <span className="font-sans uppercase text-xs font-bold">VISA</span>
              </div>

              {/* Background Accent */}
              <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            </div>
          </div>

          {/* Card Features Details (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-[#D72426]" />
                <h3 className="text-2xl md:text-3xl font-bold text-[#002650]">{selectedCard.name}</h3>
              </div>
              <p className="text-[#002650]/70 text-base mb-6 font-medium">{selectedCard.tagline}</p>

              {/* Perks Row */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {selectedCard.perks.map((perk, i) => (
                  <div key={i} className="bg-[#F1F0F3] rounded-2xl p-4 border border-[#002650]/10">
                    <p className="text-2xl font-bold text-[#002650] leading-none mb-1">{perk.value}</p>
                    <p className="text-xs text-[#002650]/70 font-semibold">{perk.label}</p>
                  </div>
                ))}
              </div>

              {/* Feature Checklist */}
              <ul className="space-y-3 mb-8">
                {selectedCard.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-[#002650] font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#D72426] shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-[#002650]/10">
              <button
                type="button"
                onClick={() => setIsOrderModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#002650] text-white font-bold px-8 py-3.5 rounded-full hover:bg-[#001A38] transition-colors shadow-md cursor-pointer"
              >
                <span>Заказать с доставкой</span>
                <ArrowRight className="w-4 h-4 text-[#D72426]" />
              </button>
              <div className="flex items-center gap-2 text-xs text-[#002650]/80 font-semibold">
                <Truck className="w-4 h-4 text-[#D72426]" />
                <span>Бесплатная доставка курьером до двери</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Modal Overlay */}
      {isOrderModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#00082C]/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative border border-[#002650]/20">
            <h3 className="text-2xl font-bold text-[#002650] mb-2">Заказ {selectedCard.name}</h3>
            <p className="text-sm text-[#002650]/70 mb-6 font-medium">
              Введите номер телефона. Наш специалист свяжется с вами для уточнения адреса доставки.
            </p>

            <form onSubmit={(e) => { e.preventDefault(); alert('Спасибо! Заявка принята, мы перезвоним вам в течение 5 минут.'); setIsOrderModalOpen(false); }}>
              <div className="mb-4">
                <label className="block text-xs font-bold text-[#002650] uppercase mb-1">ФИО полностью</label>
                <input required type="text" placeholder="Иван Иванов" className="w-full bg-[#F1F0F3] rounded-xl p-3 text-sm outline-none border border-[#002650]/10 focus:border-[#002650] font-medium text-[#002650]" />
              </div>
              <div className="mb-6">
                <label className="block text-xs font-bold text-[#002650] uppercase mb-1">Номер телефона</label>
                <input required type="tel" defaultValue="+996 " className="w-full bg-[#F1F0F3] rounded-xl p-3 text-sm outline-none border border-[#002650]/10 focus:border-[#002650] font-semibold text-[#002650]" />
              </div>
              <div className="flex gap-3">
                <button type="submit" className="flex-1 bg-[#002650] text-white py-3 rounded-full font-bold text-sm hover:bg-[#001A38] cursor-pointer shadow-md">
                  Отправить заявку
                </button>
                <button type="button" onClick={() => setIsOrderModalOpen(false)} className="px-5 py-3 rounded-full font-bold text-sm bg-neutral-200 hover:bg-neutral-300 cursor-pointer text-[#002650]">
                  Отмена
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
