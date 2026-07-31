import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface Slide {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  highlights: { title: string; desc: string }[];
  ctaText: string;
  ctaLink: string;
}

const HERO_SLIDES: Slide[] = [
  {
    id: 'visa-cards',
    badge: 'VISA Infinite & Gold',
    title: 'Ваш путь к выдающемуся\nфинансовому опыту',
    subtitle: 'Закажите обновленную карту VISA с бесплатной доставкой на дом. Получайте до 15% скидки у партнеров и 7% годовых на остаток.',
    highlights: [
      { title: 'до 15%', desc: 'скидки у партнеров' },
      { title: '7%', desc: 'на остаток в KGS' },
      { title: 'Бесплатно', desc: 'доставка на дом' },
    ],
    ctaText: 'Заказать карту',
    ctaLink: '#cards-section',
  },
  {
    id: 'online-loan',
    badge: 'Онлайн кредит за 5 минут',
    title: 'Деньги на любые нужды\nбез визита в банк',
    subtitle: 'Получите мгновенное решение по кредиту до 250 000 KGS по ставке 26%. Оформление только по паспорту ID-карте.',
    highlights: [
      { title: 'до 250 000 KGS', desc: 'максимальная сумма' },
      { title: 'за 5 минут', desc: 'быстрое решение' },
      { title: '26%', desc: 'процентная ставка' },
    ],
    ctaText: 'Рассчитать кредит',
    ctaLink: '#loan-calculator',
  },
  {
    id: 'usd-deposit',
    badge: 'Выгодные депозиты',
    title: 'Ваш капитал работает\nна автопилоте',
    subtitle: 'Надежные вклады в сомах и долларах США с доходностью до 13% годовых, гарантией защиты Агентством по защите депозитов и доступом 24/7.',
    highlights: [
      { title: 'до 13%', desc: 'годовых по вкладам' },
      { title: '100% Защита', desc: 'гарантия банка' },
      { title: 'Без заморозки', desc: 'доступ 24/7' },
    ],
    ctaText: 'Начать зарабатывать',
    ctaLink: '#asia-info',
  },
];

const HERO_BRANDS = [
  { name: 'Банк Азии', style: { fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: '15px' } },
  { name: 'VISA Infinite', style: { fontFamily: 'Arial, sans-serif', fontWeight: 900, letterSpacing: '0.08em', fontSize: '13px', textTransform: 'uppercase' as const } },
  { name: 'Asia Online', style: { fontFamily: "'Trebuchet MS', sans-serif", fontWeight: 700, fontSize: '15px', fontStyle: 'italic' } },
  { name: 'Элкарт', style: { fontFamily: 'Verdana, sans-serif', fontWeight: 700, letterSpacing: '0.05em', fontSize: '14px' } },
  { name: 'Национальный Банк КР', style: { fontFamily: 'Impact, sans-serif', fontWeight: 400, letterSpacing: '0.04em', fontSize: '15px' } },
  { name: 'Цифровой Банкинг', style: { fontFamily: 'Helvetica, sans-serif', fontWeight: 700, fontSize: '14px' } },
];

export const HeroSection: React.FC = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const activeSlide = HERO_SLIDES[activeSlideIndex];

  return (
    <section className="relative w-full px-6 pt-4 pb-10">
      <div className="max-w-[88rem] mx-auto relative rounded-3xl overflow-hidden shadow-2xl min-h-[620px] flex flex-col justify-between border border-[#002650]/20">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover absolute inset-0 w-full h-full"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_161253_c72b1869-400f-45ed-ac0c-52f68c2ed5bd.mp4"
            type="video/mp4"
          />
        </video>

        {/* Asia Online Navy-Red Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00082C]/90 via-[#002650]/75 to-transparent z-0 pointer-events-none" />

        {/* Content Area */}
        <div className="relative z-10 p-8 sm:p-12 md:p-16 flex flex-col items-start max-w-2xl text-white">
          {/* Slide Tabs */}
          <div className="flex items-center gap-2 mb-8 bg-[#001A38]/80 backdrop-blur-md p-1.5 rounded-full border border-white/15">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveSlideIndex(idx)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                  activeSlideIndex === idx
                    ? 'bg-[#D72426] text-white shadow-md'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {slide.badge}
              </button>
            ))}
          </div>

          {/* Heading */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight mb-5 whitespace-pre-line text-white"
            style={{ letterSpacing: '-0.04em' }}
          >
            {activeSlide.title}
          </h1>

          {/* Subtitle */}
          <p className="text-white/90 text-base md:text-lg mb-8 leading-relaxed font-normal">
            {activeSlide.subtitle}
          </p>

          {/* Highlights Row */}
          <div className="grid grid-cols-3 gap-4 mb-10 w-full">
            {activeSlide.highlights.map((h, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-left">
                <p className="text-xl sm:text-2xl font-bold text-white leading-none mb-1">{h.title}</p>
                <p className="text-xs text-white/80 font-medium">{h.desc}</p>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <a
            href={activeSlide.ctaLink}
            className="inline-flex items-center gap-3 bg-[#002650] text-white text-base md:text-lg font-semibold pl-8 pr-2.5 py-3 rounded-full hover:bg-[#001A38] transition-colors duration-200 shadow-xl border border-white/20 cursor-pointer group"
          >
            <span>{activeSlide.ctaText}</span>
            <span className="bg-[#D72426] rounded-full p-2 text-white transition-transform duration-200 group-hover:translate-x-0.5 shadow-sm">
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>

        {/* Marquee Footer Inside Hero */}
        <div className="relative z-10 p-5 bg-[#00082C]/80 backdrop-blur-md border-t border-white/10 overflow-hidden">
          <div className="marquee-track">
            {HERO_BRANDS.concat(HERO_BRANDS).map((brand, index) => (
              <span
                key={index}
                className="mx-8 shrink-0 text-white/80 whitespace-nowrap"
                style={brand.style}
              >
                {brand.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
