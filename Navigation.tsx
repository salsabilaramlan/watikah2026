import React from 'react';
import { Home, Users, Calendar, Award } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'home', icon: Home, label: 'Utama' },
    { id: 'committee', icon: Users, label: 'AJK' },
    { id: 'schedule', icon: Calendar, label: 'Aturcara' },
    { id: 'students', icon: Award, label: 'Pemimpin' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#020617]/90 backdrop-blur-xl border-t border-cyan-500/30 shadow-[0_-5px_20px_rgba(6,182,212,0.1)] z-50">
      <div className="flex justify-around items-center h-20 max-w-md mx-auto relative">
        {/* Animated indicator line */}
        
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex flex-col items-center justify-center w-full h-full space-y-1 transition-all duration-300 group ${
                isActive ? 'text-cyan-400' : 'text-slate-500 hover:text-cyan-200'
              }`}
            >
              <div className={`absolute top-0 w-1/2 h-[2px] bg-cyan-500 shadow-[0_0_10px_#22d3ee] transition-all duration-300 ${isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
              
              <div className={`p-1.5 rounded-lg transition-all duration-300 ${isActive ? 'bg-cyan-500/10 shadow-[0_0_15px_rgba(34,211,238,0.3)]' : ''}`}>
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} className={isActive ? "drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]" : ""} />
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? 'text-cyan-400 drop-shadow-[0_0_2px_rgba(34,211,238,0.8)]' : ''}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;