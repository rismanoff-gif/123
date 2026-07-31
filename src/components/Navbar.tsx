import React, { useState } from 'react';
import { LogoIcon } from './LogoIcon';
import { Phone, Globe, Menu, X, ArrowUpRight } from 'lucide-react';
import { BANK_INFO } from '../data/asiaOnlineData';

export const Navbar: React.FC = () => {
  const [lang, setLang] = useState<'РУС' | 'КЫР' | 'ENG'>('РУС');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-[#001A38] text-xs font-medium text-white/80 py-2 px-6">
        <div className="max-w-[88rem] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href={`tel:${BANK_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-1.5 text-white hover:text-red-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D72426]" />
              <span className="font-semibold">{BANK_INFO.phone}</span>
            </a>
            <span className="text-white/20">|</span>
            <span className="hidden sm:inline-block text-white/70">
              ЗАО «Банк Азии» · {BANK_INFO.license}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-white/10 backdrop-blur px-2.5 py-0.5 rounded-full border border-white/15">
              <Globe className="w-3 h-3 text-[#D72426]" />
              <button
                type="button"
                onClick={() => setLang(lang === 'РУС' ? 'КЫР' : lang === 'КЫР' ? 'ENG' : 'РУС')}
                className="hover:text-white font-semibold uppercase tracking-wider cursor-pointer text-white"
              >
                {lang}
              </button>
            </div>
            <a
              href="#app-download"
              className="hidden md:inline-flex items-center gap-1 text-white/90 hover:text-white font-medium"
            >
              <span>Скачать приложение</span>
              <ArrowUpRight className="w-3 h-3 text-[#D72426]" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 bg-[#F1F0F3]/95 backdrop-blur-md border-b border-[#002650]/10 px-6 py-4">
        <div className="max-w-[88rem] mx-auto flex items-center justify-between">
          {/* Brand Logo & Title */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center p-1.5 bg-[#002650] rounded-xl text-[#D72426] shadow-sm">
              <LogoIcon className="w-6 h-6 transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#002650] leading-none">
                Asia Online
              </span>
              <span className="text-[10px] font-bold tracking-widest text-[#D72426] uppercase mt-0.5">
                ЗАО «Банк Азии»
              </span>
            </div>
          </a>

          {/* Nav Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#002650]/80">
            <a href="#cards-section" className="hover:text-[#D72426] transition-colors">
              Карты VISA
            </a>
            <a href="#loan-calculator" className="hover:text-[#D72426] transition-colors">
              Онлайн кредит
            </a>
            <a href="#currency-rates" className="hover:text-[#D72426] transition-colors">
              Курс валют
            </a>
            <a href="#asia-info" className="hover:text-[#D72426] transition-colors">
              Мультивалютный банкинг
            </a>
            <a href="#mobile-app" className="hover:text-[#D72426] transition-colors">
              Мобильный банк
            </a>
            <a href="#faq-section" className="hover:text-[#D72426] transition-colors">
              Частые вопросы
            </a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <a
              href="#order-modal"
              className="bg-[#002650] text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-[#001A38] transition-colors duration-200 cursor-pointer shadow-md border border-[#002650]/20"
            >
              Открыть счет
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#002650] hover:bg-[#002650]/5 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-[#002650]/10 flex flex-col gap-3 pb-2 text-base font-semibold text-[#002650]">
            <a
              href="#cards-section"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:bg-[#002650]/5 rounded-lg"
            >
              Карты VISA
            </a>
            <a
              href="#loan-calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:bg-[#002650]/5 rounded-lg"
            >
              Онлайн кредит
            </a>
            <a
              href="#currency-rates"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:bg-[#002650]/5 rounded-lg"
            >
              Курс валют
            </a>
            <a
              href="#asia-info"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:bg-[#002650]/5 rounded-lg"
            >
              Вклады и Сбережения
            </a>
            <a
              href="#mobile-app"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:bg-[#002650]/5 rounded-lg"
            >
              Мобильный банк
            </a>
          </div>
        )}
      </nav>
    </>
  );
};
