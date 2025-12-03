import React from 'react';
import { stays } from '../services/mockData';
import { StayCard } from '../components/StayCard';
import { Map } from 'lucide-react';

interface StayPageProps {
    onStayClick: (id: string) => void;
}

export const StayPage: React.FC<StayPageProps> = ({ onStayClick }) => {
  return (
    <div className="pb-24 pt-4 px-4 min-h-screen bg-stone-50">
      <div className="flex justify-between items-center mb-6">
        <div>
            <h1 className="text-4xl font-black text-black uppercase tracking-tighter">Stay</h1>
            <p className="text-stone-500 text-lg">:: Sleep in nature ::</p>
        </div>
        <button className="flex items-center gap-2 bg-white px-4 py-2 border-2 border-black text-sm font-bold text-black shadow-[2px_2px_0_0_#000] active:translate-y-1 active:shadow-none">
            <Map size={16} /> MAP
        </button>
      </div>
      
      <div>
        {stays.map(stay => (
          <StayCard 
            key={stay.id} 
            stay={stay} 
            onClick={() => onStayClick(stay.id)}
          />
        ))}
      </div>
    </div>
  );
};