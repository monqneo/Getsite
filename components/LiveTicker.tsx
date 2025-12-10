import React from 'react';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';

const events = [
  { user: 'User 82**91', action: 'deposit', amount: '$5,000', method: 'USDT' },
  { user: 'Alex_K', action: 'withdraw', amount: '$450', method: 'TON' },
  { user: 'Whale_0x', action: 'deposit', amount: '$25,000', method: 'Premium Strategy' },
  { user: 'Elena.V', action: 'partner', amount: '$120', method: 'Referral Bonus' },
  { user: 'User 11**22', action: 'deposit', amount: '$1,200', method: 'Start' },
  { user: 'Satoshi_N', action: 'withdraw', amount: '$2,300', method: 'USDT' },
  { user: 'User 99**00', action: 'deposit', amount: '$10,000', method: 'Infinity' },
  { user: 'CryptoDave', action: 'deposit', amount: '$500', method: 'Bond Purchase' },
];

const LiveTicker: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#0a0a0a] border-t border-stone-800 h-10 flex items-center z-50 overflow-hidden select-none">
      <div className="flex animate-scroll whitespace-nowrap">
        {[...events, ...events, ...events].map((evt, i) => (
          <div key={i} className="flex items-center gap-2 px-6 border-r border-stone-800/50 text-[10px] uppercase tracking-wider font-mono">
            <span className="text-stone-500">{evt.user}</span>
            <span className={evt.action === 'deposit' ? 'text-emerald-500' : 'text-stone-300'}>
              {evt.action === 'deposit' ? 'invested' : evt.action === 'partner' ? 'earned' : 'withdrew'}
            </span>
            <span className="text-stone-200 font-bold">{evt.amount}</span>
            <span className="text-stone-600 opacity-60">via {evt.method}</span>
            {evt.action === 'deposit' ? <ArrowUpRight size={10} className="text-emerald-500"/> : <ArrowDownLeft size={10} className="text-stone-500"/>}
          </div>
        ))}
      </div>
      <style>{`
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
};

export default LiveTicker;