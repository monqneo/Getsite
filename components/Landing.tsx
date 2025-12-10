import React from 'react';
import { ShieldCheck, TrendingUp, Globe, FileText, Quote, ArrowRight, Banknote, Clock, Lock, Cpu, Zap } from 'lucide-react';

const ReviewCard = ({ name, amount, text, time }: any) => (
    <div className="web3-card p-6 break-inside-avoid mb-6 !bg-black/60 !border-white/5 hover:!border-[var(--neon-cyan)]/50 group">
        <div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-3">
            <div className="w-8 h-8 bg-gradient-to-br from-[var(--neon-purple)] to-black rounded-lg flex items-center justify-center text-xs font-bold text-white border border-[var(--neon-purple)]/30">
                {name.charAt(0)}
            </div>
            <div>
                <p className="text-xs text-white font-bold font-[var(--font-tech)] uppercase">{name}</p>
                <p className="text-[10px] text-[var(--neon-cyan)]">Verified Investor</p>
            </div>
            <span className="ml-auto text-[10px] text-[var(--text-muted)] font-mono">{time}</span>
        </div>
        
        {/* Fake Payment Screenshot */}
        <div className="bg-black/40 p-3 rounded mb-3 border border-dashed border-[var(--neon-cyan)]/20 flex items-center justify-between group-hover:border-[var(--neon-cyan)]/50 transition-colors">
            <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-[var(--neon-cyan)]/10 flex items-center justify-center text-[var(--neon-cyan)]">
                    <Banknote size={12} />
                </div>
                <div>
                    <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wide">Withdrawal</p>
                    <p className="text-sm text-white font-mono">USDT (TRC20)</p>
                </div>
            </div>
            <p className="text-[var(--neon-cyan)] font-mono text-sm drop-shadow-[0_0_5px_rgba(0,247,255,0.5)]">+{amount}</p>
        </div>

        <p className="text-xs text-[var(--text-secondary)] italic leading-relaxed">"{text}"</p>
    </div>
);

