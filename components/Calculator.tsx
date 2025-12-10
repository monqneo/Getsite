import React, { useState, useEffect } from 'react';
import { Calculator as CalcIcon, TrendingUp, DollarSign, Calendar, PieChart } from 'lucide-react';

const Calculator: React.FC = () => {
  const [deposit, setDeposit] = useState<number>(1000);
  const [months, setMonths] = useState<number>(12);
  const [strategy, setStrategy] = useState<'Start' | 'Business' | 'Premium'>('Business');

  const getMonthlyRate = (s: string) => {
    switch (s) {
      case 'Start': return 0.25; // ~25% month
      case 'Business': return 0.45; // ~45% month
      case 'Premium': return 0.65; // ~65% month
      default: return 0.30;
    }
  };

  const monthlyRate = getMonthlyRate(strategy);
  
  // Calculate Compound Interest
  // Formula: A = P(1 + r)^t
  // Using a simplified monthly compounding for demo purposes (aggressive crypto yields)
  const finalAmount = Math.floor(deposit * Math.pow(1 + monthlyRate, months));
  const totalProfit = finalAmount - deposit;
  const percentageGrowth = ((totalProfit / deposit) * 100).toFixed(0);

  // Generate data points for simple visualization
  const chartData = Array.from({ length: 12 }, (_, i) => {
      // Normalize i to span the selected months
      const currentMonth = Math.ceil((i + 1) * (months / 12));
      const val = deposit * Math.pow(1 + monthlyRate, currentMonth);
      return { month: currentMonth, value: val };
  });
  
  const maxVal = chartData[chartData.length - 1].value;

  return (
    <div className="h-full p-6 md:p-10 overflow-y-auto pb-20">
      <div className="max-w-6xl mx-auto space-y-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 pb-6 border-b border-stone-800/50">
            <div>
                <h2 className="text-5xl font-serif italic text-stone-100 mb-2">Симулятор Дохода</h2>
                <p className="text-stone-500 font-light text-lg">Магия сложного процента в действии. Рассчитайте свое будущее.</p>
            </div>
            <div className="bg-stone-900/50 px-4 py-2 rounded-lg border border-stone-800">
                <span className="text-xs text-stone-500 uppercase tracking-widest">Текущая стратегия: </span>
                <span className="text-stone-200 font-serif">{strategy}</span>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Controls */}
            <div className="lg:col-span-5 space-y-10">
                
                {/* Deposit Slider */}
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <label className="text-sm text-stone-400 uppercase tracking-wider flex items-center gap-2">
                            <DollarSign size={16} /> Стартовый Депозит
                        </label>
                        <span className="text-2xl font-serif text-white">${deposit.toLocaleString()}</span>
                    </div>
                    <input 
                        type="range" 
                        min="100" 
                        max="50000" 
                        step="100" 
                        value={deposit} 
                        onChange={(e) => setDeposit(Number(e.target.value))}
                        className="w-full h-2 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-stone-100"
                    />
                    <div className="flex justify-between text-xs text-stone-600 font-mono">
                        <span>$100</span>
                        <span>$50,000</span>
                    </div>
                </div>

                {/* Months Slider */}
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <label className="text-sm text-stone-400 uppercase tracking-wider flex items-center gap-2">
                            <Calendar size={16} /> Срок инвестирования
                        </label>
                        <span className="text-2xl font-serif text-white">{months} Мес.</span>
                    </div>
                    <input 
                        type="range" 
                        min="1" 
                        max="24" 
                        step="1" 
                        value={months} 
                        onChange={(e) => setMonths(Number(e.target.value))}
                        className="w-full h-2 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-stone-100"
                    />
                    <div className="flex justify-between text-xs text-stone-600 font-mono">
                        <span>1 Мес</span>
                        <span>2 Года</span>
                    </div>
                </div>

                {/* Strategy Select */}
                <div className="grid grid-cols-3 gap-3">
                    {['Start', 'Business', 'Premium'].map((s) => (
                        <button
                            key={s}
                            onClick={() => setStrategy(s as any)}
                            className={`py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                                strategy === s 
                                ? 'bg-stone-100 text-stone-900 border-stone-100' 
                                : 'bg-transparent text-stone-500 border-stone-800 hover:border-stone-600'
                            }`}
                        >
                            {s}
                        </button>
                    ))}
                </div>

                <div className="p-6 bg-stone-900/30 rounded-2xl border border-stone-800/50 text-sm text-stone-400 leading-relaxed font-light">
                    <TrendingUp size={20} className="mb-3 text-emerald-500/80" />
                    В расчете используется модель реинвестирования (Compounding). 
                    Это означает, что прибыль, полученная за период, добавляется к телу депозита и работает в следующем периоде.
                </div>
            </div>

            {/* Results Visualization */}
            <div className="lg:col-span-7">
                <div className="bg-[#1c1917] rounded-[40px] p-8 md:p-12 border border-stone-800 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-stone-800/20 blur-[120px] rounded-full pointer-events-none" />
                    
                    <div className="relative z-10 text-center mb-12">
                        <p className="text-stone-500 uppercase tracking-widest text-xs mb-2">Ваш капитал через {months} мес.</p>
                        <p className="text-6xl md:text-7xl font-serif text-stone-100 mb-4 tracking-tighter">
                            ${finalAmount.toLocaleString()}
                        </p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-900/20 border border-emerald-900/30 rounded-full text-emerald-400">
                            <TrendingUp size={16} />
                            <span className="font-bold">+{percentageGrowth}% Роста</span>
                        </div>
                    </div>

                    {/* Simple Bar Chart */}
                    <div className="flex items-end justify-between h-48 gap-2 relative z-10">
                        {chartData.map((data, idx) => {
                            const heightPercentage = (data.value / maxVal) * 100;
                            return (
                                <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
                                     <div 
                                        style={{ height: `${heightPercentage}%` }}
                                        className="w-full bg-stone-800 group-hover:bg-stone-600 rounded-t-sm transition-all duration-500 relative min-h-[4px]"
                                     >
                                        {/* Tooltip */}
                                        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-100 text-stone-900 text-[10px] font-bold px-2 py-1 rounded pointer-events-none whitespace-nowrap z-20">
                                            ${Math.floor(data.value).toLocaleString()}
                                        </div>
                                     </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex justify-between mt-4 border-t border-stone-800 pt-4 text-xs text-stone-600 font-mono uppercase">
                        <span>Сегодня</span>
                        <span>Через {months} мес</span>
                    </div>

                    <button className="w-full mt-10 py-4 bg-stone-100 hover:bg-white text-stone-900 font-bold uppercase tracking-widest text-xs rounded-full transition-all active:scale-95 shadow-lg">
                        Начать с этой суммой
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;