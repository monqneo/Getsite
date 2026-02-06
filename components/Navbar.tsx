import React, { useState } from 'react';
import { Eye, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: 'Главная', href: '#hero' },
    { label: 'О нас', href: '#about' },
    { label: 'Курсы', href: '#courses' },
    { label: 'Практики', href: '#features' },
    { label: 'Тарифы', href: '#pricing' },
    { label: 'Контакты', href: '#footer' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080812]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff2d78] to-[#a855f7] flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_rgba(255,45,120,0.5)] transition-shadow">
              <Eye size={20} className="text-white" />
            </div>
            <span className="font-[var(--font-tech)] text-lg md:text-xl font-bold tracking-wider">
              <span className="text-white">Нагва</span>
              <span className="text-neon-pink">Лаб</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-sm text-[var(--text-secondary)] hover:text-[var(--neon-pink)] font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <a
              href="#pricing"
              className="btn-primary px-6 py-2.5 rounded-lg text-sm inline-block"
            >
              Начать путь
            </a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-[var(--neon-pink)] transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 border-t border-white/5 mt-2 pt-4">
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[var(--text-secondary)] hover:text-[var(--neon-pink)] font-medium transition-colors pl-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#pricing"
                onClick={() => setIsOpen(false)}
                className="btn-primary px-6 py-2.5 rounded-lg text-sm text-center mt-2"
              >
                Начать путь
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
