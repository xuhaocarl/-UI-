import React from 'react';
import { Stay } from '../types';
import { Star, MapPin } from 'lucide-react';

interface StayCardProps {
  stay: Stay;
  onClick: () => void;
}

export const StayCard: React.FC<StayCardProps> = ({ stay, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white pixel-border pixel-shadow mb-4 group cursor-pointer active:translate-y-1 active:shadow-none transition-all"
    >
      <div className="relative h-48 border-b-2 border-black">
        <img src={stay.image} alt={stay.title} className="w-full h-full object-cover" />
        <div className="absolute top-0 right-0 bg-white border-l-2 border-b-2 border-black px-2 py-1 flex items-center gap-1">
            <Star size={14} className="text-black fill-black" />
            <span className="text-base font-bold">{stay.rating}</span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
            <div className="flex-1">
                <h3 className="font-bold text-black text-xl mb-1 leading-tight">{stay.title}</h3>
                <div className="flex items-center gap-1 text-sm text-stone-600 mb-2">
                    <MapPin size={14} />
                    {stay.location}
                </div>
            </div>
            <div className="flex flex-col items-end pl-2">
                <span className="bg-lime-300 px-2 py-1 border border-black font-bold text-lg shadow-[2px_2px_0_0_rgba(0,0,0,1)]">¥{stay.price}</span>
            </div>
        </div>
        <div className="flex gap-2 mt-3 flex-wrap">
            {stay.tags.map(tag => (
                <span key={tag} className="text-xs font-bold uppercase px-2 py-1 border border-black bg-stone-100 text-stone-600">
                    {tag}
                </span>
            ))}
        </div>
      </div>
    </div>
  );
};