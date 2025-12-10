import React from 'react';
import { Vote, CheckCircle2, AlertCircle, Users, Scale } from 'lucide-react';

const Governance: React.FC = () => {
  const proposals = [
    {
      id: 1,
      title: 'EIP-24: Интеграция пулов ликвидности NOT/USDT',
      status: 'Active',
      votesFor: '840k EVO',
      votesAgainst: '12k EVO',
      timeLeft: '14ч 30мин',
      description: 'Добавление новой пары для стратегии арбитража. Ожидаемый прирост доходности фонда +0.2% в месяц.',
      tag: 'Liquidity'
    },
    {
      id: 2,
      title: 'EIP-23: Увеличение доли Buyback на 5%',
      status: 'Passed',
      votesFor: '1.2M EVO',
      votesAgainst: '45k EVO',
      timeLeft: 'Завершено',
      description: 'Направлять 15% прибыли протокола на выкуп и сжигание токена управления.',
      tag: 'Tokenomics'
    }
  ];

  return (
    <div className="h-full p-6 md:p-10 overflow-y-auto pb-20">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="flex items-end justify-between border-b border-stone-800/50 pb-6">
           <div>
               <h2 className="text-5xl font-serif italic text-stone-100 mb-2">DAO Governance</h2>
               <p className="text-stone-500 font-light">Управляйте будущим протокола. Ваш голос имеет вес.</p>
           </div>
           <div className="hidden md:flex items-center gap-4 bg-[#1c1917] px-6 py-3 rounded-full border border-stone-800">
               <Scale size={20} className="text-stone-400" />
               <div className="text-right">
                   <p className="text-[10px] text-stone-500 uppercase tracking-widest">Ваша сила голоса</p>
                   <p className="text-lg font-serif text-white">0.00 vEVO</p>
               </div>
           </div>
        </div>

        {/* Voting Grid */}
        <div className="grid gap-6">
            {proposals.map(prop => (
                <div key={prop.id} className="bg-[#1c1917] border border-stone-800 rounded-[24px] p-8 relative overflow-hidden group hover:border-stone-600 transition-colors">
                    <div className="absolute top-0 right-0 p-4">
                        <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${
                            prop.status === 'Active' 
                            ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/30 animate-pulse' 
                            : 'bg-stone-800 text-stone-500 border-stone-700'
                        }`}>
                            {prop.status}
                        </span>
                    </div>

                    <div className="mb-6 max-w-2xl">
                        <div className="flex items-center gap-2 mb-2 text-xs text-stone-500 uppercase tracking-widest">
                            <span>#{prop.id}</span>
                            <span>•</span>
                            <span>{prop.tag}</span>
                        </div>
                        <h3 className="text-2xl font-serif text-stone-200 mb-3">{prop.title}</h3>
                        <p className="text-stone-400 font-light text-sm leading-relaxed">{prop.description}</p>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-2 mb-6">
                        <div className="flex justify-between text-xs">
                            <span className="text-emerald-500 font-bold flex items-center gap-1"><CheckCircle2 size={12}/> За: {prop.votesFor}</span>
                            <span className="text-red-500 font-bold flex items-center gap-1"><AlertCircle size={12}/> Против: {prop.votesAgainst}</span>
                        </div>
                        <div className="w-full h-2 bg-stone-800 rounded-full overflow-hidden flex">
                             <div className="h-full bg-emerald-500/80 w-[95%]"></div>
                             <div className="h-full bg-red-500/80 w-[5%]"></div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-stone-800 pt-6">
                        <div className="text-xs text-stone-500 flex items-center gap-2">
                            <Users size={14} />
                            <span>Кворум достигнут</span>
                        </div>
                        
                        {prop.status === 'Active' ? (
                            <div className="flex gap-3">
                                <button className="px-6 py-2 border border-stone-700 hover:border-emerald-500 hover:text-emerald-400 text-stone-400 text-xs uppercase font-bold tracking-widest rounded-lg transition-colors">
                                    Голосовать ЗА
                                </button>
                                <button className="px-6 py-2 border border-stone-700 hover:border-red-500 hover:text-red-400 text-stone-400 text-xs uppercase font-bold tracking-widest rounded-lg transition-colors">
                                    Против
                                </button>
                            </div>
                        ) : (
                            <span className="text-xs text-stone-600 uppercase tracking-widest">Голосование закрыто</span>
                        )}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Governance;