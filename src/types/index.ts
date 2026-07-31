export interface CurrencyRate {
  code: string;
  name: string;
  flag: string;
  cashBuy: number;
  cashSell: number;
  nonCashBuy: number;
  nonCashSell: number;
  nbkrRate: number;
}

export interface BankCard {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  color: string;
  bgGradient: string;
  textColor: string;
  features: string[];
  perks: { label: string; value: string }[];
  image: string;
  orderUrl: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'cards' | 'loans' | 'app' | 'rates' | 'deposits';
}