const Landing: React.FC = () => {
  const reviews = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      name: ["Alex V.", "Dmitry K.", "Elena S.", "Max Power", "Crypto Whale", "Sergey P.", "Olga M.", "Ivan T."][i],
      amount: ["$1,250.00", "$450.00", "$5,000.00", "$12,400.00", "$890.00", "$2,300.00", "$34,000.00", "$150.00"][i],
      text: "System works perfectly. Withdrawals are instant and the APY is unmatched in the current market.",
      time: `${Math.floor(Math.random() * 23) + 1}h ago`
  }));

  return (
    <div className="h-full overflow-y-auto scroll-smooth bg-[var(--bg-deep)]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-20 border-b border-[var(--neon-cyan)]/10 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--neon-purple)]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--neon-cyan)]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl z-10 relative">
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-[var(--neon-cyan)]/30 rounded-full mb-8 bg-[var(--neon-cyan)]/5 backdrop-blur-md shadow-[0_0_20px_rgba(0,247,255,0.1)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--neon-cyan)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--neon-cyan)]"></span>
                </span>
                <span className="text-[10px] text-[var(--neon-cyan)] uppercase tracking-[0.2em] font-bold font-[var(--font-tech)]">Mainnet Operational</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-[var(--font-tech)] text-white leading-[0.9] mb-8 uppercase tracking-tight">
                Your Money <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--neon-purple)] to-[var(--neon-pink)] drop-shadow-[0_0_10px_rgba(157,0,255,0.5)]">Decays</span> in Banks.
            </h1>
            
            <p className="text-lg text-[var(--text-secondary)] font-light max-w-2xl leading-relaxed mb-12 pl-6 border-l-2 border-[var(--neon-cyan)]">
                Inflation is a hidden tax on your labor. Traditional finance is obsolete. 
                <strong className="text-white">EvoluTON</strong> is the quantum leap into algorithmic wealth generation on The Open Network.
            </p>

            <div className="flex flex-wrap gap-6">
                <button className="btn-web3-primary px-10 py-5 rounded-none skew-x-[-10deg] text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                    <span className="skew-x-[10deg] inline-block">Launch App</span>
                </button>
                <button className="btn-web3 px-10 py-5 rounded-none skew-x-[-10deg] text-sm font-bold uppercase tracking-widest">
                    <span className="skew-x-[10deg] inline-block">Read Whitepaper</span>
                </button>
            </div>
        </div>
      </section>

      {/* Feature Grid (Pain Points) */}
      <section className="py-24 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8 bg-black/20">
          {[
              { icon: <Clock className="text-[var(--neon-cyan)]" size={32} />, title: "Time Decay", desc: "Every second your fiat sits idle, it loses purchasing power. We automate yield generation 24/7." },
              { icon: <Lock className="text-[var(--neon-purple)]" size={32} />, title: "Gatekept Alpha", desc: "Venture deals and MEV strategies were exclusive to whales. We tokenized access for everyone." },
              { icon: <TrendingUp className="text-[var(--neon-pink)]" size={32} />, title: "The Rat Race", desc: "Salaries don't scale. Compound interest does. Escape the linear growth trap." }
          ].map((item, i) => (
              <div key={i} className="web3-card p-8 group">
                  <div className="mb-6 p-4 bg-white/5 rounded-full w-fit group-hover:bg-white/10 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                      {item.icon}
                  </div>
                  <h3 className="text-2xl font-[var(--font-tech)] text-white mb-4 group-hover:text-shadow-[0_0_10px_white]">{item.title}</h3>
                  <p className="text-[var(--text-secondary)] font-light text-sm leading-relaxed">
                      {item.desc}
                  </p>
              </div>
          ))}
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 md:px-20 border-y border-white/5 relative bg-[var(--bg-deep)]">
          <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'linear-gradient(rgba(0, 247, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 247, 255, 0.1) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
          
          <div className="flex flex-col md:flex-row gap-16 relative z-10">
              <div className="md:w-1/3">
                  <h2 className="text-4xl font-[var(--font-tech)] text-white mb-6">The <span className="text-[var(--neon-cyan)]">EvoluTON</span><br/>Standard</h2>
                  <p className="text-[var(--text-secondary)] font-light text-sm leading-relaxed">
                      Built by quantum analysts and blockchain architects. We don't just participate in the market; we solve it using high-frequency algorithms on TON.
                  </p>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                      { val: "2021", label: "Genesis Block", sub: "Core Algo v1.0 Deployed" },
                      { val: "$140M+", label: "Total Volume", sub: "Processed securely in 2023" },
                      { val: "98.4%", label: "Win Rate", sub: "AI-Predicted Arbitrage" },
                      { val: "35k+", label: "Nodes", sub: "Active community members" }
                  ].map((stat, i) => (
                      <div key={i} className="bg-black/40 p-8 border-l-2 border-[var(--neon-purple)] hover:bg-[var(--neon-purple)]/5 transition-colors">
                          <p className="text-4xl font-[var(--font-tech)] text-white mb-2 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">{stat.val}</p>
                          <p className="text-xs text-[var(--neon-cyan)] uppercase tracking-widest font-bold mb-2">{stat.label}</p>
                          <p className="text-[var(--text-muted)] text-xs font-mono">{stat.sub}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* White Paper Snippet */}
      <section className="py-24 px-6 md:px-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[800px] bg-[var(--neon-cyan)]/5 blur-3xl pointer-events-none transform -rotate-12"></div>
          
          <div className="max-w-4xl mx-auto web3-card p-10 md:p-14 relative !bg-black/80 !border-[var(--neon-cyan)]/30">
              <div className="flex justify-between items-start mb-12 border-b border-white/10 pb-8">
                  <h2 className="text-3xl font-[var(--font-tech)] text-white">Whitepaper <span className="text-xs font-mono text-[var(--neon-cyan)] px-2 py-1 bg-[var(--neon-cyan)]/10 rounded ml-2 align-middle">v2.4 PUBLIC</span></h2>
                  <FileText className="text-[var(--neon-cyan)] animate-pulse" size={32} />
              </div>

              <div className="space-y-6 text-[var(--text-secondary)] font-mono text-sm leading-relaxed">
                  <p>
                      <strong className="text-white">ABSTRACT:</strong> The EvoluTON Protocol implements a Hybrid Consensus Liquidity Model (HCLM) to mitigate slippage in large-scale stablecoin swaps.
                  </p>
                  <p>
                      <strong className="text-white">TECH STACK:</strong> Core logic resides in MEV-resistant smart contracts on TON. The AI Dispatcher routes capital between DeDust, Ston.fi, and cross-chain bridges in < 200ms.
                  </p>
                  <p>
                      <strong className="text-white">TOKENOMICS:</strong> 
                      1. Pool Accumulation -> 2. Algo Arbitrage -> 3. Auto-Compounding -> 4. Dividend Distribution (in EVO).
                  </p>
              </div>

              <div className="mt-12 flex items-center justify-between pt-6">
                  <div className="flex gap-4">
                      <div className="h-12 w-12 bg-black border border-[var(--neon-cyan)]/30 flex items-center justify-center rounded">
                           <Globe size={20} className="text-[var(--neon-cyan)]"/>
                      </div>
                      <div>
                          <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest">Audit Status</p>
                          <p className="text-white font-[var(--font-tech)]">CertiK: Passed (98/100)</p>
                      </div>
                  </div>
                  <button className="text-[var(--neon-cyan)] hover:text-white flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors hover:drop-shadow-[0_0_5px_var(--neon-cyan)]">
                      Download PDF <ArrowRight size={14} />
                  </button>
              </div>
          </div>
      </section>

      {/* Wall of Success (Reviews) */}
      <section className="py-24 px-6 border-t border-white/5 bg-[var(--bg-deep)]">
          <div className="text-center mb-16 max-w-2xl mx-auto">
              <Quote className="mx-auto text-[var(--neon-purple)] mb-6" size={40} />
              <h2 className="text-4xl font-[var(--font-tech)] text-white mb-4">Consensus Achieved</h2>
              <p className="text-[var(--text-secondary)] font-light">
                  We don't sell dreams. We sell mathematically verified yield. 
                  Join the node network.
              </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-4 gap-6 max-w-7xl mx-auto">
              {reviews.map((review) => (
                  <ReviewCard key={review.id} {...review} />
              ))}
          </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[var(--neon-purple)]/20 text-center bg-black">
          <p className="text-[var(--text-muted)] text-xs uppercase tracking-widest font-[var(--font-tech)]">© 2024 EvoluTON Protocol. All Rights Reserved.</p>
          <p className="text-[9px] text-[var(--text-muted)] mt-2 max-w-lg mx-auto opacity-50">
             DeFi involves risk. Past performance of the algorithm does not guarantee future results. 
             Smart contracts are audited but not infallible.
          </p>
      </footer>
    </div>
  );
};

export default Landing;