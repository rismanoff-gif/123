import type { CurrencyRate, BankCard, FaqItem } from '../types';

export const BANK_INFO = {
  name: 'Asia Online / ЗАО «Банк Азии»',
  shortName: 'Bank of Asia',
  phone: '+996 (312) 91-07-07',
  license: 'Лицензия НБКР № 042 от 06.03.1998г.',
  appStoreUrl: 'https://apps.apple.com/kg/app/asia-online/id1595275591',
  googlePlayUrl: 'https://play.google.com/store/apps/details?id=kg.asiabank.mobileib',
};

export const INITIAL_CURRENCIES: CurrencyRate[] = [
  {
    code: 'USD',
    name: 'Доллар США',
    flag: '🇺🇸',
    cashBuy: 87.40,
    cashSell: 87.80,
    nonCashBuy: 87.45,
    nonCashSell: 87.75,
    nbkrRate: 87.65,
  },
  {
    code: 'EUR',
    name: 'Евро',
    flag: '🇪🇺',
    cashBuy: 100.40,
    cashSell: 101.40,
    nonCashBuy: 100.50,
    nonCashSell: 101.30,
    nbkrRate: 100.90,
  },
  {
    code: 'RUB',
    name: 'Российский рубль',
    flag: '🇷🇺',
    cashBuy: 1.04,
    cashSell: 1.13,
    nonCashBuy: 1.05,
    nonCashSell: 1.12,
    nbkrRate: 1.08,
  },
  {
    code: 'KZT',
    name: 'Казахстанский тенге',
    flag: '🇰🇿',
    cashBuy: 0.175,
    cashSell: 0.195,
    nonCashBuy: 0.178,
    nonCashSell: 0.192,
    nbkrRate: 0.185,
  },
  {
    code: 'CNY',
    name: 'Китайский юань',
    flag: '🇨🇳',
    cashBuy: 12.10,
    cashSell: 12.40,
    nonCashBuy: 12.15,
    nonCashSell: 12.35,
    nbkrRate: 12.25,
  },
];

export const BANK_CARDS: BankCard[] = [
  {
    id: 'visa-infinite',
    name: 'VISA Infinite',
    tagline: 'Элита, Привилегии, Неограниченные Возможности',
    badge: 'Премиум',
    color: '#000000',
    bgGradient: 'from-gray-900 via-neutral-900 to-black',
    textColor: 'text-white',
    features: [
      'До 15% скидки и кешбэка у партнеров',
      '7% годовых на остаток в сомах',
      'Персональный консьерж 24/7 и LoungeKey доступ',
      'Бесплатное снятие в любых банкоматах мира',
    ],
    perks: [
      { label: 'Кешбэк', value: 'до 15%' },
      { label: 'На остаток в KGS', value: '7%' },
      { label: 'Привилегии', value: 'VISA VIP' },
    ],
    image: 'https://asiaonline.kg/strapi/uploads/infinite_1920_1080_87d86a551d.png',
    orderUrl: 'https://asiaonline.kg/cards/infinite',
  },
  {
    id: 'visa-gold',
    name: 'VISA Gold',
    tagline: 'Обновленная премиальная карта с доставкой',
    badge: 'Хит продаж',
    color: '#D4AF37',
    bgGradient: 'from-[#143d6e] to-[#002650]',
    textColor: 'text-white',
    features: [
      'Бесплатная курьерская доставка на дом',
      'Скидки до 10% в сети ресторанов и магазинов',
      'Бесконтактная оплата PayWave & Apple Pay / Google Pay',
      'Бесплатное мобильное приложение Asia Online',
    ],
    perks: [
      { label: 'Доставка', value: 'Бесплатно' },
      { label: 'Обслуживание', value: '0 KGS' },
      { label: 'Кешбэк', value: 'до 10%' },
    ],
    image: 'https://asiaonline.kg/strapi/uploads/762_520_gold_cd301a81ba.png',
    orderUrl: 'https://asiaonline.kg/cards/visa_gold',
  },
  {
    id: 'visa-platinum',
    name: 'VISA Platinum',
    tagline: 'Комфорт в путешествиях и финансовая гибкость',
    badge: 'Новинка',
    color: '#2B2644',
    bgGradient: 'from-[#2B2644] to-[#12101F]',
    textColor: 'text-white',
    features: [
      'Бесплатный доступ в VIP-залы аэропортов',
      'Страхование во время поездок за рубеж до $500,000',
      'Беспроцентные переводы между картами Банка Азии',
      'Кешбэк 5% на категории «Путешествия» и «Отели»',
    ],
    perks: [
      { label: 'Страховка', value: '$500,000' },
      { label: 'Переводы', value: '0%' },
      { label: 'VIP Залы', value: 'Бесплатно' },
    ],
    image: '/cards/visa_platinum.jpg',
    orderUrl: 'https://asiaonline.kg/cards',
  },
];

export const MOBILE_APP_FEATURES = [
  { title: 'QR оплата и переводы', icon: 'qr', desc: 'Оплачивайте покупки за 1 секунду по коду' },
  { title: 'P2P платежи и переводы', icon: 'p2p', desc: 'Мгновенные переводы на карты любых банков' },
  { title: 'Онлайн заявка на кредит', icon: 'percent', desc: 'До 250 000 KGS за 5 минут по ID-карте' },
  { title: 'Онлайн заявка на депозит', icon: 'deposit', desc: 'Выгодные ставки по вкладам без визита в банк' },
  { title: 'Онлайн открытие карты', icon: 'bookmark', desc: 'Заказ VISA Gold / Infinite с доставкой' },
  { title: 'Валютные депозиты и Сбережения', icon: 'services', desc: 'Управление мультивалютными счетами 24/7' },
];

export const FAQ_DATA: FaqItem[] = [
  {
    category: 'loans',
    question: 'Как получить онлайн кредит за 5 минут?',
    answer: 'Вам потребуется только ID-карта и мобильное приложение Asia Online. Перейдите в раздел «Онлайн кредит», выберите сумму до 250 000 KGS и подтвердите заявку. Решение принимает автоматическая скоринговая система за 5 минут.',
  },
  {
    category: 'cards',
    question: 'Как заказать карту VISA Gold с доставкой на дом?',
    answer: 'Вы можете оформить заявку на нашем сайте или в приложении Asia Online. Наш курьер бесплатно доставит готовый банковский конверт прямо к вашей двери в удобное время.',
  },
  {
    category: 'deposits',
    question: 'Какая процентная ставка по депозитам и остаткам на картах?',
    answer: 'Банк Азии предлагает до 7% годовых на остаток по премиальным картам VISA Infinite и до 13% годовых по срочным вкладам в сомах.',
  },
  {
    category: 'rates',
    question: 'Отличается ли безналичный курс от наличного?',
    answer: 'Да, Банк Азии предлагает выигрышный безналичный курс для онлайн-конвертации внутри приложения Asia Online, что позволяет экономить при обмене валюты.',
  },
  {
    category: 'app',
    question: 'Нужно ли идти в банк для регистрации в Asia Online?',
    answer: 'Нет! Регистрация происходит полностью онлайн с помощью сканирования вашей паспорта ID-карты и биометрической проверки прямо в приложении.',
  },
];
