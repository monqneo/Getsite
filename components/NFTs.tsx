import React from 'react';
import { Gem, Crown, Shield, Check, Star, Sparkles, Fingerprint } from 'lucide-react';

interface TierProps {
  name: string;
  price: string;
  supply: string;
  benefits: string[];
  gradient: string;
  accent: string;
  icon: React.ReactNode;
  isPopular?: boolean;
}

const NFTCard: React.FC<TierProps> = ({ name, price, supply, benefits, gradient, accent, icon, isPopular }) => {
  return (
    <div className="relative group w-full max-w-sm mx-auto">
      {/* Glow Effect behind card */}
      <div className={`absolute inset-0 bg-gradient-to-r ${accent} rounded-[32px] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />

      <div className={`
        relative overflow-hidden rounded-[32px] p-8 h-full border border-white/10
        backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2
        bg-gradient-to-br ${gradient} shadow-2xl
      `}>
         {/* Decorative Shine */}
         <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 blur-[60px] rounded-full pointer-events-none" />
         <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-black/20 blur-[60px] rounded-full pointer-events-none" />
         
         {/* Noise Texture Overlay */}
         <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

         {isPopular && (
             <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border-b border-l border-r border-white/10 px-4 py-1 rounded-b-xl text-[10px] uppercase font-bold tracking-widest text-white z-20">
                 Most Popular
             </div>
         )}

         <div className="relative z-10 flex flex-col h-full">
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-white/5 rounded-2xl backdrop-blur-md border border-white/10 shadow-inner">
                    {icon}
                </div>
                <div className="text-right">
                    <div className="flex items-center justify-end gap-1 opacity-60 mb-1">
                        <Fingerprint size={12} />
                        <p className="text-[10px] uppercase tracking-widest font-medium">EvoluTON Pass</p>
                    </div>
                    <h3 className="text-2xl font-serif italic text-white tracking-wide">{name}</h3>
                </div>
            </div>

            {/* Benefits List */}
            <div className="space-y-5 mb-10 flex-1">
                {benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-stone-200/90 font-light">
                        <div className="mt-1 shrink-0 w-4 h-4 rounded-full bg-white/10 flex items-center justify-center">
                            <Check size={10} className="text-white" />
                        </div>
                        <span className="leading-tight">{b}</span>
                    </div>
                ))}
            </div>

            {/* Footer / Price */}
            <div className="mt-auto pt-6 border-t border-white/10">
                <div className="flex justify-between items-end mb-4">
                    <div>
                        <p className="text-[10px] uppercase tracking-wider opacity-60 text-stone-300">Mint Price</p>
                        <p className="font-serif text-2xl text-white">{price}</p>
                    </div>
                    <div className="text-right">
                         <p className="text-[10px] uppercase tracking-wider opacity-60 text-stone-300">Supply</p>
                         <p className="font-serif text-lg text-stone-300">{supply}</p>
                    </div>
                </div>
                
                <button className="w-full py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-xs font-bold uppercase tracking-widest transition-all backdrop-blur-md text-white flex items-center justify-center gap-2 group-active:scale-95">
                    <Sparkles size={14} />
                    Mint Access
                </button>
            </div>
         </div>
      </div>
    </div>
  );
};

const NFTs: React.FC = () => {
  const tiers: TierProps[] = [
      {
          name: 'Silver Syndicate',
          price: '500 TON',
          supply: '2,500 / 5,000',
          gradient: 'from-stone-800 via-stone-700 to-stone-800',
          accent: 'from-stone-500 to-gray-200',
          icon: <Shield className="text-stone-300" size={24} />,
          benefits: [
              'Доступ к стратегиям "Start" и "Business"',
              '+2% к базовой ставке стейкинга',
              'Доступ в закрытый Discord канал',
              'Приоритетная поддержка 24/7'
          ]
      },
      {
          name: 'Gold Sovereign',
          price: '2,500 TON',
          supply: '840 / 1,000',
          gradient: 'from-yellow-950 via-amber-900 to-yellow-950',
          accent: 'from-amber-500 to-yellow-200',
          icon: <Crown className="text-amber-200" size={24} />,
          isPopular: true,
          benefits: [
              'Все привилегии Silver',
              'Открывает стратегии "Premium" (MEV)',
              'Аллокации в Private Round (до $5k)',
              'Голосование в DAO (x5 вес голоса)',
              'Личный менеджер'
          ]
      },
      {
          name: 'Platinum Elite',
          price: '10,000 TON',
          supply: '42 / 100',
          gradient: 'from-slate-950 via-indigo-950 to-slate-900',
          accent: 'from-indigo-500 to-purple-200',
          icon: <Gem className="text-indigo-200" size={24} />,
          benefits: [
              'Полный доступ ко всем стратегиям',
              'Безлимитные аллокации в Seed раундах',
              'Вечный стейкинг (Стратегия Infinity)',
              'Консьерж-сервис и оффлайн ивенты',
              'Доля от комиссий протокола'
          ]
      }
  ];

  return (
    <div className="h-full p-6 md:p-10 overflow-y-auto">
        <div className="max-w-7xl mx-auto space-y-12">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-800/50">
                 <div className="space-y-4 max-w-2xl">
                    <h2 className="text-5xl font-serif italic text-stone-100">Привилегии</h2>
                    <p className="text-stone-400 font-light text-lg">
                        NFT-карты EvoluTON — это не просто картинки. Это ключ доступа к институциональным возможностям протокола, закрытому комьюнити и управлению DAO.
                    </p>
                 </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8">
                {tiers.map((tier) => (
                    <NFTCard key={tier.name} {...tier} />
                ))}
            </div>

            {/* Bottom Info */}
            <div className="bg-[#1c1917] border border-stone-800 rounded-[32px] p-8 md:p-12 relative overflow-hidden text-center mt-12">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-stone-800/20 blur-[100px] rounded-full pointer-events-none" />
                 
                 <div className="relative z-10 space-y-6">
                     <Gem size={48} className="mx-auto text-stone-600 mb-4" />
                     <h3 className="text-3xl font-serif text-stone-200 italic">Вторичный Рынок</h3>
                     <p className="text-stone-500 max-w-xl mx-auto font-light">
                         Карты доступа можно свободно продавать и покупать на GetGems. 
                         Владение картой проверяется смарт-контрактом автоматически при подключении кошелька.
                     </p>
                     <div className="flex justify-center gap-4 pt-4">
                         <button className="px-8 py-3 bg-stone-100 hover:bg-white text-stone-900 rounded-full font-bold uppercase tracking-widest text-xs transition-all">
                             Купить на GetGems
                         </button>
                     </div>
                 </div>
            </div>
        </div>
    </div>
  );
};

export default NFTs;