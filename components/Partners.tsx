import React, { useState } from 'react';
import { Network, Users, Trophy, Target, Gift, Copy, Check, ChevronRight } from 'lucide-react';
import { PartnerLevel } from '../types';

interface PartnerLevelCardProps {
  level: PartnerLevel;
  isActive: boolean;
}

const PartnerLevelCard: React.FC<PartnerLevelCardProps> = ({ level, isActive }) => (
    <div className={`p-6 border transition-all duration-300 relative group overflow-hidden ${
        isActive 
        ? 'bg-stone-100 border-stone-100 text-stone-900' 
        : 'bg-[#0a0a0a] border-stone-800 text-stone-500 hover:border-stone-600'
    }`}>
        {isActive && (
            <div className="absolute top-0 right-0 p-2 bg-black text-white text-[10px] uppercase font-bold tracking-widest">
                Текущий
            </div>
        )}
        <div className="flex justify-between items-start mb-4">
            <div className={`p-3 rounded-full border ${isActive ? 'border-stone-300 bg-stone-200' : 'border-stone-800 bg-stone-900'}`}>
                {level.icon}
            </div>
            <span className="font-serif italic text-2xl opacity-40">0{level.level}</span>
        </div>
        <h3 className={`text-xl font-serif mb-2 ${isActive ? 'text-stone-900' : 'text-stone-200'}`}>{level.name}</h3>
        
        <div className="space-y-3 mt-6 text-xs">
            <div className="flex justify-between border-b border-black/10 pb-2">
                <span className="uppercase tracking-wide">Оборот</span>
                <span className="font-bold font-mono">{level.requirement}</span>
            </div>
            <div className="flex justify-between">
                <span className="uppercase tracking-wide">Бонус</span>
                <span className="font-bold font-mono">{level.bonus}</span>
            </div>
        </div>
    </div>
);

