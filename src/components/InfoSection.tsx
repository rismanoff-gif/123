import React from 'react';
import { ArrowRight } from 'lucide-react';

export const InfoSection: React.FC = () => {
  return (
    <section id="asia-info" className="bg-[#F1F0F3] px-6 py-24 border-t border-[#002650]/10">
      <div className="max-w-[88rem] mx-auto">
        {/* Row 1: 2-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start">
          {/* Left Column */}
          <div>
            <h2
              className="text-[#002650] text-4xl md:text-5xl font-bold leading-tight mb-8"
              style={{ letterSpacing: '-0.03em' }}
            >
              Знакомьтесь, Asia Online.
            </h2>
            <button
              type="button"
              onClick={() => alert('Приложение Asia Online доступно в App Store и Google Play!')}
              className="inline-flex items-center gap-3 bg-[#002650] text-white text-base font-bold pl-7 pr-2 py-2 rounded-full hover:bg-[#001A38] transition-colors duration-200 cursor-pointer group shadow-md"
            >
              <span>Узнать больше</span>
              <span className="bg-[#D72426] rounded-full p-2 text-white transition-transform duration-200 group-hover:translate-x-0.5 shadow-sm">
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>

          {/* Right Column */}
          <div>
            <p className="text-[#002650]/80 text-2xl md:text-3xl leading-relaxed font-semibold">
              Asia Online — это цифровая экосистема ЗАО «Банк Азии», позволяющая мгновенно управлять своими вкладами, картами и онлайн-кредитами.
            </p>
          </div>
        </div>

        {/* Row 2: 4-col card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 (Spans 2 cols on lg) */}
          <div
            className="lg:col-span-2 rounded-2xl p-7 min-h-80 flex flex-col justify-between overflow-hidden relative shadow-sm border border-[#002650]/10"
            style={{
              backgroundImage: `url("https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260423_164207_f243351d-ed59-48ec-83a0-a5e996bdbe3c.png&w=1280&q=85")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div>
              <h3
                className="text-[#002650] text-2xl font-bold leading-snug"
                style={{ letterSpacing: '-0.02em' }}
              >
                Растущие сбережения
              </h3>
            </div>
            <div>
              <p className="text-[#002650]/80 text-base max-w-xs leading-relaxed font-semibold">
                Получайте стабильный процентный доход по депозитам и на остатки по банковским картам VISA и ЭЛКАРТ.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#002650] rounded-2xl p-7 min-h-80 flex flex-col justify-between text-white shadow-md border border-white/10">
            <div>
              <h3 className="text-2xl font-bold leading-snug whitespace-pre-line">
                {'Доход до 13%\nв сомах'}
              </h3>
            </div>
            <div>
              <p className="text-white/80 text-base leading-relaxed font-medium">
                Выгодные процентные ставки с возможностью пополнения и снятия без потери накоплений.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#002650] rounded-2xl p-7 min-h-80 flex flex-col justify-between text-white shadow-md border border-white/10">
            <div>
              <h3 className="text-2xl font-bold leading-snug whitespace-pre-line">
                {'Полная\nавтоматизация'}
              </h3>
            </div>
            <div>
              <p className="text-white/80 text-base leading-relaxed font-medium">
                Вам не нужно ходить в отделения банка. Все платежи, переводы и заявки выполняются прямо в смартфоне.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
