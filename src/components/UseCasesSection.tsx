import React from 'react';
import { ArrowRight } from 'lucide-react';

export const UseCasesSection: React.FC = () => {
  return (
    <section className="bg-[#F5F5F5] px-6 py-24 border-t border-[#002650]/10">
      <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Column */}
        <div className="md:pr-12 md:pt-2">
          <span className="text-[#D72426] text-xs font-bold uppercase tracking-widest block mb-2">
            Банковские сервисы ЗАО «Банк Азии»
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#002650]"
            style={{ letterSpacing: '-0.03em' }}
          >
            Сферы применения
          </h2>
          <p className="text-[#002650]/70 text-base leading-relaxed max-w-sm font-medium">
            Банк Азии предлагает гибкие финансовые решения для физических лиц, бизнеса и корпоративных клиентов, гарантируя высокую надежность.
          </p>
        </div>

        {/* Right Column (Video Container + Overlay) */}
        <div className="relative rounded-3xl overflow-hidden min-h-[520px] flex flex-col justify-start shadow-md border border-[#002650]/10">
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="object-cover absolute inset-0 w-full h-full"
          >
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_183428_ab5e672a-f608-4dcb-b319-f3e040f02e2d.mp4"
              type="video/mp4"
            />
          </video>

          {/* Overlay Content */}
          <div className="relative z-10 p-10 md:p-12 bg-gradient-to-r from-black/75 via-black/50 to-transparent min-h-full flex flex-col justify-between">
            <div>
              <h3
                className="text-white text-3xl md:text-4xl font-bold leading-tight mb-5"
                style={{ letterSpacing: '-0.03em' }}
              >
                Коммерция и Международные Расчёты
              </h3>
              <p className="text-white/90 text-base max-w-md mb-8 leading-relaxed font-medium">
                Увеличивайте выгоду своего бизнеса благодаря быстрому обслуживанию: 100% защита капитала, мгновенные P2P переводы и выгодные процентные ставки по остаткам.
              </p>
            </div>
            <a
              href="#order-modal"
              className="inline-flex items-center gap-3 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-[#002650] flex items-center justify-center group-hover:bg-[#001A38] transition-colors duration-200 shadow-md">
                <ArrowRight className="w-4 h-4 text-[#D72426] transition-transform duration-200 group-hover:translate-x-0.5" />
              </div>
              <span className="text-white text-base font-bold group-hover:underline">
                Узнать подробнее
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
