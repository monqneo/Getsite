import React, { useState } from 'react';
import { Coins, Lock, CalendarClock, TrendingUp, Info, Infinity as InfinityIcon } from 'lucide-react';

const Staking: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'stake' | 'unstake'>('stake');
  const [amount, setAmount] = useState('');
  const [lockPeriod, setLockPeriod] = useState<number>(30);

  const baseApy = 3450; 

  const lockOptions = [
    { days: 14, label: '14 Дней', multiplier: '1.0x', val: 1.0 },
    { days: 30, label: '30 Дней', multiplier: '1.15x', val: 1.15 },
    { days: 60, label: '60 Дней', multiplier: '1.4x', val: 1.4 },
    { days: 90, label: '90 Дней', multiplier: '2.0x', val: 2.0 },
    { days: 999, label: 'Вечный', multiplier: '∞', val: 2.5, isEternal: true },
  ];

  const selectedOption = lockOptions.find(o => o.days === lockPeriod) || lockOptions[0];
  const currentMultiplier = selectedOption.multiplier;
  
  // Custom logic for Eternal Staking (Fixed 150% APY)
  const currentApy = selectedOption.isEternal 
    ? '150' 
    : (baseApy * selectedOption.val).toLocaleString();
    
  const currentRoi = selectedOption.isEternal 
    ? '∞' 
    : (4.5 * selectedOption.val).toFixed(2);

  return (
    <div className="h-full flex items-center justify-center p-6 overflow-y-auto">
      <div className="max-w-2xl w-full space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="text-5xl font-serif italic text-stone-100">Стейкинг</h2>
          <p className="text-stone-500 font-light">Протокол ликвидности (3, 3)</p>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-3 gap-4">
            <div className="bg-stone-900/30 p-5 rounded-[24px] text-center border border-stone-800/50 backdrop-blur-sm">
                <p className="text-[10px] text-stone-500 uppercase tracking-widest mb-1">APY</p>
                <p className="text-xl font-serif text-orange-200/90">{baseApy.toLocaleString()}%</p>
            </div>
            <div className="bg-stone-900/30 p-5 rounded-[24px] text-center border border-stone-800/50 backdrop-blur-sm">
                <p className="text-[10px] text-stone-500 uppercase tracking-widest mb-1">TVL</p>
                <p className="text-xl font-serif text-stone-200">$12.4M</p>
            </div>
            <div className="bg-stone-900/30 p-5 rounded-[24px] text-center border border-stone-800/50 backdrop-blur-sm">
                <p className="text-[10px] text-stone-500 uppercase tracking-widest mb-1">Индекс</p>
                <p className="text-xl font-serif text-stone-200">2.4 EVO</p>
            </div>
        </div>

        {/* Main Card */}
        <div className="bg-[#1c1917]/80 border border-stone-800/50 rounded-[40px] overflow-hidden shadow-2xl shadow-black/40 backdrop-blur-xl">
            {/* Tabs */}
            <div className="flex p-2 gap-2">
                <button 
                    onClick={() => setActiveTab('stake')}
                    className={`flex-1 py-3 rounded-full font-medium text-sm transition-all duration-300 ${activeTab === 'stake' ? 'bg-stone-100 text-stone-900 shadow-lg' : 'text-stone-500 hover:text-stone-300'}`}
                >
                    Вложить
                </button>
                <button 
                    onClick={() => setActiveTab('unstake')}
                    className={`flex-1 py-3 rounded-full font-medium text-sm transition-all duration-300 ${activeTab === 'unstake' ? 'bg-stone-100 text-stone-900 shadow-lg' : 'text-stone-500 hover:text-stone-300'}`}
                >
                    Вывести
                </button>
            </div>

            <div className="p-8 space-y-8">
                
                {/* Info / Purpose Block */}
                <div className="bg-stone-900/40 p-5 rounded-[24px] border border-stone-800 flex gap-4 items-start relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="p-2.5 bg-stone-800 rounded-full text-orange-200 border border-stone-700/50 shrink-0 z-10">
                        <Info size={18} />
                    </div>
                    <div className="z-10">
                        <h4 className="text-stone-200 font-serif italic text-lg mb-1">
                            {selectedOption.isEternal ? 'Стратегия: Клубный Дивиденд' : 'Стратегия: Валидация TON'}
                        </h4>
                        <p className="text-xs text-stone-400 font-light leading-relaxed">
                            {selectedOption.isEternal 
                                ? 'Бессрочное владение долей в казначействе EvoluTON. Фиксированный доход выплачивается из операционной прибыли клуба. Подходит для создания пассивного денежного потока.' 
                                : 'Ваши активы делегируются в ноды валидаторов The Open Network (Nominee Pools). Доход формируется из комиссий сети за транзакции и наград за создание новых блоков.'}
                        </p>
                    </div>
                </div>

                {/* Input */}
                <div className="bg-stone-900/50 rounded-[24px] p-4 border border-stone-800 hover:border-stone-700 transition-colors">
                    <div className="flex justify-between text-xs text-stone-500 mb-2 px-2">
                        <span className="uppercase tracking-wide">Сумма</span>
                        <span>Баланс: 0.00 EVO</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <input 
                            type="number" 
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="0.00"
                            className="w-full bg-transparent text-3xl font-serif text-stone-100 focus:outline-none placeholder:text-stone-700"
                        />
                        <button className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-xs font-bold text-stone-300 rounded-full transition-colors">
                            МАКС
                        </button>
                    </div>
                </div>

                {/* Lock Period Chart */}
                {activeTab === 'stake' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between px-2">
                        <label className="flex items-center gap-2 text-stone-400 text-sm">
                            <CalendarClock size={16} />
                            Период блокировки
                        </label>
                        <span className={`
                            text-xs flex items-center gap-1 px-3 py-1 rounded-full border
                            ${selectedOption.isEternal 
                                ? 'text-amber-200/90 bg-amber-900/20 border-amber-900/30' 
                                : 'text-orange-200/80 bg-orange-900/20 border-orange-900/30'}
                        `}>
                            <TrendingUp size={12} />
                            Буст: {currentMultiplier}
                        </span>
                    </div>

                    {/* Chart Container */}
                    <div className="h-48 flex items-end justify-between gap-4 px-4 pb-2">
                        {lockOptions.map((option) => {
                            const isActive = lockPeriod === option.days;
                            const isEternal = option.isEternal;
                            
                            // Height calc: standard options use val, eternal gets full height
                            const heightPercent = isEternal ? 100 : (option.val / 2.5) * 100;
                            const optionApy = isEternal 
                                ? '150' 
                                : (baseApy * option.val).toLocaleString();
                            
                            return (
                                <div 
                                    key={option.days} 
                                    onClick={() => setLockPeriod(option.days)}
                                    className="flex-1 flex flex-col items-center gap-3 group cursor-pointer h-full justify-end"
                                >
                                    {/* APY Label */}
                                    <div className={`
                                        text-[11px] font-medium px-3 py-1 rounded-full transition-all duration-500 mb-1 whitespace-nowrap border
                                        ${isActive 
                                            ? isEternal
                                                ? 'bg-amber-100 text-stone-900 border-amber-100 translate-y-0 opacity-100'
                                                : 'bg-orange-100 text-stone-900 border-orange-100 translate-y-0 opacity-100' 
                                            : 'bg-stone-900 text-stone-500 border-stone-800 -translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0'}
                                    `}>
                                        {optionApy}%
                                    </div>

                                    {/* Bar */}
                                    <div 
                                        style={{ height: `${heightPercent}%` }}
                                        className={`
                                            w-full max-w-[56px] rounded-2xl transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] relative overflow-hidden
                                            ${isActive 
                                                ? isEternal
                                                    ? 'bg-gradient-to-t from-amber-600 to-amber-200 shadow-[0_0_30px_rgba(251,191,36,0.3)]'
                                                    : 'bg-gradient-to-t from-[#c2410c] to-orange-200 shadow-[0_0_30px_rgba(253,186,116,0.2)]' 
                                                : 'bg-stone-800/50 hover:bg-stone-800 border border-stone-700/30'}
                                        `}
                                    >
                                        {isActive && <div className="absolute inset-0 bg-white/10 blur-md"></div>}
                                    </div>

                                    {/* Days Label */}
                                    <span className={`text-xs font-serif transition-colors ${isActive ? 'text-stone-200' : 'text-stone-600'}`}>
                                        {isEternal ? <InfinityIcon size={16} /> : `${option.days}дн`}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                  </div>
                )}

                {/* Summary */}
                <div className="bg-stone-900/30 rounded-3xl p-6 space-y-3 border border-stone-800/50">
                    <div className="flex justify-between text-sm">
                        <span className="text-stone-500">Эффективный APY</span>
                        <span className={`${selectedOption.isEternal ? 'text-amber-200' : 'text-orange-200'} font-serif text-lg`}>
                            {currentApy}%
                        </span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-stone-500">Ожидаемый ROI</span>
                        <span className="text-stone-300">
                             {selectedOption.isEternal ? 'Бессрочно' : `~${currentRoi}%`}
                        </span>
                    </div>
                </div>

                {/* Action Button */}
                <button className={`
                    w-full font-bold py-5 rounded-full transition-all shadow-xl shadow-stone-900/50 active:scale-95 flex items-center justify-center gap-3 text-lg
                    ${selectedOption.isEternal && activeTab === 'stake'
                        ? 'bg-amber-100 hover:bg-white text-stone-900' 
                        : 'bg-stone-100 hover:bg-white text-stone-900'}
                `}>
                   {activeTab === 'stake' ? <Lock size={20} /> : <Coins size={20} />}
                   {activeTab === 'stake' 
                        ? selectedOption.isEternal ? 'Начать Вечный Стейкинг' : `Стейкинг на ${lockPeriod} дней` 
                        : 'Вывести средства'
                   }
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Staking;