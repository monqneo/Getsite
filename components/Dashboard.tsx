import React, { useState, useEffect } from 'react';
import { TrendingUp, Activity, Users, Wallet, ArrowUpRight, ArrowDownLeft, Calendar, ShieldCheck, Terminal, BrainCircuit } from 'lucide-react';
import { Transaction } from '../types';
import { getAiMarketInsight } from '../services/geminiService';

const StatCard = ({ title, value, subtext, icon, neonColor = "var(--neon-cyan)" }: any) => (
  <div className="web3-card p-6 rounded-[20px] group">
    <div className="flex items-start justify-between mb-8">
      <div 
        className="p-3 rounded-lg bg-white/5 text-white border border-white/10 group-hover:border-[color:var(--neon-color)] group-hover:text-[color:var(--neon-color)] group-hover:shadow-[0_0_15px_var(--neon-color)] transition-all duration-300" 
        style={{ '--neon-color': neonColor } as React.CSSProperties}
      >
        {icon}
      </div>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--text-secondary)]">
         <ArrowUpRight size={20} />
      </div>
    </div>
    <div className="space-y-1">
      <h3 className="text-[var(--text-secondary)] text-[10px] font-bold uppercase tracking-widest font-[var(--font-tech)]">{title}</h3>
      <p className="text-3xl font-[var(--font-tech)] text-white tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">{value}</p>
      {subtext && <p className="text-sm text-[var(--text-muted)] font-light mt-2">{subtext}</p>}
    </div>
  </div>
);

// New Component: Live Strategy Terminal
const StrategyTerminal = () => {
    const [logs, setLogs] = useState([
        { time: '14:02', pair: 'TON/USDT', dex: 'DeDust', profit: '+0.45%', type: 'Arbitrage' },
        { time: '13:58', pair: 'NOT/TON', dex: 'Ston.fi', profit: '+0.32%', type: 'Liquidity' },
        { time: '13:45', pair: 'USDT/USDC', dex: 'Megaton', profit: '+0.11%', type: 'Stable Swap' },
    ]);

    return (
        <div className="web3-card rounded-[24px] overflow-hidden h-full flex flex-col !border-[var(--neon-cyan)]/20 !bg-black/40">
            <div className="p-4 border-b border-[var(--neon-cyan)]/20 bg-[var(--neon-cyan)]/5 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <Terminal size={16} className="text-[var(--neon-cyan)]" />
                    <span className="text-[var(--neon-cyan)] font-[var(--font-tech)] text-xs uppercase tracking-widest shadow-[0_0_10px_var(--neon-cyan)]">Live Strategy Core</span>
                </div>
                <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-[var(--neon-cyan)] animate-pulse shadow-[0_0_10px_var(--neon-cyan)]"></div>
                </div>
            </div>
            <div className="p-5 font-mono text-xs space-y-3 overflow-hidden relative text-[var(--text-secondary)]">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none h-20 bottom-0 z-10"/>
                {logs.map((log, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 hover:bg-white/5 px-2 transition-colors">
                        <span className="text-[var(--text-muted)]">[{log.time}]</span>
                        <span className="text-white">{log.type}</span>
                        <span className="text-[var(--neon-purple)]">{log.pair} @ {log.dex}</span>
                        <span className="text-[var(--neon-cyan)] shadow-[0_0_5px_var(--neon-cyan)]">{log.profit}</span>
                    </div>
                ))}
                <div className="text-[var(--neon-cyan)] animate-pulse pt-2 flex items-center gap-2">
                    <span className="animate-spin">|</span> Processing next block...
                </div>
            </div>
        </div>
    );
};

