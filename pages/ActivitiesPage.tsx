import React from 'react';
import { activities } from '../services/mockData';
import { ActivityCard } from '../components/ActivityCard';
import { SlidersHorizontal, CalendarDays, Search } from 'lucide-react';

interface ActivitiesPageProps {
    onActivityClick: (id: string) => void;
}

export const ActivitiesPage: React.FC<ActivitiesPageProps> = ({ onActivityClick }) => {
  return (
    <div className="pb-24 pt-4 px-4 bg-stone-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-4xl font-black text-black uppercase tracking-tighter">Events</h1>
          <p className="text-stone-500 text-lg">:: Find your tribe ::</p>
        </div>
        <button className="w-12 h-12 bg-white border-2 border-black shadow-[4px_4px_0_0_#000] flex items-center justify-center active:translate-y-1 active:shadow-none transition-all">
            <Search size={24} className="text-black" />
        </button>
      </div>

      {/* Retro Filters */}
      <div className="flex gap-3 overflow-x-auto no-scrollbar mb-6 pb-2">
        <button className="flex-shrink-0 bg-black text-white px-4 py-2 border-2 border-black text-sm font-bold flex items-center gap-2 shadow-[2px_2px_0_0_#ccc]">
            ALL
        </button>
        <button className="flex-shrink-0 bg-white text-black px-4 py-2 border-2 border-black text-sm font-bold flex items-center gap-2 hover:bg-stone-100">
            THIS_WEEK
        </button>
        <button className="flex-shrink-0 bg-white text-black px-4 py-2 border-2 border-black text-sm font-bold hover:bg-stone-100">
            ONLINE
        </button>
      </div>

      {/* List */}
      <div className="flex flex-col">
        {activities.map(activity => (
          <ActivityCard 
            key={activity.id} 
            activity={activity} 
            onClick={() => onActivityClick(activity.id)}
          />
        ))}
      </div>
    </div>
  );
};