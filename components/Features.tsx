import React from 'react';
import { Shield, Zap, Globe, HeartPulse, Compass, Layers } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Shield size={22} />,
    title: 'Путь Воина',
    description: 'Дисциплина и безупречность как основа трансформации. Практики ежедневной работы над собой по системе тольтеков.',
  },
  {
    icon: <Zap size={22} />,
    title: 'Энергетическое тело',
    description: 'Работа с энергетическими центрами, техники перепросмотра и восстановление утраченной жизненной силы.',
  },
  {
    icon: <Globe size={22} />,
    title: 'Точка сборки',
    description: 'Понимание механизма восприятия реальности. Практики смещения точки сборки для доступа к новым мирам.',
  },
  {
    icon: <HeartPulse size={22} />,
    title: 'Нейронаука осознания',
    description: 'Научный подход к медитации, нейропластичность мозга и доказательная база ноэтических практик.',
  },
  {
    icon: <Compass size={22} />,
    title: 'Навигация в неизвестном',
    description: 'Умение действовать в условиях неопределённости. Развитие интуиции и связи с намерением.',
  },
  {
    icon: <Layers size={22} />,
    title: 'Интеграция практик',
    description: 'Синтез древних знаний тольтеков с современными технологиями осознанности и биохакинга.',
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 relative">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#ff2d78] rounded-full filter blur-[200px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Чему вы <span className="gradient-text">научитесь</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
            Ключевые навыки и знания, которые вы получите на пути воина знания
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="card rounded-2xl p-6 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff2d78]/10 to-[#a855f7]/10 border border-[#a855f7]/20 flex items-center justify-center flex-shrink-0 text-[var(--neon-purple)] group-hover:text-[var(--neon-pink)] group-hover:border-[var(--neon-pink)]/30 transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold font-[var(--font-tech)] uppercase tracking-wide mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
