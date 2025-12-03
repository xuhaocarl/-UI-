import React from 'react';
import { Tab } from '../types';
import { Home, Compass, Plus, BedDouble, User } from 'lucide-react';

interface BottomNavProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const getTabClass = (tab: Tab) => 
    `flex flex-col items-center justify-center gap-1 w-full h-full transition-colors ${
      activeTab === tab 
      ? 'bg-blue-100 text-black' 
      : 'bg-white text-stone-400 hover:bg-stone-50'
    }`;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-black z-50 max-w-md mx-auto h-16 flex items-stretch">
        
        <button className={`${getTabClass('square')} border-r-2 border-black`} onClick={() => onTabChange('square')}>
          <Home size={24} />
        </button>

        <button className={`${getTabClass('activities')} border-r-2 border-black`} onClick={() => onTabChange('activities')}>
          <Compass size={24} />
        </button>

        <button 
            onClick={() => onTabChange('publish')}
            className="w-full bg-lime-300 border-r-2 border-black flex items-center justify-center hover:bg-lime-400 active:bg-lime-500 transition-colors"
        >
            <Plus size={32} strokeWidth={2.5} className="text-black" />
        </button>

        <button className={`${getTabClass('stay')} border-r-2 border-black`} onClick={() => onTabChange('stay')}>
          <BedDouble size={24} />
        </button>

        <button className={getTabClass('profile')} onClick={() => onTabChange('profile')}>
          <User size={24} />
        </button>

    </div>
  );
};