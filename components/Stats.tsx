import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, Clock, Flame } from 'lucide-react';

interface StatItem {
  icon: React.ReactNode;
  value: string;
  numericPart: string;
  suffix: string;
  label: string;
  sublabel: string;
  color: string;
  glowColor: string;
}

const stats: StatItem[] = [
  {
    icon: <BookOpen size={24} />,
    value: '12',
    numericPart: '12',
    suffix: '',
    label: 'Курсов',
    sublabel: 'Глубокие программы обучения',
    color: '#ff2d78',
    glowColor: 'rgba(255, 45, 120, 0.15)',
  },
  {
    icon: <Clock size={24} />,
    value: '200+',
    numericPart: '200',
    suffix: '+',
    label: 'Часов практики',
    sublabel: 'Авторские методики и техники',
    color: '#a855f7',
    glowColor: 'rgba(168, 85, 247, 0.15)',
  },
  {
    icon: <Flame size={24} />,
    value: '2.5K',
    numericPart: '2.5',
    suffix: 'K',
    label: 'Учеников',
    sublabel: 'Активное сообщество практиков',
    color: '#3b82f6',
    glowColor: 'rgba(59, 130, 246, 0.15)',
  },
];

const AnimatedNumber: React.FC<{ target: string; suffix: string; isVisible: boolean; color: string }> = ({
  target,
  suffix,
  isVisible,
  color,
}) => {
  const [current, setCurrent] = useState(0);
  const targetNum = parseFloat(target);
  const isDecimal = target.includes('.');

  useEffect(() => {
    if (!isVisible) return;
    let frame: number;
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(eased * targetNum);
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isVisible, targetNum]);

  const display = isDecimal ? current.toFixed(1) : Math.floor(current).toString();

  return (
    <span
      className="text-5xl sm:text-6xl font-black font-[var(--font-tech)]"
      style={{ color, textShadow: `0 0 20px ${color}40` }}
    >
      {display}
      <span className="text-3xl">{suffix}</span>
    </span>
  );
};

const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="card rounded-2xl p-8 text-center"
              style={{
                animationDelay: `${i * 0.2}s`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s ease ${i * 0.2}s`,
              }}
            >
              <div
                className="icon-circle mx-auto mb-5"
                style={{
                  borderColor: `${stat.color}40`,
                  background: stat.glowColor,
                  color: stat.color,
                }}
              >
                {stat.icon}
              </div>

              <div className="mb-2">
                <AnimatedNumber
                  target={stat.numericPart}
                  suffix={stat.suffix}
                  isVisible={isVisible}
                  color={stat.color}
                />
              </div>

              <h3 className="text-lg font-semibold text-white mb-1 font-[var(--font-tech)] uppercase tracking-wide">
                {stat.label}
              </h3>
              <p className="text-sm text-[var(--text-muted)]">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
