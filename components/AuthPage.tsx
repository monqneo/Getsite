import React, { useState, useRef } from 'react';
import { Wallet, Cpu, Upload, User, AtSign, ArrowLeft, Camera, Check } from 'lucide-react';

interface AuthPageProps {
  onLogin: () => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onLogin }) => {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [isLoading, setIsLoading] = useState(false);

  // Registration Form State
  const [formData, setFormData] = useState({
    name: '',
    social: '',
    wallet: '',
    avatar: null as string | null
  });
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleGoogleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 1500);
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData(prev => ({ ...prev, avatar: imageUrl }));
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 2000);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center relative overflow-hidden font-sans text-stone-200 bg-[var(--bg-deep)]">
      
      {/* Background Ambience */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[var(--neon-purple)] rounded-full blur-[150px] opacity-20 pointer-events-none animate-pulse" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-[var(--neon-cyan)] rounded-full blur-[150px] opacity-10 pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-md p-8 relative z-10 flex flex-col items-center transition-all duration-500">
        
        {/* LOGO SECTION - EvoluTON Sphere */}
        <div className="mb-10 text-center group cursor-default">
           <div className="relative w-32 h-32 mx-auto mb-6">
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 rounded-full border border-[var(--neon-cyan)] opacity-20 animate-spin-slow" style={{ animationDuration: '15s' }}></div>
              <div className="absolute inset-2 rounded-full border border-[var(--neon-purple)] opacity-30 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '10s' }}></div>
              
              {/* Core Sphere / Image */}
              <div className="absolute inset-0 rounded-full bg-black flex items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(0,247,255,0.2)] group-hover:shadow-[0_0_80px_rgba(157,0,255,0.4)] transition-all duration-500 border border-[var(--neon-cyan)]/30">
                  {/* Fallback CSS Construction for Digital Sphere */}
                  <div className="relative w-full h-full bg-[radial-gradient(circle_at_30%_30%,_rgba(0,247,255,0.4),_transparent_60%)]">
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')] opacity-50"></div>
                      <Cpu size={48} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white drop-shadow-[0_0_10px_var(--neon-cyan)]" />
                  </div>
              </div>

              {/* Holographic Beam Effect */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-[var(--neon-cyan)]/20 blur-[40px] rounded-full pointer-events-none"></div>
           </div>

           <h1 className="text-5xl font-[var(--font-tech)] font-bold tracking-tight mb-2">
             <span className="text-[var(--neon-pink)]">Evolu</span>
             <span className="text-[var(--neon-cyan)]">TON</span>
           </h1>
           <p className="text-[var(--text-secondary)] font-[var(--font-tech)] tracking-[0.3em] text-[10px] uppercase opacity-80">
              Decentralized Liquidity Protocol
           </p>
        </div>

        <div className="w-full web3-card rounded-3xl p-8 shadow-2xl relative overflow-hidden bg-black/80 backdrop-blur-xl border border-white/10">
            {/* Top Light Strip */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--neon-pink)] via-[var(--neon-cyan)] to-[var(--neon-purple)]"></div>

            {mode === 'login' ? (
                /* --- LOGIN MODE --- */
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <button 
                      onClick={handleGoogleLogin}
                      disabled={isLoading}
                      className="w-full btn-web3 rounded-xl py-4 flex items-center justify-center gap-3 active:scale-95 disabled:opacity-70 disabled:active:scale-100 group hover:bg-white/5 border-white/10 text-white"
                    >
                        {isLoading ? (
                            <div className="w-5 h-5 border-2 border-[var(--neon-cyan)] border-t-transparent rounded-full animate-spin" />
                        ) : (
                            <>
                            <svg className="w-5 h-5 group-hover:drop-shadow-[0_0_5px_white]" viewBox="0 0 24 24">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#fff" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#fff" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#fff" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#fff" />
                            </svg>
                            <span className="font-[var(--font-tech)] tracking-wide">Login via Google</span>
                            </>
                        )}
                    </button>

                    <button 
                      className="w-full btn-web3 rounded-xl py-4 flex items-center justify-center gap-3 active:scale-95 text-[var(--neon-cyan)] border-[var(--neon-cyan)] hover:bg-[var(--neon-cyan)]/10"
                    >
                        <Wallet size={20} />
                        <span className="font-[var(--font-tech)] tracking-wide">Connect Wallet</span>
                    </button>

                    <div className="relative py-4">
                        <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-white/10"></span></div>
                        <div className="relative flex justify-center text-xs uppercase"><span className="bg-black px-2 text-[var(--text-muted)]">New User?</span></div>
                    </div>

                    <button 
                      onClick={() => setMode('register')}
                      className="w-full btn-web3-primary rounded-xl py-4 flex items-center justify-center gap-2 active:scale-95 text-black font-bold uppercase tracking-wider"
                    >
                        Create Account
                    </button>
                </div>
            ) : (
                /* --- REGISTRATION MODE --- */
                <form onSubmit={handleRegister} className="space-y-5 animate-in fade-in slide-in-from-right-8 duration-500">
                    <button 
                        type="button" 
                        onClick={() => setMode('login')}
                        className="flex items-center gap-2 text-xs text-[var(--text-muted)] hover:text-white transition-colors uppercase tracking-widest mb-2"
                    >
                        <ArrowLeft size={14} /> Back
                    </button>
                    
                    {/* Avatar Upload */}
                    <div className="flex justify-center mb-6">
                        <div 
                            onClick={() => fileInputRef.current?.click()}
                            className="relative w-24 h-24 rounded-full bg-black border border-[var(--neon-cyan)]/30 cursor-pointer group hover:border-[var(--neon-cyan)] transition-all overflow-hidden"
                        >
                            {formData.avatar ? (
                                <img src={formData.avatar} alt="Avatar" className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center text-[var(--text-muted)] group-hover:text-[var(--neon-cyan)]">
                                    <Camera size={24} className="mb-1" />
                                    <span className="text-[9px] uppercase">Upload</span>
                                </div>
                            )}
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-[var(--neon-cyan)]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Upload size={20} className="text-white drop-shadow-[0_0_5px_black]" />
                            </div>
                        </div>
                        <input 
                            type="file" 
                            ref={fileInputRef} 
                            onChange={handleAvatarChange} 
                            accept="image/*" 
                            className="hidden" 
                        />
                    </div>

                    {/* Inputs */}
                    <div className="space-y-4">
                        <div className="relative group">
                            <div className="absolute left-4 top-3.5 text-[var(--text-muted)] group-focus-within:text-[var(--neon-cyan)] transition-colors">
                                <User size={18} />
                            </div>
                            <input 
                                required
                                type="text" 
                                placeholder="Display Name"
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-[var(--neon-cyan)] focus:ring-1 focus:ring-[var(--neon-cyan)] transition-all placeholder:text-[var(--text-muted)] text-sm font-mono"
                            />
                        </div>

                        <div className="relative group">
                            <div className="absolute left-4 top-3.5 text-[var(--text-muted)] group-focus-within:text-[var(--neon-purple)] transition-colors">
                                <AtSign size={18} />
                            </div>
                            <input 
                                required
                                type="text" 
                                placeholder="Telegram / Twitter"
                                value={formData.social}
                                onChange={e => setFormData({ ...formData, social: e.target.value })}
                                className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-[var(--neon-purple)] focus:ring-1 focus:ring-[var(--neon-purple)] transition-all placeholder:text-[var(--text-muted)] text-sm font-mono"
                            />
                        </div>

                        <div className="relative group">
                            <div className="absolute left-4 top-3.5 text-[var(--text-muted)] group-focus-within:text-[var(--neon-pink)] transition-colors">
                                <Wallet size={18} />
                            </div>
                            <input 
                                required
                                type="text" 
                                placeholder="TON Wallet Address"
                                value={formData.wallet}
                                onChange={e => setFormData({ ...formData, wallet: e.target.value })}
                                className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-[var(--neon-pink)] focus:ring-1 focus:ring-[var(--neon-pink)] transition-all placeholder:text-[var(--text-muted)] text-sm font-mono"
                            />
                        </div>
                    </div>

                    <button 
                      type="submit"
                      disabled={isLoading}
                      className="w-full btn-web3-primary rounded-xl py-4 mt-4 flex items-center justify-center gap-2 active:scale-95 text-black font-bold uppercase tracking-wider relative overflow-hidden"
                    >
                        {isLoading ? (
                            <span className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" /> MINTING ID...</span>
                        ) : (
                            <span className="flex items-center gap-2">Initialize Account <Check size={16} /></span>
                        )}
                    </button>
                </form>
            )}
        </div>
        
        <div className="mt-12 flex items-center gap-6 text-xs text-[var(--text-muted)] font-[var(--font-tech)] uppercase tracking-widest">
            <a href="#" className="hover:text-[var(--neon-cyan)] transition-colors">Privacy</a>
            <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]"></span>
            <a href="#" className="hover:text-[var(--neon-cyan)] transition-colors">Smart Contract</a>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;