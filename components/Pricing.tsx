import React from 'react';
import { Check, Star } from 'lucide-react';

interface Plan {
  name: string;
  subtitle: string;
  price: string;
  period: string;
  features: string[];
  popular: boolean;
  color: string;
  btnClass: string;
}

const plans: Plan[] = [
  {
    name: 'Видящий',
    subtitle: 'Начальный уровень',
    price: '2 990',
    period: '/мес',
    features: [
      'Базовые практики сталкинга',
      'Введение в осознанное сновидение',
      'Основы тенсегрити (10 форм)',
      'Доступ к библиотеке материалов',
      'Групповые онлайн-занятия',
    ],
    popular: false,
    color: '#a855f7',
    btnClass: 'btn-outline',
  },
  {
    name: 'Воин',
    subtitle: 'Продвинутый уровень',
    price: '5 990',
    period: '/мес',
    features: [
      'Всё из тарифа «Видящий»',
      'Продвинутый сталкинг сознания',
      'Техники перепросмотра',
      'Ноэтические практики',
      'Персональный куратор',
      'Закрытое сообщество практиков',
      'Ежемесячные ретриты онлайн',
    ],
    popular: true,
    color: '#ff2d78',
    btnClass: 'btn-primary',
  },
  {
    name: 'Нагваль',
    subtitle: 'Мастерский уровень',
    price: '12 990',
    period: '/мес',
    features: [
      'Всё из тарифа «Воин»',
      'Индивидуальные сессии с мастером',
      'Полная система магических пассов',
      'Работа с точкой сборки',
      'Нейротехнологии и биохакинг',
      'Офлайн-ретриты (2 раза в год)',
      'Пожизненный доступ к материалам',
      'Сертификат практика',
    ],
    popular: false,
    color: '#3b82f6',
    btnClass: 'btn-outline',
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#ff2d78] rounded-full filter blur-[250px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Выберите свой <span className="gradient-text">путь</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
            Три уровня погружения в учение — от первых шагов до мастерства
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`card rounded-2xl p-8 relative ${plan.popular ? 'pricing-popular md:-mt-4 md:mb-[-16px]' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#ff2d78] to-[#a855f7] text-white text-xs font-bold font-[var(--font-tech)] uppercase tracking-wider px-5 py-1.5 rounded-full flex items-center gap-1.5 shadow-[0_0_20px_rgba(255,45,120,0.3)]">
                  <Star size={12} fill="white" />
                  Популярный
                </div>
              )}

              <div className="text-center mb-8">
                <h3
                  className="text-xl font-bold font-[var(--font-tech)] uppercase tracking-wider mb-1"
                  style={{ color: plan.color }}
                >
                  {plan.name}
                </h3>
                <p className="text-sm text-[var(--text-muted)] mb-6">{plan.subtitle}</p>

                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl sm:text-5xl font-black text-white">{plan.price}</span>
                  <span className="text-[var(--text-muted)] text-lg">&#8381;{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <Check
                      size={16}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: plan.color }}
                    />
                    <span className="text-[var(--text-secondary)]">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`${plan.btnClass} w-full py-3.5 rounded-xl text-sm`}
              >
                Выбрать план
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
