export enum AppView {
  HOME = 'home',           // Главная / Landing / Whitepaper
  DASHBOARD = 'dashboard', // Личный кабинет
  TARIFFS = 'tariffs',     // Инвестиции
  STAKE = 'stake',
  BOND = 'bond',
  PARTNERS = 'partners',   // Партнерская программа
  NFT = 'nft',
  CALCULATOR = 'calculator', // Калькулятор сложного процента
  ACADEMY = 'academy',       // База знаний
  GOVERNANCE = 'governance'  // DAO Голосование
}

export interface TariffPlan {
  id: number;
  name: string;
  minDeposit: number;
  maxDeposit: number;
  dailyPercent: number;
  days: number;
  totalReturn: number;
  category: 'Start' | 'Business' | 'Premium' | 'Infinity';
  color: string;
}

export interface UserStats {
  balance: number;
  invested: number;
  earnedTotal: number;
  activeDeposits: number;
  dailyIncome: number;
  referralLevel: number;
  partnersCount: number;
}

export interface BondOption {
  id: string;
  asset: string;
  price: string;
  roi: string;
  vestingTerm: string;
}

export interface Transaction {
  id: string;
  type: 'deposit' | 'accrual' | 'withdrawal' | 'referral';
  amount: number;
  date: string;
  status: 'completed' | 'pending';
  description: string;
}

export interface PartnerLevel {
  level: number;
  name: string;
  requirement: string;
  bonus: string;
  icon: any;
}