const TransactionRow: React.FC<{ tx: Transaction }> = ({ tx }) => {
    const isIncome = tx.type === 'accrual' || tx.type === 'referral';
    const isDeposit = tx.type === 'deposit';
    
    return (
        <div className="flex items-center justify-between p-4 bg-transparent hover:bg-white/5 rounded-2xl transition-all group border-b border-white/5 last:border-0">
            <div className="flex items-center gap-5">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border backdrop-blur-md ${
                    isIncome ? 'bg-[var(--neon-cyan)]/10 border-[var(--neon-cyan)]/30 text-[var(--neon-cyan)]' : 
                    isDeposit ? 'bg-white/5 border-white/10 text-white' : 'bg-[var(--neon-pink)]/10 border-[var(--neon-pink)]/30 text-[var(--neon-pink)]'
                }`}>
                    {isIncome ? <ArrowDownLeft size={16} /> : <ArrowUpRight size={16} />}
                </div>
                <div>
                    <p className="text-sm font-medium text-white group-hover:text-[var(--neon-cyan)] transition-colors font-[var(--font-tech)]">
                        {tx.type === 'accrual' ? 'Dividends' :
                         tx.type === 'deposit' ? 'Portfolio Top-up' :
                         tx.type === 'referral' ? 'Referral Bonus' : 'Withdrawal'}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] font-mono">{tx.date}</p>
                </div>
            </div>
            <div className="text-right">
                <p className={`font-[var(--font-tech)] text-lg ${isIncome ? 'text-[var(--neon-cyan)] drop-shadow-[0_0_5px_rgba(0,247,255,0.5)]' : 'text-white'}`}>
                    {isIncome ? '+' : ''}{tx.amount.toFixed(2)}
                </p>
                <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">USD</p>
            </div>
        </div>
    );
};

const Dashboard: React.FC = () => {
  const [marketInsight, setMarketInsight] = useState("AI Neural Net Scanning...");

  useEffect(() => {
    getAiMarketInsight().then(setMarketInsight);
  }, []);

  // Mock Data
  const stats = {
      balance: 1450.50,
      invested: 5000.00,
      earned: 890.25,
      partners: 12,
      activeDeposits: 2
  };

  const transactions: Transaction[] = [
      { id: '1', type: 'accrual', amount: 45.00, date: 'Today, 12:00', status: 'completed', description: 'Business Growth' },
      { id: '2', type: 'referral', amount: 15.50, date: 'Today, 10:45', status: 'completed', description: 'Referral Lvl 1' },
      { id: '3', type: 'accrual', amount: 45.00, date: 'Yesterday, 12:00', status: 'completed', description: 'Business Growth' },
      { id: '4', type: 'deposit', amount: 5000.00, date: '12 Oct, 14:20', status: 'completed', description: 'Start' },
  ];

  return (
    <div className="h-full overflow-y-auto p-6 md:p-10 space-y-10 scroll-smooth pb-24">
      
      {/* Welcome Section & AI Sentiment */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-2 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl gradient-text mb-2">Portfolio Overview</h2>
            <p className="text-[var(--text-secondary)] font-light text-lg">
                <span className="text-[var(--neon-cyan)]">●</span> System Online. Next accrual cycle in <span className="font-mono text-white">04:00:00</span>
            </p>
          </div>
          
          {/* Market Sentiment Widget */}
          <div className="web3-card !border-[var(--neon-purple)]/30 rounded-2xl p-4 flex gap-4 items-center">
             <div className="shrink-0 p-3 bg-[var(--neon-purple)]/10 rounded-full border border-[var(--neon-purple)]/30 animate-pulse-glow">
                 <BrainCircuit className="text-[var(--neon-purple)]" size={24} />
             </div>
             <div>
                 <p className="text-[10px] text-[var(--neon-purple)] uppercase tracking-widest font-bold mb-1 font-[var(--font-tech)]">AI Market Sentiment</p>
                 <p className="text-xs text-white font-light leading-relaxed font-mono">
                     "{marketInsight}"
                 </p>
             </div>
          </div>
      </div>

      {/* Actions */}
      <div className="flex gap-4 border-b border-white/10 pb-8">
            <button className="btn-web3-primary px-10 py-4 rounded-xl font-bold text-sm transition-all active:scale-95 uppercase tracking-wider">
                Deposit Funds
            </button>
            <button className="btn-web3 px-10 py-4 rounded-xl font-bold text-sm transition-all border active:scale-95 uppercase tracking-wider">
                Withdraw
            </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Total Balance" 
          value={`$${stats.balance.toFixed(2)}`} 
          icon={<Wallet size={20} />}
          neonColor="var(--neon-cyan)"
        />
        <StatCard 
          title="Active Staking" 
          value={`$${stats.invested.toFixed(2)}`} 
          subtext={`${stats.activeDeposits} active strategies`}
          icon={<Activity size={20} />} 
          neonColor="var(--neon-purple)"
        />
        <StatCard 
          title="Net Profit" 
          value={`$${stats.earned.toFixed(2)}`} 
          subtext="+12% this month"
          icon={<TrendingUp size={20} />} 
          neonColor="var(--neon-pink)"
        />
        <StatCard 
          title="Network" 
          value={stats.partners} 
          subtext="Gold Status"
          icon={<Users size={20} />} 
          neonColor="#fbbf24"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
            
            {/* Proof of Yield / Strategy Terminal */}
            <StrategyTerminal />

            {/* Transaction History */}
            <div className="space-y-6">
                <div className="flex items-center justify-between px-2">
                    <h3 className="text-2xl text-white font-[var(--font-tech)] tracking-widest uppercase">Tx History</h3>
                    <button className="text-xs text-[var(--neon-cyan)] hover:text-white uppercase tracking-widest border-b border-[var(--neon-cyan)]/50 hover:border-white transition-colors pb-0.5">View Explorer</button>
                </div>
                <div className="web3-card rounded-[32px] p-2">
                    {transactions.map(tx => (
                        <TransactionRow key={tx.id} tx={tx} />
                    ))}
                </div>
            </div>
        </div>

        {/* Right Column (Side Widgets) */}
        <div className="space-y-6">
             
             {/* SAFU / Treasury Card */}
             <div className="web3-card rounded-[32px] p-8 relative overflow-hidden group !border-[var(--neon-cyan)]/20">
                 <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-cyan)]/10 to-transparent opacity-50" />
                 <div className="absolute top-0 right-0 p-6 opacity-20 text-[var(--neon-cyan)] group-hover:scale-110 transition-transform duration-700">
                     <ShieldCheck size={120} />
                 </div>
                 
                 <div className="relative z-10">
                     <h3 className="text-[var(--neon-cyan)] text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2 font-[var(--font-tech)]">
                        <ShieldCheck size={14} /> SAFU Insurance
                     </h3>
                     <p className="text-3xl font-[var(--font-tech)] text-white mb-4 drop-shadow-[0_0_10px_rgba(0,247,255,0.5)]">$4,291,040</p>
                     <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed">
                         Protocol insurance fund. 5% of yield is automatically bridged to cold storage.
                     </p>
                 </div>
             </div>

             {/* Referral Widget */}
             <div className="web3-card rounded-[32px] p-8 relative overflow-hidden group">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-[var(--neon-pink)]/20 rounded-full blur-[50px] pointer-events-none" />
                
                <h3 className="text-xl text-white font-[var(--font-tech)] uppercase tracking-wide mb-6">Partnership</h3>
                
                <div className="space-y-6 relative z-10">
                    <div className="space-y-2">
                         <div className="flex justify-between text-sm mb-1 font-[var(--font-tech)] text-[var(--text-secondary)]">
                            <span>Level 1</span>
                            <span className="text-white">8 <span className="text-[var(--text-muted)] text-[10px]">active</span></span>
                        </div>
                        <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                            <div className="bg-gradient-to-r from-[var(--neon-pink)] to-[var(--neon-purple)] h-full w-[60%] shadow-[0_0_10px_var(--neon-pink)]"></div>
                        </div>
                    </div>
                    
                    <div className="bg-black/40 p-4 rounded-xl border border-white/10 flex items-center justify-between gap-2 group-hover:border-[var(--neon-pink)]/50 transition-colors">
                         <code className="text-xs text-[var(--neon-pink)] font-mono">evoluton.io/ref/u8291</code>
                         <button className="text-xs text-white hover:text-[var(--neon-cyan)] transition-colors uppercase font-bold tracking-wider">Copy</button>
                    </div>
                </div>
             </div>
             
             {/* Calendar Widget */}
             <div className="web3-card rounded-[32px] p-8">
                 <div className="flex items-center gap-3 mb-6">
                     <Calendar size={18} className="text-[var(--neon-cyan)]"/>
                     <h3 className="text-white font-[var(--font-tech)] uppercase text-lg">Payouts</h3>
                 </div>
                 <div className="grid grid-cols-7 gap-3 text-center text-xs font-[var(--font-tech)]">
                     {['M','T','W','T','F','S','S'].map(d => (
                         <span key={d} className="text-[var(--text-muted)]">{d}</span>
                     ))}
                     {Array.from({length: 14}).map((_, i) => (
                         <div key={i} className={`
                            h-8 flex items-center justify-center rounded-lg text-[10px]
                            ${i === 11 ? 'bg-[var(--neon-cyan)] text-black font-bold shadow-[0_0_10px_var(--neon-cyan)]' : 'text-[var(--text-secondary)] hover:bg-white/10 cursor-pointer'}
                         `}>
                             {10 + i}
                         </div>
                     ))}
                 </div>
             </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;