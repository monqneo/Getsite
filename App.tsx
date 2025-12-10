import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Staking from './components/Staking';
import Bonds from './components/Bonds';
import Tariffs from './components/Tariffs';
import Landing from './components/Landing';
import Partners from './components/Partners';
import AuthPage from './components/AuthPage';
import NFTs from './components/NFTs';
import Calculator from './components/Calculator';
import Academy from './components/Academy';
import Governance from './components/Governance';
import LiveTicker from './components/LiveTicker';
import { AppView } from './types';
import { Menu } from 'lucide-react';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentView(AppView.DASHBOARD);
  };

  if (!isAuthenticated) {
    return (
      <>
        <AuthPage onLogin={handleLogin} />
        <LiveTicker />
      </>
    );
  }

  const renderView = () => {
    switch (currentView) {
      case AppView.HOME:
        return <Landing />;
      case AppView.DASHBOARD:
        return <Dashboard />;
      case AppView.TARIFFS:
        return <Tariffs />;
      case AppView.STAKE:
        return <Staking />;
      case AppView.BOND:
        return <Bonds />;
      case AppView.PARTNERS:
        return <Partners />;
      case AppView.NFT:
        return <NFTs />;
      case AppView.CALCULATOR:
        return <Calculator />;
      case AppView.ACADEMY:
        return <Academy />;
      case AppView.GOVERNANCE:
        return <Governance />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--bg-deep)] text-white font-sans selection:bg-[var(--neon-purple)] selection:text-white">
      {/* Sidebar */}
      <Sidebar 
        currentView={currentView} 
        onChangeView={setCurrentView}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full relative w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0a0a1f] to-transparent">
        {/* Mobile Header Trigger */}
        <div className="md:hidden p-4 border-b border-white/10 flex items-center justify-between bg-black/50 backdrop-blur-md z-10">
          <div className="flex items-center gap-2">
             <span className="font-[var(--font-tech)] text-xl text-white tracking-widest uppercase">EvoluTON</span>
          </div>
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 text-[var(--neon-cyan)] hover:text-white bg-white/5 border border-white/10"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* View Container */}
        <main className="flex-1 overflow-hidden relative pb-10">
           {renderView()}
        </main>
        
        {/* Global Live Ticker */}
        <LiveTicker />
      </div>
    </div>
  );
};

export default App;