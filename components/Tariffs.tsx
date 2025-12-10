import React, { useState } from 'react';
import { ShieldCheck, Zap, Crown, Rocket, Info, CheckCircle2, TrendingUp, BarChart3, Globe, Lock, Brain, Target, Shield } from 'lucide-react';
import { TariffPlan } from '../types';

// Расширяем интерфейс для хранения описания стратегии
interface ExtendedTariffPlan extends TariffPlan {
  strategyName: string;
  strategyDesc: string;
}

const generateTariffs = (): ExtendedTariffPlan[] => {
  const plans: ExtendedTariffPlan[] = [];
  
  // 1. Маркет-мейкинг и Арбитраж (Низкий риск, Стабильный доход)
  for (let i = 1; i <= 4; i++) {
    plans.push({
      id: i,
      name: `Liquidity ${['Alpha', 'Beta', 'Gamma', 'Delta'][i-1]}`,
      minDeposit: 50 + (i-1)*50,
      maxDeposit: 150 + (i-1)*100,
      dailyPercent: 0.8 + (i * 0.1), // 0.9 - 1.2%
      days: 10 + (i*2),
      totalReturn: 0,
      category: 'Start',
      color: 'stone',
      strategyName: 'Стейблкоин Арбитраж',
      strategyDesc: 'Автоматизированный арбитраж курсов USDT/USDC на DEX биржах экосистемы TON.'
    });
  }

  // 2. DeFi Фарминг и Лендинг (Средний риск)
  for (let i = 1; i <= 4; i++) {
    plans.push({
      id: 5 + i,
      name: `Venture ${['I', 'II', 'III', 'IV'][i-1]}`,
      minDeposit: 500 + (i-1)*200,
      maxDeposit: 1500 + (i-1)*500,
      dailyPercent: 1.4 + (i * 0.1), // 1.5 - 1.8%
      days: 20 + (i*3),
      totalReturn: 0,
      category: 'Business',
      color: 'emerald',
      strategyName: 'Кросс-чейн Лендинг',
      strategyDesc: 'Предоставление ликвидности в лендинговые протоколы под залог голубых фишек (TON, ETH).'
    });
  }

  // 3. MEV и Высокочастотный трейдинг (Высокий доход)
  for (let i = 1; i <= 4; i++) {
    plans.push({
      id: 10 + i,
      name: `Quantum ${['Core', 'Pro', 'Max', 'Ultra'][i-1]}`,
      minDeposit: 3000 + (i-1)*1000,
      maxDeposit: 8000 + (i-1)*2000,
      dailyPercent: 2.0 + (i * 0.15), // 2.15 - 2.6%
      days: 35 + (i*5),
      totalReturn: 0,
      category: 'Premium',
      color: 'purple',
      strategyName: 'MEV & HFT Трейдинг',
      strategyDesc: 'Извлечение максимальной стоимости (MEV) и алго-трейдинг на высокой волатильности.'
    });
  }

  // 4. Венчурные инвестиции (Максимальный риск/доход)
  for (let i = 1; i <= 4; i++) {
    plans.push({
      id: 15 + i,
      name: `Private ${['Seed', 'Round A', 'Round B', 'IPO'][i-1]}`,
      minDeposit: 15000 + (i-1)*5000,
      maxDeposit: 100000,
      dailyPercent: 3.0 + (i * 0.2), // 3.2 - 3.8%
      days: 60 + (i*10),
      totalReturn: 0,
      category: 'Infinity',
      color: 'amber',
      strategyName: 'Венчурный Капитал',
      strategyDesc: 'Ранний вход в перспективные токены (Pre-Seed/IDO) и управление аллокациями.'
    });
  }

  return plans.map(p => ({
    ...p,
    totalReturn: Number((p.dailyPercent * p.days).toFixed(1))
  }));
};

const allTariffs = generateTariffs();

