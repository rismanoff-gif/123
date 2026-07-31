import React from 'react';
import { MOBILE_APP_FEATURES, BANK_INFO } from '../data/asiaOnlineData';
import { QrCode, Smartphone, ArrowUpRight, CheckCircle } from 'lucide-react';

export const MobileAppSection: React.FC = () => {
  return (
    <section id="mobile-app" className="bg-[#F1F0F3] px-6 py-24">
      <div className="max-w-[88rem] mx-auto bg-white rounded-3xl p-8 sm:p-14 shadow-sm border border-[#002650]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text & Features (7 Cols) */}
          <div className="lg:col-span-7">
            <span className="text-[#D72426] text-xs font-bold uppercase tracking-widest block mb-2">
              Мобильный банк
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#002650] mb-6">
              Мобильное приложение <br /> Asia Online
            </h2>
            <p className="text-[#002650]/70 text-base mb-8 max-w-lg leading-relaxed font-medium">
              Управляйте своими финансами, депозитами, картами и мультивалютными счетами прямо в смартфоне 24 часа в сутки.
            </p>

            {/* Grid Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {MOBILE_APP_FEATURES.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F1F0F3] border border-[#002650]/10 hover:bg-[#002650]/5 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 text-[#D72426] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-sm text-[#002650]">{item.title}</p>
                    <p className="text-xs text-neutral-600 font-medium mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Badges & QR */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={BANK_INFO.appStoreUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-[#002650] text-white px-6 py-3 rounded-full font-bold text-sm inline-flex items-center gap-2 hover:bg-[#001A38] transition-colors cursor-pointer shadow-md"
              >
                <span>App Store</span>
                <ArrowUpRight className="w-4 h-4 text-[#D72426]" />
              </a>

              <a
                href={BANK_INFO.googlePlayUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-[#002650] text-white px-6 py-3 rounded-full font-bold text-sm inline-flex items-center gap-2 hover:bg-[#001A38] transition-colors cursor-pointer shadow-md"
              >
                <span>Google Play</span>
                <ArrowUpRight className="w-4 h-4 text-[#D72426]" />
              </a>

              <div className="hidden sm:flex items-center gap-3 bg-[#F1F0F3] px-4 py-2 rounded-2xl border border-[#002650]/10">
                <QrCode className="w-8 h-8 text-[#002650]" />
                <span className="text-xs font-semibold text-[#002650]">
                  Наведите камеру для скачивания
                </span>
              </div>
            </div>
          </div>

          {/* App Preview Image / Visual (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm bg-[#001A38] rounded-[2.5rem] p-4 shadow-2xl border-4 border-[#002650]">
              <div className="bg-[#00082C] text-white rounded-[2rem] p-6 overflow-hidden min-h-[480px] flex flex-col justify-between">
                {/* Status Bar */}
                <div className="flex items-center justify-between text-xs text-white/60 mb-6 font-semibold">
                  <span>9:41</span>
                  <span>Asia Online 5G</span>
                </div>

                {/* Balance Card inside Mockup */}
                <div className="bg-gradient-to-br from-[#002650] to-[#143d6e] p-5 rounded-2xl mb-6 shadow-md border border-white/10">
                  <p className="text-xs text-white/70 font-semibold">Общий баланс</p>
                  <p className="text-3xl font-extrabold text-white mt-1">284,500.00 KGS</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-white/90 font-semibold">
                    <span>Депозит USD: $1,250.00</span>
                    <span className="bg-[#D72426] text-white px-2 py-0.5 rounded font-bold">+13% годовых</span>
                  </div>
                </div>

                {/* App Quick Icons */}
                <div className="grid grid-cols-4 gap-2 text-center text-[10px] text-white/80 font-bold mb-6">
                  <div className="bg-white/10 p-2.5 rounded-xl flex flex-col items-center gap-1">
                    <QrCode className="w-4 h-4 text-[#D72426]" />
                    <span>QR</span>
                  </div>
                  <div className="bg-white/10 p-2.5 rounded-xl flex flex-col items-center gap-1">
                    <Smartphone className="w-4 h-4 text-emerald-400" />
                    <span>Перевод</span>
                  </div>
                  <div className="bg-white/10 p-2.5 rounded-xl flex flex-col items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-amber-300" />
                    <span>Кредит</span>
                  </div>
                  <div className="bg-white/10 p-2.5 rounded-xl flex flex-col items-center gap-1">
                    <ArrowUpRight className="w-4 h-4 text-sky-300" />
                    <span>Вклад</span>
                  </div>
                </div>

                {/* Footer status inside mock */}
                <div className="bg-white/10 p-3 rounded-xl text-center text-xs text-white/80 font-semibold">
                  ⚡ Выгодная онлайн конвертация
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
