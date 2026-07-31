import React, { useState } from 'react';
import { FAQ_DATA } from '../data/asiaOnlineData';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="bg-[#F1F0F3] px-6 py-24 border-t border-[#002650]/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#D72426] text-xs font-bold uppercase tracking-widest block mb-2">
            Служба поддержки
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#002650] mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-[#002650]/70 text-base font-medium">
            Ответы на ключевые вопросы по картам VISA, онлайн кредитам и депозитам Банка Азии.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#002650]/10 overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer hover:bg-[#002650]/5 transition-colors"
                >
                  <span className="font-bold text-base sm:text-lg text-[#002650] pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#D72426] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#D72426]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-[#002650]/80 text-sm sm:text-base leading-relaxed border-t border-[#002650]/10 font-medium">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