const RiskProfileModal = ({ onClose }: { onClose: (pref: string) => void }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
            <div className="bg-[#1c1917] border border-stone-800 rounded-[32px] max-w-2xl w-full p-8 md:p-12 relative shadow-2xl">
                 <div className="text-center space-y-4 mb-10">
                     <Brain size={48} className="mx-auto text-stone-500 mb-4" />
                     <h3 className="text-3xl font-serif text-stone-100">Ваш инвестиционный профиль</h3>
                     <p className="text-stone-400 font-light">
                         Чтобы подобрать идеальную стратегию, определите вашу главную цель на ближайшие 3 месяца.
                     </p>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <button 
                        onClick={() => onClose('Start')}
                        className="p-6 border border-stone-800 bg-stone-900/50 hover:bg-stone-100 hover:text-black rounded-2xl group transition-all text-left"
                     >
                         <Shield size={32} className="text-stone-500 group-hover:text-black mb-4" />
                         <h4 className="text-xl font-serif mb-2">Консервативный</h4>
                         <p className="text-xs opacity-60">
                             Минимальный риск. Стабильный доход от арбитража. 
                             <br/>(Ожидаемый ROI: ~20-30%)
                         </p>
                     </button>
                     <button 
                        onClick={() => onClose('Premium')}
                        className="p-6 border border-stone-800 bg-stone-900/50 hover:bg-stone-100 hover:text-black rounded-2xl group transition-all text-left"
                     >
                         <Target size={32} className="text-stone-500 group-hover:text-black mb-4" />
                         <h4 className="text-xl font-serif mb-2">Агрессивный</h4>
                         <p className="text-xs opacity-60">
                             Высокий риск. Максимальная доходность от MEV и Venture. 
                             <br/>(Ожидаемый ROI: ~150%+)
                         </p>
                     </button>
                 </div>
                 
                 <button onClick={() => onClose('All')} className="w-full mt-8 text-xs text-stone-500 hover:text-stone-300 uppercase tracking-widest">
                     Пропустить и показать все стратегии
                 </button>
            </div>
        </div>
    );
};

