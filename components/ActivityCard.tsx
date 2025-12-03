import React from 'react';
import { Activity } from '../types';
import { MapPin, Calendar, Users, MonitorPlay, ChevronRight } from 'lucide-react';

interface ActivityCardProps {
  activity: Activity;
  onClick: () => void;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({ activity, onClick }) => {
  const isFull = activity.status === 'full';

  return (
    <div 
      onClick={onClick}
      className="bg-white pixel-border pixel-shadow mb-6 flex flex-col active:translate-y-1 active:shadow-none transition-all cursor-pointer group"
    >
      {/* Image Section with heavy border bottom */}
      <div className="relative h-48 w-full bg-stone-200 border-b-2 border-black overflow-hidden">
        <img
          src={activity.image}
          alt={activity.title}
          className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all"
        />
        {/* Status Tag - Pixel Style */}
        <div className="absolute top-0 right-0 p-2 flex gap-2">
            {activity.isOnline && (
                <span className="bg-blue-200 border-2 border-black text-black text-sm px-2 py-0.5 flex items-center gap-1">
                    <MonitorPlay size={12} /> NET
                </span>
            )}
            <span className={`border-2 border-black text-sm px-2 py-0.5 flex items-center ${
            isFull ? 'bg-stone-300 text-stone-500 line-through' : 'bg-lime-300 text-black'
            }`}>
            {isFull ? 'FULL' : 'OPEN'}
            </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col gap-3 relative">
        {/* Decorative corner */}
        <div className="absolute top-2 right-2 w-2 h-2 bg-black/10"></div>

        <h3 className="text-xl font-bold leading-tight uppercase tracking-tight">
          {activity.title}
        </h3>

        <div className="flex flex-col gap-1 text-base text-stone-600 font-medium">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span>{activity.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span className="truncate">{activity.location}</span>
          </div>
        </div>

        {/* Divider - Dashed */}
        <div className="w-full border-t-2 border-dashed border-stone-300 my-1"></div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-1">
            <div className="flex items-center gap-2">
                <span className="bg-stone-200 px-1 border border-black text-xs">{activity.participantCount} PPL</span>
                <div className="flex -space-x-2">
                    {activity.participants.slice(0, 3).map((p, i) => (
                        <img key={i} src={p} alt="user" className="w-6 h-6 border-2 border-white bg-stone-300" />
                    ))}
                </div>
            </div>

            <div className="flex items-center gap-2 font-bold text-lg text-blue-600">
                <span>{activity.price}</span>
                <ChevronRight className="animate-pulse" size={20}/>
            </div>
        </div>
      </div>
    </div>
  );
};