const BinaryNode = ({ active }: { active?: boolean }) => (
    <div className="flex flex-col items-center gap-2">
        <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center z-10 bg-[#050505] transition-colors ${
            active ? 'border-green-500 text-green-500 shadow-[0_0_15px_rgba(34,197,94,0.3)]' : 'border-stone-800 text-stone-700'
        }`}>
            <Users size={16} />
        </div>
        <div className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">
            {active ? 'Active' : 'Empty'}
        </div>
    </div>
);

const Partners: React.FC = () => {
    const [copied, setCopied] = useState(false);

    const copyLink = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const levels: PartnerLevel[] = [
        { level: 1, name: "Partner", requirement: "$0", bonus: "8%", icon: <Users size={18}/> },
        { level: 2, name: "Manager", requirement: "$10,000", bonus: "9% + $500", icon: <Target size={18}/> },
        { level: 3, name: "Director", requirement: "$50,000", bonus: "10% + MacBook", icon: <Trophy size={18}/> },
        { level: 4, name: "President", requirement: "$250,000", bonus: "12% + Rolex", icon: <Gift size={18}/> },
    ];

    return (
        <div className="h-full overflow-y-auto p-6 md:p-10 space-y-12 bg-[#050505]">
            
            {/* Header */}
            <div className="max-w-4xl">
                <h2 className="text-5xl font-serif text-stone-100 mb-6">Партнерская Экосистема</h2>
                <p className="text-stone-400 font-light text-lg max-w-2xl leading-relaxed">
                    Превратите свой социальный капитал в реальный актив. 
                    Мы платим <span className="text-white font-bold border-b border-white">8% моментально</span> за каждого лично приглашенного партнера. 
                    Стройте бинарную структуру и получайте пассивный доход от оборота всей команды.
                </p>
            </div>

            {/* Invite Link Widget */}
            <div className="bg-[#0a0a0a] border border-stone-800 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-stone-900 border border-stone-800 flex items-center justify-center">
                        <Network size={32} className="text-stone-500" />
                    </div>
                    <div>
                        <p className="text-xs text-stone-500 uppercase tracking-widest mb-1">Ваша реферальная ссылка</p>
                        <p className="text-xl font-mono text-stone-200">evoluton.io/ref/k82js9a</p>
                    </div>
                </div>
                <button 
                    onClick={copyLink}
                    className="flex items-center gap-3 px-8 py-4 bg-stone-100 hover:bg-white text-stone-900 font-bold uppercase tracking-widest text-xs transition-all w-full md:w-auto justify-center"
                >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                    {copied ? 'Скопировано' : 'Копировать'}
                </button>
            </div>

            {/* Levels Gamification */}
            <div>
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-serif text-stone-200">Карьерная лестница</h3>
                    <div className="text-xs text-stone-500 uppercase tracking-widest flex items-center gap-2">
                        Ваш текущий оборот: <span className="text-white font-mono">$1,250</span>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {levels.map((lvl, idx) => (
                        <PartnerLevelCard key={lvl.level} level={lvl} isActive={idx === 0} />
                    ))}
                </div>
            </div>

            {/* Binary Tree Visual */}
            <div className="bg-[#080808] border border-stone-800 p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-stone-800 to-transparent"></div>
                <div className="text-center mb-12">
                    <h3 className="text-2xl font-serif text-stone-200 mb-2">Бинарная Структура</h3>
                    <p className="text-stone-500 font-light text-sm">Балансируйте ноги для максимального командного бонуса</p>
                </div>

                {/* Tree */}
                <div className="flex flex-col items-center relative z-10">
                    {/* Level 1 (You) */}
                    <div className="mb-12 relative">
                         <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center border-4 border-stone-800 shadow-2xl z-20 relative">
                             <span className="font-serif italic text-2xl text-black">You</span>
                         </div>
                         {/* Lines */}
                         <div className="absolute top-full left-1/2 -translate-x-1/2 w-[200px] h-12 border-t-2 border-l-2 border-r-2 border-stone-800 rounded-t-3xl -mt-2"></div>
                    </div>

                    {/* Level 2 */}
                    <div className="flex gap-24 md:gap-48 mb-12">
                        <BinaryNode active />
                        <BinaryNode active />
                    </div>

                    {/* Level 3 */}
                    <div className="flex gap-8 md:gap-20">
                         <div className="flex gap-8">
                            <BinaryNode active />
                            <BinaryNode />
                         </div>
                         <div className="flex gap-8">
                            <BinaryNode />
                            <BinaryNode />
                         </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto mt-16">
                    <div className="bg-[#050505] p-4 border border-stone-800 text-center">
                        <p className="text-[10px] text-stone-500 uppercase tracking-widest mb-1">Левая нога</p>
                        <p className="text-xl font-mono text-stone-200">$1,450</p>
                    </div>
                    <div className="bg-[#050505] p-4 border border-stone-800 text-center">
                        <p className="text-[10px] text-stone-500 uppercase tracking-widest mb-1">Правая нога</p>
                        <p className="text-xl font-mono text-stone-200">$8,200</p>
                    </div>
                </div>
            </div>

            {/* Rules */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="border-l-2 border-stone-800 pl-6">
                     <h4 className="text-stone-200 font-serif text-lg mb-2">Прямой бонус</h4>
                     <p className="text-stone-500 font-light text-sm">
                         Вы получаете <span className="text-white">8%</span> от депозита каждого партнера, зарегистрированного по вашей ссылке. Начисление происходит моментально на основной баланс.
                     </p>
                 </div>
                 <div className="border-l-2 border-stone-800 pl-6">
                     <h4 className="text-stone-200 font-serif text-lg mb-2">Бинарный бонус</h4>
                     <p className="text-stone-500 font-light text-sm">
                         Каждую неделю система подсчитывает объем в слабой ноге и начисляет от <span className="text-white">2% до 5%</span> в зависимости от вашего ранга.
                     </p>
                 </div>
            </div>
        </div>
    );
};

export default Partners;