import React from 'react';
import { Eye, Moon, Wind, Brain } from 'lucide-react';

interface Course {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

const courses: Course[] = [
  {
    icon: <Eye size={28} />,
    title: 'Сталкинг сознания',
    description: 'Искусство контролируемого внимания и управления восприятием. Техники выслеживания собственных привычек и паттернов поведения.',
    color: '#ff2d78',
    bgColor: 'rgba(255, 45, 120, 0.1)',
  },
  {
    icon: <Moon size={28} />,
    title: 'Осознанное сновидение',
    description: 'Практики осознанных сновидений по методу Дона Хуана. Техники входа, удержания и использования состояния сна для саморазвития.',
    color: '#a855f7',
    bgColor: 'rgba(168, 85, 247, 0.1)',
  },
  {
    icon: <Wind size={28} />,
    title: 'Тенсегрити',
    description: 'Магические пассы древних видящих — система физических и энергетических упражнений для накопления и перераспределения жизненной силы.',
    color: '#3b82f6',
    bgColor: 'rgba(59, 130, 246, 0.1)',
  },
  {
    icon: <Brain size={28} />,
    title: 'Ноэтика и технологии',
    description: 'Наука о сознании: нейропластичность, медитативные практики, биохакинг и современные инструменты расширения осознанности.',
    color: '#06b6d4',
    bgColor: 'rgba(6, 182, 212, 0.1)',
  },
];

const Courses: React.FC = () => {
  return (
    <section id="courses" className="py-20 relative">
      {/* Section bg glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#a855f7] rounded-full filter blur-[200px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Направления <span className="gradient-text">обучения</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
            Четыре пути к трансформации сознания, объединяющие древнюю мудрость тольтеков
            и достижения современной науки
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, i) => (
            <div
              key={i}
              className="card rounded-2xl p-6 group cursor-pointer"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all group-hover:scale-110 group-hover:shadow-lg"
                style={{
                  background: course.bgColor,
                  color: course.color,
                  border: `1px solid ${course.color}30`,
                }}
              >
                {course.icon}
              </div>

              <h3
                className="text-base font-bold mb-3 font-[var(--font-tech)] uppercase tracking-wide"
                style={{ color: course.color }}
              >
                {course.title}
              </h3>

              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                {course.description}
              </p>

              <div className="mt-5 flex items-center gap-2 text-sm font-medium transition-colors group-hover:text-white" style={{ color: `${course.color}99` }}>
                <span>Подробнее</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
