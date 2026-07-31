import React from 'react';
import { LogoIcon } from './LogoIcon';
import { BANK_INFO } from '../data/asiaOnlineData';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#00082C] text-white pt-16 pb-12 px-6 border-t border-[#002650]/40">
      <div className="max-w-[88rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="p-1.5 bg-[#002650] rounded-xl text-[#D72426]">
                <LogoIcon className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">Asia Online</span>
            </a>
            <p className="text-white/70 text-sm max-w-sm leading-relaxed font-medium">
              Цифровой банк нового поколения ЗАО «Банк Азии» с безопасными переводами, мгновенным кредитованием и высокой доходностью по депозитам.
            </p>
            <div className="pt-2 text-xs text-white/60 font-medium space-y-1">
              <p>{BANK_INFO.license}</p>
              <p>г. Бишкек, ул. Мичурина 56</p>
            </div>
          </div>

          {/* Nav Col 1 */}
          <div>
            <h4 className="font-bold text-sm text-[#D72426] mb-4 uppercase tracking-wider">Продукты</h4>
            <ul className="space-y-2.5 text-sm text-white/80 font-semibold">
              <li><a href="#cards-section" className="hover:text-white transition-colors">VISA Infinite</a></li>
              <li><a href="#cards-section" className="hover:text-white transition-colors">VISA Gold</a></li>
              <li><a href="#loan-calculator" className="hover:text-white transition-colors">Онлайн кредит 26%</a></li>
              <li><a href="#asia-info" className="hover:text-white transition-colors">Вклады и Сбережения</a></li>
              <li><a href="#currency-rates" className="hover:text-white transition-colors">Курсы валют</a></li>
            </ul>
          </div>

          {/* Nav Col 2 */}
          <div>
            <h4 className="font-bold text-sm text-[#D72426] mb-4 uppercase tracking-wider">Сервисы</h4>
            <ul className="space-y-2.5 text-sm text-white/80 font-semibold">
              <li><a href="#mobile-app" className="hover:text-white transition-colors">Приложение iOS / Android</a></li>
              <li><a href="#mobile-app" className="hover:text-white transition-colors">QR Платежи</a></li>
              <li><a href="#mobile-app" className="hover:text-white transition-colors">P2P Переводы</a></li>
              <li><a href="#faq-section" className="hover:text-white transition-colors">Вопросы и ответы</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-bold text-sm text-[#D72426] mb-4 uppercase tracking-wider">Контакты</h4>
            <ul className="space-y-3 text-sm text-white/80 font-medium">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D72426] shrink-0" />
                <a href={`tel:${BANK_INFO.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-[#D72426] font-bold text-white transition-colors">
                  {BANK_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D72426] shrink-0" />
                <span>info@bankasia.kg</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D72426] shrink-0" />
                <span>Кыргызстан, Бишкек</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 font-medium">
          <p>© 2026 ЗАО «Банк Азии» · Asia Online. Все права защищены.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Условия обслуживания</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
