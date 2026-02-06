import React from 'react';
import { Search, Sparkles, Users, BookOpen } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background glows */}
      <div className="hero-glow w-[500px] h-[500px] bg-[#ff2d78] top-[-10%] right-[-5%]" />
      <div className="hero-glow w-[400px] h-[400px] bg-[#a855f7] bottom-[10%] left-[-10%]" />
      <div className="hero-glow w-[300px] h-[300px] bg-[#3b82f6] top-[30%] right-[20%] opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Раскрой силу{' '}
              <span className="gradient-text">осознания</span>
            </h1>
            <p className="text-lg sm:text-xl text-[var(--text-secondary)] mb-8 max-w-lg leading-relaxed">
              Курсы саморазвития на основе учения Дона Хуана, книг Карлоса Кастанеды,
              ноэтической науки и современных технологий расширения сознания.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#pricing" className="btn-primary px-8 py-3.5 rounded-xl text-sm flex items-center gap-2">
                <Sparkles size={18} />
                Начать обучение
              </a>
              <a href="#courses" className="btn-outline px-8 py-3.5 rounded-xl text-sm flex items-center gap-2">
                <Search size={18} />
                Смотреть курсы
              </a>
            </div>

            {/* Mini stats */}
            <div className="flex items-center gap-6 text-sm text-[var(--text-muted)]">
              <div className="flex items-center gap-2">
                <Users size={16} className="text-[var(--neon-pink)]" />
                <span>2,500+ учеников</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen size={16} className="text-[var(--neon-purple)]" />
                <span>12 курсов</span>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative flex items-center justify-center animate-float">
            {/* Mystic eye symbol */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-[var(--neon-purple)]/30 animate-spin" style={{ animationDuration: '20s' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[var(--neon-pink)] shadow-[0_0_10px_var(--neon-pink)]" />
              </div>
              {/* Middle ring */}
              <div className="absolute inset-8 rounded-full border border-[var(--neon-pink)]/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-[var(--neon-purple)] shadow-[0_0_8px_var(--neon-purple)]" />
              </div>
              {/* Inner glow */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-[#ff2d78]/10 to-[#a855f7]/10 border border-white/5 flex items-center justify-center backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#ff2d78] to-[#a855f7] flex items-center justify-center shadow-[0_0_40px_rgba(255,45,120,0.4)]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="w-10 h-10">
                      <path d="M12 5C5.636 8 2 12 2 12s3.636 4 10 7c6.364-3 10-7 10-7s-3.636-4-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] font-[var(--font-tech)] uppercase tracking-widest">
                    Путь<br/>знания
                  </p>
                </div>
              </div>

              {/* Floating particles */}
              <div className="absolute top-10 right-5 w-2 h-2 rounded-full bg-[var(--neon-pink)] opacity-60 animate-pulse" />
              <div className="absolute bottom-16 left-8 w-1.5 h-1.5 rounded-full bg-[var(--neon-purple)] opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/3 left-2 w-1 h-1 rounded-full bg-[var(--neon-blue)] opacity-40 animate-pulse" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden lg:flex justify-center mt-8">
          <div className="flex flex-col items-center gap-2 text-[var(--text-muted)] animate-bounce">
            <span className="text-xs uppercase tracking-widest">Узнать больше</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 4v12m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