const Tariffs: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Start' | 'Business' | 'Premium' | 'Infinity'>('All');
  const [showRiskQuiz, setShowRiskQuiz] = useState(true);

  const filteredTariffs = filter === 'All' 
    ? allTariffs 
    : allTariffs.filter(t => t.category === filter);

  // Translate category names for display
  const getCategoryLabel = (cat: string) => {
    switch(cat) {
        case 'Start': return 'Арбитраж';
        case 'Business': return 'DeFi';
        case 'Premium': return 'Квант';
        case 'Infinity': return 'Венчур';
        default: return cat;
    }
  };

  const getCategoryIcon = (cat: string) => {
    switch(cat) {
      case 'Start': return <Globe size={18} />;
      case 'Business': return <BarChart3 size={18} />;
      case 'Premium': return <Zap size={18} />;
      case 'Infinity': return <Crown size={18} />;
      default: return <Info size={18} />;
    }
  };

  const handleQuizClose = (pref: string) => {
      setShowRiskQuiz(false);
      setFilter(pref as any);
  };

  // Helper to get visual styles based on plan color/category
  const getPlanStyles = (color: string) => {
      switch(color) {
          case 'emerald':
              return {
                  border: 'group-hover:border-emerald-800/50',
                  iconBg: 'bg-emerald-900/20 text-emerald-400 border-emerald-900/30',
                  textAccent: 'text-emerald-400',
                  bgHover: 'group-hover:bg-emerald-950/20',
                  progressFill: 'bg-emerald-500',
                  glow: 'shadow-[0_0_30px_rgba(16,185,129,0.1)]'
              };
          case 'purple':
              return {
                  border: 'group-hover:border-purple-800/50',
                  iconBg: 'bg-purple-900/20 text-purple-400 border-purple-900/30',
                  textAccent: 'text-purple-400',
                  bgHover: 'group-hover:bg-purple-950/20',
                  progressFill: 'bg-purple-500',
                  glow: 'shadow-[0_0_30px_rgba(168,85,247,0.1)]'
              };
          case 'amber':
              return {
                  border: 'group-hover:border-amber-700/50 border-amber-900/20',
                  iconBg: 'bg-amber-900/20 text-amber-400 border-amber-900/30',
                  textAccent: 'text-amber-400',
                  bgHover: 'group-hover:bg-amber-950/20',
                  progressFill: 'bg-amber-500',
                  glow: 'shadow-[0_0_30px_rgba(245,158,11,0.15)]'
              };
          default: // stone
              return {
                  border: 'group-hover:border-stone-600',
                  iconBg: 'bg-stone-800 text-stone-400 border-stone-700/30',
                  textAccent: 'text-stone-200',
                  bgHover: 'group-hover:bg-stone-800/40',
                  progressFill: 'bg-stone-400',
                  glow: ''
              };
      }
  };

  return (
    <div className="h-full p-6 md:p-10 overflow-y-auto pb-24">
      {showRiskQuiz && <RiskProfileModal onClose={handleQuizClose} />}
      
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="space-y-4">
            <h2 className="text-5xl font-serif italic text-stone-100">Инвестиционные Стратегии</h2>
            <div className="bg-[#1c1917] border border-stone-800 p-6 rounded-[24px] flex items-start gap-5 max-w-3xl">
                <Info className="text-stone-400 shrink-0 mt-1" />
                <p className="text-stone-400 font-light leading-relaxed">
                    EvoluTON предоставляет доступ к институциональным инструментам управления капиталом. 
                    Все стратегии диверсифицированы и управляются алгоритмическими системами риск-менеджмента.
                </p>
            </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2">
            {['All', 'Start', 'Business', 'Premium', 'Infinity'].map((cat) => (
                <button
                    key={cat}
                    onClick={() => setFilter(cat as any)}
                    className={`px-8 py-3 rounded-full text-sm font-medium transition-all ${
                        filter === cat 
                        ? 'bg-stone-100 text-stone-900 shadow-lg' 
                        : 'bg-transparent border border-stone-800 text-stone-500 hover:text-stone-300 hover:bg-stone-900'
                    }`}
                >
                    {cat === 'All' ? 'Все стратегии' : getCategoryLabel(cat)}
                </button>
            ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTariffs.map((plan) => {
                const styles = getPlanStyles(plan.color);
                const level = (plan.id - 1) % 4 + 1; // 1 to 4
                
                return (
                    <div 
                        key={plan.id}
                        className={`
                            bg-stone-900/20 border border-stone-800/50 rounded-[32px] p-6 
                            transition-all duration-500 hover:-translate-y-2 relative group flex flex-col h-full
                            ${styles.border} ${styles.bgHover} ${styles.glow}
                        `}
                    >
                        {/* Header: Icon & Rate */}
                        <div className="flex justify-between items-start mb-6">
                            <span className={`w-12 h-12 rounded-full flex items-center justify-center border transition-colors ${styles.iconBg}`}>
                                {getCategoryIcon(plan.category)}
                            </span>
                            <div className="text-right">
                                <span className={`block text-3xl font-serif tracking-tight ${styles.textAccent} transition-colors`}>
                                    {plan.dailyPercent.toFixed(2)}%
                                </span>
                                <span className="text-[10px] text-stone-600 uppercase tracking-widest font-bold">в сутки</span>
                            </div>
                        </div>

                        {/* Title & Level Indicator */}
                        <div className="mb-4">
                            <h3 className="text-xl font-serif italic text-stone-100 mb-2">{plan.name}</h3>
                            {/* Visual Level Bar */}
                            <div className="flex gap-1 h-1 w-24">
                                {[1, 2, 3, 4].map((l) => (
                                    <div 
                                        key={l} 
                                        className={`flex-1 rounded-full ${l <= level ? styles.progressFill : 'bg-stone-800'}`}
                                    />
                                ))}
                            </div>
                        </div>
                        
                        {/* Strategy Source Description */}
                        <div className="mb-6 min-h-[60px]">
                            <p className="text-[10px] text-stone-500 uppercase tracking-widest mb-1">Источник</p>
                            <p className="text-xs text-stone-400 font-light leading-snug line-clamp-3">
                                {plan.strategyDesc}
                            </p>
                        </div>

                        {/* Stats Box */}
                        <div className="space-y-4 mb-8 bg-[#0c0a09]/50 p-5 rounded-2xl border border-stone-800/30">
                            <div className="flex justify-between text-sm pb-2 border-b border-stone-800/50">
                                <span className="text-stone-500 font-light">Вход</span>
                                <span className="text-stone-300 font-medium font-serif">${plan.minDeposit}</span>
                            </div>
                            <div className="flex justify-between text-sm pb-2 border-b border-stone-800/50">
                                <span className="text-stone-500 font-light">Лимит</span>
                                <span className="text-stone-300 font-medium font-serif">${plan.maxDeposit}</span>
                            </div>
                            <div className="flex justify-between text-sm pb-2 border-b border-stone-800/50">
                                <span className="text-stone-500 font-light">Срок</span>
                                <span className="text-stone-300 font-medium">{plan.days} дней</span>
                            </div>
                            <div className="flex justify-between text-sm pt-1">
                                <span className="text-stone-500 font-light">Итого ROI</span>
                                <span className={`${styles.textAccent} font-serif text-lg`}>+{plan.totalReturn}%</span>
                            </div>
                        </div>

                        {/* Action Button */}
                        <button className={`
                            mt-auto w-full py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 group/btn active:scale-95 border
                            bg-stone-900 border-stone-800 text-stone-300
                            hover:bg-stone-100 hover:text-stone-900 hover:border-transparent
                        `}>
                            Инвестировать
                            <CheckCircle2 size={16} className="opacity-0 group-hover/btn:opacity-100 transition-opacity -ml-4 group-hover/btn:ml-0" />
                        </button>
                    </div>
                );
            })}
        </div>

      </div>
    </div>
  );
};

export default Tariffs;