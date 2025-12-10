import React, { useState } from 'react';
import { ArrowRight, Wallet, Percent, Timer, CheckCircle2, TrendingUp, Info } from 'lucide-react';
import { BondOption } from '../types';

// Extended interface for internal logic to support dynamic calculation properties
interface ExtendedBondOption extends BondOption {
    marketPrice: string; // Price of EVO in USD
    bondPrice: string;   // Discounted price of EVO
    discount: string;
    soldAmount: number; // For scarcity
    totalAmount: number; // For scarcity
}

const Bonds: React.FC = () => {
  // Mock Data mimicking real DeFi bonding
  const bonds: ExtendedBondOption[] = [
    { id: '1', asset: 'TON', price: '$40.10', bondPrice: '40.10', marketPrice: '42.50', roi: '5.65%', discount: '5.65%', vestingTerm: '5 Days', soldAmount: 45000, totalAmount: 50000 },
    { id: '2', asset: 'USDT', price: '$41.20', bondPrice: '41.20', marketPrice: '42.50', roi: '3.05%', discount: '3.05%', vestingTerm: '5 Days', soldAmount: 12000, totalAmount: 100000 },
    { id: '3', asset: 'EVO-TON LP', price: '$38.50', bondPrice: '38.50', marketPrice: '42.50', roi: '9.41%', discount: '9.41%', vestingTerm: '7 Days', soldAmount: 24000, totalAmount: 25000 },
  ];

  const [selectedBondId, setSelectedBondId] = useState<string>(bonds[0].id);
  const [amount, setAmount] = useState<string>('');
  const [vestingPeriod, setVestingPeriod] = useState<number>(5); // Default 5 days

  const selectedBond = bonds.find(b => b.id === selectedBondId) || bonds[0];

  // Dynamic calculations simulating real-time protocol data
  const getDynamicStats = () => {
      const basePrice = parseFloat(selectedBond.bondPrice);
      // Simulate price/ROI changes based on vesting period (Longer vesting = lower price/higher ROI)
      const discountFactor = vestingPeriod === 5 ? 1 : vestingPeriod === 7 ? 0.98 : 0.95; 
      
      const dynamicPrice = (basePrice * discountFactor).toFixed(2);
      const marketP = parseFloat(selectedBond.marketPrice);
      const dynamicRoi = (((marketP - parseFloat(dynamicPrice)) / parseFloat(dynamicPrice)) * 100).toFixed(2);
      
      return {
          price: dynamicPrice,
          roi: dynamicRoi
      };
  };

  const stats = getDynamicStats();

  return (
    <div className="h-full p-6 md:p-10 overflow-y-auto pb-24">
        <div className="max-w-6xl mx-auto space-y-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-800/50">
                 <div className="space-y-2">
                    <h2 className="text-5xl font-serif italic text-stone-100">Облигации</h2>
                    <p className="text-stone-500 font-light text-lg">Приобретайте EVO с дисконтом, предоставляя ликвидность протоколу.</p>
                 </div>
                 <div className="bg-[#1c1917] px-6 py-4 rounded-full border border-stone-800 flex items-center gap-4 shadow-xl shadow-black/20">
                    <div className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center">
                        <Wallet size={16} className="text-stone-400"/>
                    </div>
                    <div>
                        <p className="text-[10px] text-stone-500 uppercase tracking-widest leading-none mb-1">Баланс Казны</p>
                        <p className="font-serif text-xl text-stone-200 leading-none">$4,200,500</p>
                    </div>
                 </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Asset Selection Sidebar */}
                <div className="lg:col-span-4 space-y-4">
                    <h3 className="text-stone-400 text-xs uppercase tracking-widest px-2 mb-2">Выберите Актив</h3>
                    {bonds.map(bond => {
                        const isSelected = selectedBondId === bond.id;
                        const percentSold = (bond.soldAmount / bond.totalAmount) * 100;
                        const isSoldOut = percentSold >= 100;

                        return (
                            <button
                                key={bond.id}
                                onClick={() => !isSoldOut && setSelectedBondId(bond.id)}
                                disabled={isSoldOut}
                                className={`w-full p-4 rounded-[24px] border transition-all duration-300 flex flex-col gap-3 group relative overflow-hidden
                                    ${isSelected 
                                        ? 'bg-stone-100 border-stone-100 shadow-[0_0_20px_rgba(255,255,255,0.1)]' 
                                        : isSoldOut ? 'bg-[#0a0a0a] border-stone-900 opacity-60 cursor-not-allowed' : 'bg-[#1c1917] border-stone-800 text-stone-500 hover:border-stone-600 hover:bg-stone-900'}
                                `}
                            >
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg transition-colors
                                            ${isSelected ? 'bg-stone-900 text-stone-100' : 'bg-stone-800 text-stone-600'}
                                        `}>
                                            {bond.asset === 'TON' ? '💎' : bond.asset.includes('LP') ? '💧' : '₮'}
                                        </div>
                                        <div className="text-left">
                                            <span className={`block font-serif text-lg ${isSelected ? 'text-stone-900' : 'text-stone-200'}`}>
                                                {bond.asset}
                                            </span>
                                            <span className={`text-xs ${isSelected ? 'text-stone-600' : 'text-stone-500'}`}>
                                                ROI: ~{bond.discount}
                                            </span>
                                        </div>
                                    </div>
                                    {isSelected && <CheckCircle2 className="text-stone-900" size={20}/>}
                                    {isSoldOut && <span className="text-[10px] uppercase font-bold text-red-500 border border-red-900/50 bg-red-900/10 px-2 py-1 rounded">Sold Out</span>}
                                </div>
                                
                                {/* Scarcity Bar */}
                                <div className="w-full space-y-1">
                                    <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest opacity-60">
                                        <span className={isSelected ? 'text-stone-800' : 'text-stone-500'}>
                                            {percentSold.toFixed(0)}% Sold
                                        </span>
                                        <span className={isSelected ? 'text-stone-800' : 'text-stone-500'}>
                                            {bond.soldAmount / 1000}k / {bond.totalAmount / 1000}k
                                        </span>
                                    </div>
                                    <div className={`w-full h-1.5 rounded-full ${isSelected ? 'bg-stone-300' : 'bg-stone-800'}`}>
                                        <div 
                                            style={{ width: `${percentSold}%` }}
                                            className={`h-full rounded-full ${isSelected ? 'bg-stone-900' : isSoldOut ? 'bg-stone-600' : 'bg-stone-500'}`}
                                        />
                                    </div>
                                </div>
                            </button>
                        );
                    })}

                    {/* Info Box */}
                    <div className="bg-stone-900/20 border border-stone-800 rounded-[24px] p-6 mt-8 backdrop-blur-sm">
                        <div className="flex items-start gap-3">
                            <Info size={18} className="text-stone-500 shrink-0 mt-0.5" />
                            <p className="text-xs text-stone-400 font-light leading-relaxed">
                                Цена облигации зависит от общего спроса. Покупая облигации, вы помогаете протоколу наращивать собственную ликвидность (POL).
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main Action Panel */}
                <div className="lg:col-span-8">
                    <div className="bg-[#1c1917] border border-stone-800 rounded-[40px] p-8 md:p-10 relative overflow-hidden shadow-2xl">
                        {/* Background Decor */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-stone-800/10 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/3" />

                        {/* Top Stats */}
                        <div className="flex flex-wrap gap-8 mb-10 relative z-10">
                            <div>
                                <p className="text-[10px] text-stone-500 uppercase tracking-widest mb-1">Рыночная цена EVO</p>
                                <p className="text-2xl font-serif text-stone-300">${selectedBond.marketPrice}</p>
                            </div>
                            <div className="w-px h-12 bg-stone-800 hidden sm:block"></div>
                            <div>
                                <p className="text-[10px] text-stone-500 uppercase tracking-widest mb-1">Цена Бонда</p>
                                <p className="text-4xl font-serif text-stone-100">${stats.price}</p>
                            </div>
                            <div className="ml-auto text-right">
                                <p className="text-[10px] text-stone-500 uppercase tracking-widest mb-1">ROI</p>
                                <p className="text-4xl font-serif text-emerald-400">+{stats.roi}%</p>
                            </div>
                        </div>

                        {/* Settings */}
                        <div className="space-y-8 relative z-10">
                            
                            {/* Vesting Selector */}
                            <div className="space-y-3">
                                <label className="flex items-center gap-2 text-stone-400 text-sm">
                                    <Timer size={16} />
                                    Срок Вестинга
                                </label>
                                <div className="grid grid-cols-3 gap-3">
                                    {[5, 7, 10].map((days) => (
                                        <button
                                            key={days}
                                            onClick={() => setVestingPeriod(days)}
                                            className={`py-4 rounded-2xl border transition-all duration-300 font-medium text-sm
                                                ${vestingPeriod === days 
                                                    ? 'bg-stone-100 border-stone-100 text-stone-900 shadow-lg' 
                                                    : 'bg-stone-900/50 border-stone-800 text-stone-500 hover:bg-stone-800'}
                                            `}
                                        >
                                            {days} Дней
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Amount Input */}
                            <div className="bg-stone-900/50 rounded-[24px] p-5 border border-stone-800 hover:border-stone-700 transition-colors">
                                <div className="flex justify-between text-xs text-stone-500 mb-2 px-1">
                                    <span className="uppercase tracking-wide">Отдаете</span>
                                    <span>Баланс: 0.00 {selectedBond.asset}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <input 
                                        type="number" 
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        placeholder="0.00"
                                        className="w-full bg-transparent text-4xl font-serif text-stone-100 focus:outline-none placeholder:text-stone-800"
                                    />
                                    <span className="text-stone-500 font-bold text-sm px-2">{selectedBond.asset}</span>
                                </div>
                            </div>

                             {/* Output Preview */}
                             {amount && (
                                <div className="flex justify-between items-center px-4 py-2 bg-emerald-900/10 border border-emerald-900/30 rounded-xl">
                                    <span className="text-emerald-500/80 text-xs uppercase tracking-wide">Вы получите</span>
                                    <span className="text-emerald-400 font-serif text-lg">
                                        ~{(parseFloat(amount || '0') * (selectedBond.asset === 'TON' ? 5.2 : 1) / parseFloat(stats.price)).toFixed(4)} EVO
                                    </span>
                                </div>
                             )}

                            {/* Action Btn */}
                            <button className="w-full py-5 bg-stone-100 hover:bg-white text-stone-900 rounded-full font-bold uppercase tracking-widest text-sm transition-all shadow-xl hover:shadow-2xl shadow-stone-900/50 active:scale-95 flex items-center justify-center gap-2">
                                <TrendingUp size={18} />
                                Купить Бонд
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Bonds;