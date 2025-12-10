import React from 'react';
import { LayoutDashboard, Briefcase, Coins, Gem, X, Wallet, TrendingUp, Home, Network, Calculator, BookOpen, ShieldCheck, Scale, MessagesSquare, Zap } from 'lucide-react';
import { AppView } from '../types';

interface SidebarProps {
  currentView: AppView;
  onChangeView: (view: AppView) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onChangeView, isOpen, setIsOpen }) => {
  
  const navItems = [
    { id: AppView.HOME, label: 'Protocol', icon: <Home size={18} /> },
    { id: AppView.DASHBOARD, label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
    { id: AppView.TARIFFS, label: 'Invest', icon: <Briefcase size={18} /> },
    { id: AppView.CALCULATOR, label: 'Simulator', icon: <Calculator size={18} /> },
    { id: AppView.ACADEMY, label: 'Academy', icon: <BookOpen size={18} /> },
    { id: AppView.PARTNERS, label: 'Network', icon: <Network size={18} /> },
    { id: AppView.STAKE, label: 'Staking', icon: <Coins size={18} /> },
    { id: AppView.BOND, label: 'Bonds', icon: <TrendingUp size={18} /> },
    { id: AppView.NFT, label: 'Access Passes', icon: <Gem size={18} /> },
    { id: AppView.GOVERNANCE, label: 'DAO Vote', icon: <Scale size={18} /> },
  ];

  const handleNavClick = (view: AppView) => {
    onChangeView(view);
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-20 md:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-black/50 backdrop-blur-xl border-r border-[var(--neon-purple)]/20 z-30 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static flex flex-col py-6 pl-4 pr-2
        shadow-[5px_0_30px_rgba(0,0,0,0.5)]
      `}>
        {/* Header */}
        <div className="px-4 mb-12 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-8 h-8 flex items-center justify-center border border-[var(--neon-cyan)] bg-[rgba(0,247,255,0.1)] rounded-sm transform rotate-45 group-hover:rotate-0 transition-transform duration-500">
               <span className="font-[var(--font-tech)] text-[var(--neon-cyan)] font-bold text-lg -rotate-45 group-hover:rotate-0 transition-transform duration-500">E</span>
            </div>
            <h1 className="text-xl text-[var(--text-primary)] tracking-widest font-[var(--font-tech)] uppercase group-hover:text-shadow-[0_0_10px_var(--neon-cyan)] transition-all">
              EvoluTON
            </h1>
          </div>
          <button onClick={() => setIsOpen(false)} className="md:hidden text-[var(--text-secondary)] hover:text-white">
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2 overflow-y-auto pr-2 custom-scrollbar">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`
                w-full flex items-center gap-4 px-4 py-3 transition-all duration-300 group relative overflow-hidden rounded-r-lg
                ${currentView === item.id 
                  ? 'text-[var(--neon-cyan)] bg-[rgba(0,247,255,0.05)] border-l-2 border-[var(--neon-cyan)] shadow-[inset_10px_0_20px_rgba(0,247,255,0.1)]' 
                  : 'text-[var(--text-secondary)] hover:text-white hover:bg-white/5 border-l-2 border-transparent'}
              `}
            >
              <span className={`transition-colors duration-300 ${currentView === item.id ? 'text-[var(--neon-cyan)] drop-shadow-[0_0_5px_rgba(0,247,255,0.8)]' : 'group-hover:text-[var(--neon-purple)]'}`}>
                {item.icon}
              </span>
              <span className="font-[var(--font-tech)] text-xs uppercase tracking-widest font-bold">{item.label}</span>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--neon-purple)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none transform -translate-x-full group-hover:translate-x-0 duration-500" />
            </button>
          ))}
          
          {/* Concierge Link */}
          <button className="w-full flex items-center gap-4 px-4 py-3.5 text-[var(--text-secondary)] hover:text-[var(--neon-pink)] hover:bg-white/5 border-l-2 border-transparent transition-all mt-4 group">
             <MessagesSquare size={18} className="group-hover:text-[var(--neon-pink)] group-hover:drop-shadow-[0_0_5px_var(--neon-pink)]" />
             <span className="font-[var(--font-tech)] text-xs uppercase tracking-widest">Concierge AI</span>
          </button>
        </nav>

        {/* User Status Mock */}
        <div className="px-2 mt-auto space-y-4">
           {/* Security Badge */}
           <div className="flex items-center gap-3 px-4 py-2 border border-[var(--neon-cyan)]/30 bg-[rgba(0,247,255,0.05)] rounded-lg cursor-pointer hover:bg-[rgba(0,247,255,0.1)] transition-colors">
               <ShieldCheck size={16} className="text-[var(--neon-cyan)]" />
               <div>
                   <p className="text-[10px] text-[var(--text-secondary)] uppercase font-bold tracking-widest">Security Score</p>
                   <p className="text-xs text-[var(--neon-cyan)] font-mono drop-shadow-[0_0_5px_rgba(0,247,255,0.5)]">98/100 CertiK</p>
               </div>
           </div>

           <div className="web3-card p-5 border border-[var(--neon-purple)]/30 !bg-[rgba(157,0,255,0.05)]">
              <div className="flex justify-between items-center mb-3">
                 <div className="flex flex-col">
                    <span className="text-[10px] text-[var(--text-muted)] uppercase">Status</span>
                    <span className="text-sm text-white font-[var(--font-tech)] italic">Director</span>
                 </div>
                 <div className="h-2 w-2 bg-[var(--neon-pink)] rounded-full animate-pulse shadow-[0_0_10px_var(--neon-pink)]"></div>
              </div>
              
              <button className="w-full btn-web3 py-3 text-xs flex items-center justify-center gap-2">
                <Zap size={14} />
                Connect Wallet
              </button>
           </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;