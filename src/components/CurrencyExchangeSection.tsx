import React, { useState } from 'react';
import { INITIAL_CURRENCIES } from '../data/asiaOnlineData';
import { ArrowRightLeft, TrendingUp, Calculator } from 'lucide-react';

export const CurrencyExchangeSection: React.FC = () => {
  const [rateType, setRateType] = useState<'cash' | 'nonCash'>('cash');
  const [fromAmount, setFromAmount] = useState<number>(100);
  const [fromCode, setFromCode] = useState<string>('USD');
  const [toCode, setToCode] = useState<string>('KGS');

  // Convert function
  const getRateInKgs = (code: string, isSell: boolean): number => {
    if (code === 'KGS') return 1;
    const item = INITIAL_CURRENCIES.find((c) => c.code === code);
    if (!item) return 1;
    if (rateType === 'cash') {
      return isSell ? item.cashSell : item.cashBuy;
    }
    return isSell ? item.nonCashSell : item.nonCashBuy;
  };

  const calculateConvertedAmount = (): number => {
    if (fromCode === toCode) return fromAmount;
    
    // Amount in KGS
    let amountInKgs = 0;
    if (fromCode === 'KGS') {
      amountInKgs = fromAmount;
    } else {
      const buyRate = getRateInKgs(fromCode, false);
      amountInKgs = fromAmount * buyRate;
    }

    // Convert from KGS to target currency
    if (toCode === 'KGS') {
      return amountInKgs;
    }
    const sellRate = getRateInKgs(toCode, true);
    return amountInKgs / sellRate;
  };

  const convertedResult = calculateConvertedAmount();

  return (
    <section id="currency-rates" className="bg-[#F1F0F3] px-6 py-20 border-t border-[#002650]/10">
      <div className="max-w-[88rem] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-[#D72426] text-xs font-bold uppercase tracking-widest block mb-2">
              Курсы валют и конвертер
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#002650]">
              Выгодный курс валют в Банке Азии
            </h2>
          </div>
          <p className="text-[#002650]/70 text-sm max-w-sm mt-3 md:mt-0 font-medium">
            Обновлено: <span className="font-bold text-[#002650]">31.07.2026</span> · Курсы НБКР и безналичная конвертация 24/7 в приложении Asia Online.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Exchange Rates Table (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#002650]/10">
            {/* Tabs */}
            <div className="flex items-center justify-between border-b border-neutral-200 pb-4 mb-6">
              <div className="flex gap-2 bg-[#F1F0F3] p-1.5 rounded-full border border-[#002650]/10">
                <button
                  type="button"
                  onClick={() => setRateType('cash')}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    rateType === 'cash' ? 'bg-[#002650] text-white shadow-sm' : 'text-[#002650] hover:text-[#D72426]'
                  }`}
                >
                  Наличный курс
                </button>
                <button
                  type="button"
                  onClick={() => setRateType('nonCash')}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    rateType === 'nonCash' ? 'bg-[#002650] text-white shadow-sm' : 'text-[#002650] hover:text-[#D72426]'
                  }`}
                >
                  Безналичный (App)
                </button>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#002650] font-semibold">
                <TrendingUp className="w-3.5 h-3.5 text-[#D72426]" />
                <span>Курсы в сомах (KGS)</span>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-neutral-100 text-xs text-[#002650]/50 font-bold uppercase tracking-wider">
                    <th className="pb-3 px-2">Валюта</th>
                    <th className="pb-3 px-2">Покупка</th>
                    <th className="pb-3 px-2">Продажа</th>
                    <th className="pb-3 px-2">НБКР</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {INITIAL_CURRENCIES.map((c) => {
                    const buy = rateType === 'cash' ? c.cashBuy : c.nonCashBuy;
                    const sell = rateType === 'cash' ? c.cashSell : c.nonCashSell;
                    return (
                      <tr key={c.code} className="hover:bg-[#F1F0F3]/60 transition-colors">
                        <td className="py-3.5 px-2 flex items-center gap-3">
                          <span className="text-xl leading-none">{c.flag}</span>
                          <div>
                            <p className="font-bold text-[#002650] text-sm leading-none">{c.code}</p>
                            <p className="text-xs text-neutral-500 font-medium mt-1">{c.name}</p>
                          </div>
                        </td>
                        <td className="py-3.5 px-2 font-bold text-[#002650] text-base">{buy.toFixed(2)}</td>
                        <td className="py-3.5 px-2 font-bold text-[#002650] text-base">{sell.toFixed(2)}</td>
                        <td className="py-3.5 px-2 text-neutral-500 text-sm font-semibold">{c.nbkrRate.toFixed(2)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Interactive Calculator Widget (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#002650] to-[#001A38] text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between border border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Calculator className="w-5 h-5 text-[#D72426]" />
                <h3 className="text-xl font-bold">Онлайн конвертер валют</h3>
              </div>
              <p className="text-white/70 text-xs mb-6 font-medium">
                Рассчитайте точную сумму обмена по лучшему курсу Банка Азии.
              </p>

              {/* Input Amount */}
              <div className="mb-4">
                <label className="block text-xs font-bold text-white/70 uppercase mb-2">Отдаю</label>
                <div className="flex items-center bg-white/10 border border-white/15 rounded-2xl p-2.5">
                  <input
                    type="number"
                    min="1"
                    value={fromAmount}
                    onChange={(e) => setFromAmount(Math.max(0, parseFloat(e.target.value) || 0))}
                    className="w-full bg-transparent text-2xl font-bold text-white outline-none px-2"
                  />
                  <select
                    value={fromCode}
                    onChange={(e) => setFromCode(e.target.value)}
                    className="bg-[#002650] text-white font-bold text-sm rounded-xl px-3 py-2 outline-none border border-white/20 cursor-pointer"
                  >
                    <option value="KGS">KGS (Сом)</option>
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="RUB">RUB (₽)</option>
                    <option value="KZT">KZT (₸)</option>
                    <option value="CNY">CNY (Юань)</option>
                  </select>
                </div>
              </div>

              {/* Swap Button Icon */}
              <div className="flex justify-center -my-2 relative z-10">
                <button
                  type="button"
                  onClick={() => {
                    const temp = fromCode;
                    setFromCode(toCode);
                    setToCode(temp);
                  }}
                  className="bg-[#D72426] text-white p-2.5 rounded-full shadow-md hover:scale-110 transition-transform cursor-pointer"
                >
                  <ArrowRightLeft className="w-4 h-4" />
                </button>
              </div>

              {/* Output Amount */}
              <div className="mb-6">
                <label className="block text-xs font-bold text-white/70 uppercase mb-2">Получаю</label>
                <div className="flex items-center bg-white/10 border border-white/15 rounded-2xl p-2.5">
                  <input
                    type="text"
                    readOnly
                    value={convertedResult.toLocaleString('ru-RU', { maximumFractionDigits: 2 })}
                    className="w-full bg-transparent text-2xl font-bold text-white outline-none px-2"
                  />
                  <select
                    value={toCode}
                    onChange={(e) => setToCode(e.target.value)}
                    className="bg-[#002650] text-white font-bold text-sm rounded-xl px-3 py-2 outline-none border border-white/20 cursor-pointer"
                  >
                    <option value="KGS">KGS (Сом)</option>
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="RUB">RUB (₽)</option>
                    <option value="KZT">KZT (₸)</option>
                    <option value="CNY">CNY (Юань)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Action */}
            <a
              href="#app-download"
              className="w-full bg-[#D72426] text-white text-center font-bold py-3.5 rounded-full hover:bg-red-700 transition-colors shadow-md text-sm cursor-pointer block"
            >
              Обменять в приложении Asia Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
