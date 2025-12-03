import React from 'react';
import { X, Calendar, Edit3, Image as ImageIcon, MapPin } from 'lucide-react';

// --- MENU ---
interface PublishMenuProps {
    onClose: () => void;
    onSelectActivity: () => void;
    onSelectPost: () => void;
}
export const PublishMenu: React.FC<PublishMenuProps> = ({ onClose, onSelectActivity, onSelectPost }) => {
    return (
        <div className="absolute inset-0 z-50 bg-stone-900/80 backdrop-blur-sm flex flex-col justify-end">
            <div className="bg-stone-50 border-t-2 border-black p-6 animate-slide-up pb-10">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-black text-black uppercase">Create New</h3>
                    <button onClick={onClose} className="p-2 bg-white border-2 border-black shadow-[2px_2px_0_0_#000] active:translate-y-0.5 active:shadow-none">
                        <X size={24} />
                    </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <button 
                        onClick={onSelectActivity}
                        className="group bg-blue-300 h-40 border-2 border-black shadow-[4px_4px_0_0_#000] flex flex-col items-center justify-center gap-2 active:translate-y-1 active:shadow-none transition-all"
                    >
                        <Calendar size={40} className="text-black group-hover:scale-110 transition-transform" />
                        <span className="font-black text-lg">EVENT</span>
                    </button>
                    <button 
                        onClick={onSelectPost}
                        className="group bg-white h-40 border-2 border-black shadow-[4px_4px_0_0_#000] flex flex-col items-center justify-center gap-2 active:translate-y-1 active:shadow-none transition-all"
                    >
                        <Edit3 size={40} className="text-black group-hover:scale-110 transition-transform" />
                        <span className="font-black text-lg">POST</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- ACTIVITY FORM ---
interface PublishFormProps {
    onBack: () => void;
}
export const PublishActivityForm: React.FC<PublishFormProps> = ({ onBack }) => {
    return (
        <div className="min-h-screen bg-stone-50 p-4">
             <div className="flex items-center gap-4 mb-8">
                <button onClick={onBack} className="p-2 bg-white border-2 border-black shadow-[2px_2px_0_0_#000]">
                    <X size={20} />
                </button>
                <h1 className="text-xl font-black uppercase">New Event</h1>
            </div>

            <div className="space-y-6">
                <div className="space-y-2">
                    <label className="font-bold text-sm block">COVER IMAGE</label>
                    <div className="h-32 bg-stone-200 border-2 border-black border-dashed flex flex-col items-center justify-center text-stone-500 gap-2 cursor-pointer hover:bg-stone-100">
                        <ImageIcon size={32} />
                        <span className="text-xs font-bold">CLICK TO UPLOAD</span>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="font-bold text-sm block">EVENT TITLE</label>
                    <input type="text" placeholder="E.g. Sunday Market" className="w-full p-3 bg-white border-2 border-black font-mono placeholder:text-stone-400 focus:outline-none focus:bg-blue-50" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                     <div className="space-y-2">
                        <label className="font-bold text-sm block">DATE</label>
                        <input type="text" placeholder="YYYY-MM-DD" className="w-full p-3 bg-white border-2 border-black font-mono focus:outline-none focus:bg-blue-50" />
                    </div>
                    <div className="space-y-2">
                        <label className="font-bold text-sm block">TIME</label>
                        <input type="text" placeholder="00:00" className="w-full p-3 bg-white border-2 border-black font-mono focus:outline-none focus:bg-blue-50" />
                    </div>
                </div>

                <div className="space-y-2">
                     <label className="font-bold text-sm block">LOCATION</label>
                     <div className="relative">
                        <input type="text" placeholder="Search address..." className="w-full p-3 pl-10 bg-white border-2 border-black font-mono focus:outline-none focus:bg-blue-50" />
                        <MapPin size={18} className="absolute left-3 top-3.5 text-stone-400" />
                     </div>
                </div>
                
                <div className="pt-8">
                    <button className="w-full bg-lime-300 py-3 border-2 border-black font-black text-lg shadow-[4px_4px_0_0_#000] active:translate-y-1 active:shadow-none">
                        PUBLISH EVENT
                    </button>
                </div>
            </div>
        </div>
    )
}

// --- POST FORM ---
export const PublishPostForm: React.FC<PublishFormProps> = ({ onBack }) => {
     return (
        <div className="min-h-screen bg-stone-50 p-4 flex flex-col">
             <div className="flex items-center justify-between mb-6">
                <button onClick={onBack} className="p-2 bg-white border-2 border-black shadow-[2px_2px_0_0_#000]">
                    <X size={20} />
                </button>
                <button className="px-6 py-2 bg-lime-300 border-2 border-black font-black shadow-[2px_2px_0_0_#000] active:translate-y-0.5 active:shadow-none">
                    POST
                </button>
            </div>

            <textarea 
                placeholder="What's happening in the eco-verse?" 
                className="w-full flex-1 bg-transparent border-0 text-lg font-medium resize-none focus:ring-0 p-2 placeholder:text-stone-400"
            ></textarea>

            <div className="mt-auto border-t-2 border-black pt-4">
                 <div className="flex gap-4">
                    <button className="w-16 h-16 bg-white border-2 border-black flex items-center justify-center hover:bg-stone-100">
                        <ImageIcon size={24} />
                    </button>
                    <div className="w-16 h-16 bg-stone-200 border-2 border-black border-dashed"></div>
                 </div>
            </div>
        </div>
    )
}