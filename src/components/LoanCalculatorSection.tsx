import React, { useState } from 'react';
import { Percent, Clock, FileCheck, ArrowRight } from 'lucide-react';

export const LoanCalculatorSection: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<number>(100000);
  const [loanTermMonths, setLoanTermMonths] = useState<number>(12);
  const annualRate = 0.26; // 26% per annum

  // Calculate monthly annuity payment
  const monthlyRate = annualRate / 12;
  const monthlyPayment = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTermMonths)) /
      (Math.pow(1 + monthlyRate, loanTermMonths) - 1)
  );

  const totalRepayment = monthlyPayment * loanTermMonths;

  return (
    <section id="loan-calculator" className="bg-[#F1F0F3] px-6 py-24 border-t border-[#002650]/10">
      <div className="max-w-[88rem] mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-[#002650]/10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[#D72426] text-xs font-bold uppercase tracking-widest block mb-2">
                Онлайн кредитование
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#002650]">
                Онлайн кредит за 5 минут
              </h2>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-3">
              <span className="bg-[#002650] text-white px-4 py-2 rounded-full text-xs font-bold shadow-sm">
                Ставка: 26% годовых
              </span>
              <span className="bg-[#D72426] text-white px-4 py-2 rounded-full text-xs font-bold shadow-sm">
                ГЭПС: 29.81%
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Calculator Sliders (7 Cols) */}
            <div className="lg:col-span-7 space-y-8">
              {/* Amount Slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-bold text-[#002650]">Сумма кредита</label>
                  <span className="text-2xl font-extrabold text-[#002650]">
                    {loanAmount.toLocaleString('ru-RU')} KGS
                  </span>
                </div>
                <input
                  type="range"
                  min={10000}
                  max={250000}
                  step={5000}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#D72426]"
                />
                <div className="flex justify-between text-xs text-neutral-500 mt-2 font-semibold">
                  <span>10 000 KGS</span>
                  <span>250 000 KGS</span>
                </div>
              </div>

              {/* Term Slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-bold text-[#002650]">Срок кредитования</label>
                  <span className="text-2xl font-extrabold text-[#002650]">{loanTermMonths} месяцев</span>
                </div>
                <input
                  type="range"
                  min={3}
                  max={36}
                  step={1}
                  value={loanTermMonths}
                  onChange={(e) => setLoanTermMonths(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#D72426]"
                />
                <div className="flex justify-between text-xs text-neutral-500 mt-2 font-semibold">
                  <span>3 месяца</span>
                  <span>36 месяцев</span>
                </div>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="bg-[#F1F0F3] p-4 rounded-2xl border border-[#002650]/10">
                  <FileCheck className="w-5 h-5 text-[#D72426] mb-2" />
                  <p className="font-bold text-sm text-[#002650]">Только ID-карта</p>
                  <p className="text-xs text-neutral-600 font-medium">Без справки о доходах</p>
                </div>
                <div className="bg-[#F1F0F3] p-4 rounded-2xl border border-[#002650]/10">
                  <Clock className="w-5 h-5 text-[#D72426] mb-2" />
                  <p className="font-bold text-sm text-[#002650]">За 5 минут</p>
                  <p className="text-xs text-neutral-600 font-medium">Скоринг в реальном времени</p>
                </div>
                <div className="bg-[#F1F0F3] p-4 rounded-2xl border border-[#002650]/10">
                  <Percent className="w-5 h-5 text-[#D72426] mb-2" />
                  <p className="font-bold text-sm text-[#002650]">Любые цели</p>
                  <p className="text-xs text-neutral-600 font-medium">Без залога и поручителей</p>
                </div>
              </div>
            </div>

            {/* Results Summary Card (5 Cols) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#002650] to-[#001A38] text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between border border-white/10">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#D72426] mb-2">Расчет выплаты</p>
                <p className="text-sm text-white/90 mb-6 font-medium">Ежемесячный платеж составляет:</p>

                <div className="mb-8">
                  <p className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-2">
                    {monthlyPayment.toLocaleString('ru-RU')} KGS
                  </p>
                  <p className="text-xs text-white/70 font-medium">
                    Общая сумма к возврату: <span className="font-bold text-white">{totalRepayment.toLocaleString('ru-RU')} KGS</span>
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  type="button"
                  onClick={() => alert(`Заявка на кредит в размере ${loanAmount.toLocaleString('ru-RU')} KGS отправлена! Перейдите в приложение Asia Online для завершения.`)}
                  className="w-full bg-[#D72426] text-white font-bold py-4 rounded-full hover:bg-red-700 transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer text-base"
                >
                  <span>Подать заявку за 5 минут</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
                <p className="text-[11px] text-center text-white/60 font-medium">
                  Эффективная процентная ставка 29,81%. Окончательный расчет формируется при подписании договора в приложении.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
