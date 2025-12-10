import React from 'react';
import { BookOpen, Clock, Lock, ArrowRight, Bookmark } from 'lucide-react';

interface Article {
  id: string;
  category: string;
  title: string;
  desc: string;
  readTime: string;
  isPremium: boolean;
  image: string;
}

const Academy: React.FC = () => {
  const articles: Article[] = [
    {
      id: '1',
      category: 'Smart Money Insights',
      title: 'Макроэкономический прогноз на Q4 2024: Роль TON',
      desc: 'Глубокий анализ корреляции TVL экосистемы TON с глобальными индексами ликвидности. Закрытый отчет.',
      readTime: '12 мин',
      isPremium: true,
      image: 'from-stone-800 to-stone-900'
    },
    {
      id: '2',
      category: 'DeFi Basics',
      title: 'Что такое Impermanent Loss и как мы его избегаем',
      desc: 'Технический разбор механизмов хеджирования рисков в пулах ликвидности протокола EvoluTON.',
      readTime: '6 мин',
      isPremium: false,
      image: 'from-stone-900 to-black'
    },
    {
      id: '3',
      category: 'Insider',
      title: 'Арбитраж стейблкоинов: Секретные маршруты',
      desc: 'Как наш алгоритм находит разницу в курсах USDT на разных чейнах и извлекает безрисковую прибыль.',
      readTime: '8 мин',
      isPremium: true,
      image: 'from-stone-800 to-stone-700'
    },
    {
      id: '4',
      category: 'Ecosystem',
      title: 'Будущее The Open Network',
      desc: 'Обзор дорожной карты TON Foundation и влияние интеграции с Telegram на стоимость активов.',
      readTime: '5 мин',
      isPremium: false,
      image: 'from-stone-900 to-stone-800'
    }
  ];

  return (
    <div className="h-full p-6 md:p-10 overflow-y-auto pb-20">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col gap-4 border-b border-stone-800/50 pb-8">
            <h2 className="text-5xl font-serif italic text-stone-100">EvoluTON Academy</h2>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <p className="text-stone-500 font-light text-lg max-w-2xl">
                    Закрытая база знаний для инвесторов. Аналитика, инсайды и обучающие материалы от команды аналитиков EvoluTON.
                </p>
                <div className="flex gap-2">
                    {['All', 'Premium', 'Basics', 'Technical'].map((tag) => (
                         <button key={tag} className="px-4 py-1.5 rounded-full border border-stone-800 text-stone-500 text-xs uppercase hover:text-stone-200 hover:bg-stone-900 transition-colors">
                            {tag}
                         </button>
                    ))}
                </div>
            </div>
        </div>

        {/* Featured Article (Big Card) */}
        <div className="relative rounded-[32px] overflow-hidden bg-stone-900/20 border border-stone-800 group cursor-pointer h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
            {/* Abstract visual bg */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700"></div>
            
            <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 max-w-3xl">
                <div className="flex items-center gap-3 mb-4">
                    <span className="bg-emerald-900/40 text-emerald-400 border border-emerald-900/50 px-3 py-1 rounded text-[10px] uppercase tracking-widest font-bold">New Release</span>
                    <span className="text-stone-300 text-xs flex items-center gap-1"><Clock size={12}/> 15 мин чтение</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-serif text-white mb-4 leading-tight">Глобальный переход ликвидности: Почему институционалы выбирают TON?</h3>
                <p className="text-stone-300 font-light text-sm md:text-base line-clamp-2 mb-6">
                    В этом месяце мы наблюдали рекордный приток капитала в экосистему. Разбираем ончейн метрики и показываем, как это повлияет на доходность стратегии Infinity.
                </p>
                <div className="flex items-center gap-2 text-stone-100 text-xs uppercase tracking-widest font-bold group-hover:gap-4 transition-all">
                    Читать статью <ArrowRight size={14} />
                </div>
            </div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article) => (
                <div key={article.id} className="bg-[#0a0a0a] border border-stone-800 hover:border-stone-600 rounded-[24px] p-6 transition-all group flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${article.image} flex items-center justify-center border border-stone-800`}>
                            {article.isPremium ? <Lock size={18} className="text-stone-400"/> : <BookOpen size={18} className="text-stone-400"/>}
                        </div>
                        <div className="flex items-center gap-2">
                             {article.isPremium && (
                                 <span className="text-[10px] uppercase tracking-widest text-amber-500 font-bold px-2 py-1 bg-amber-900/10 rounded">Premium</span>
                             )}
                             <button className="text-stone-600 hover:text-stone-300 transition-colors"><Bookmark size={18}/></button>
                        </div>
                    </div>

                    <div className="mb-4 flex-1">
                        <p className="text-[10px] text-stone-500 uppercase tracking-widest mb-2">{article.category}</p>
                        <h4 className="text-2xl font-serif text-stone-200 mb-3 group-hover:text-white transition-colors">{article.title}</h4>
                        <p className="text-stone-500 text-sm font-light leading-relaxed line-clamp-3">
                            {article.desc}
                        </p>
                    </div>

                    <div className="pt-6 border-t border-stone-800 flex items-center justify-between text-xs text-stone-600">
                        <span className="flex items-center gap-1"><Clock size={12}/> {article.readTime}</span>
                        <span className="group-hover:text-stone-300 transition-colors uppercase tracking-widest font-bold cursor-pointer">Читать</span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Academy;