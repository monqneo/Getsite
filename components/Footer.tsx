import React from 'react';
import { Eye, Send, MessageCircle, Youtube, BookOpen } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const columns = [
    {
      title: 'Курсы',
      links: [
        { label: 'Сталкинг сознания', href: '#courses' },
        { label: 'Осознанное сновидение', href: '#courses' },
        { label: 'Тенсегрити', href: '#courses' },
        { label: 'Ноэтика', href: '#courses' },
      ],
    },
    {
      title: 'Практики',
      links: [
        { label: 'Перепросмотр', href: '#features' },
        { label: 'Магические пассы', href: '#features' },
        { label: 'Точка сборки', href: '#features' },
        { label: 'Путь воина', href: '#features' },
      ],
    },
    {
      title: 'Ресурсы',
      links: [
        { label: 'Библиотека', href: '#' },
        { label: 'Блог', href: '#' },
        { label: 'Подкаст', href: '#' },
        { label: 'FAQ', href: '#' },
      ],
    },
  ];

  const socials = [
    { icon: <Send size={18} />, label: 'Telegram', href: '#' },
    { icon: <Youtube size={18} />, label: 'YouTube', href: '#' },
    { icon: <MessageCircle size={18} />, label: 'VK', href: '#' },
    { icon: <BookOpen size={18} />, label: 'Дзен', href: '#' },
  ];

  return (
    <footer id="footer" className="border-t border-white/5 bg-[#060610]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff2d78] to-[#a855f7] flex items-center justify-center">
                <Eye size={20} className="text-white" />
              </div>
              <span className="font-[var(--font-tech)] text-xl font-bold tracking-wider">
                <span className="text-white">Нагва</span>
                <span className="text-neon-pink">Лаб</span>
              </span>
            </div>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6 max-w-sm">
              Курсы саморазвития на основе учения Дона Хуана, книг Карлоса Кастанеды,
              ноэтической науки и современных технологий осознания.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--neon-pink)] hover:border-[var(--neon-pink)]/30 hover:bg-[var(--neon-pink)]/5 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col, i) => (
            <div key={i}>
              <h4 className="text-sm font-bold font-[var(--font-tech)] uppercase tracking-wider text-white mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      className="text-sm text-[var(--text-muted)] hover:text-[var(--neon-pink)] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-muted)]">
            &copy; {currentYear} НагваЛаб. Все права защищены.
          </p>
          <div className="flex gap-6 text-xs text-[var(--text-muted)]">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
