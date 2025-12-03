import React from 'react';
import { Post } from '../types';
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';

interface PostCardProps {
  post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="bg-white p-4 pixel-border pixel-shadow mb-4">
      {/* Header */}
      <div className="flex justify-between items-start mb-3 border-b-2 border-stone-100 pb-2">
        <div className="flex items-center gap-3">
          <img src={post.user.avatar} alt={post.user.name} className="w-10 h-10 border-2 border-black bg-stone-200" />
          <div>
            <div className="font-bold text-lg text-black leading-none">{post.user.name}</div>
            <div className="text-sm text-stone-500">{post.timeAgo}</div>
          </div>
        </div>
        <button className="text-black hover:bg-stone-100 p-1 border border-transparent hover:border-black transition-all">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Content */}
      <p className="text-black text-lg mb-3 leading-snug font-medium">
        {post.content}
      </p>

      {/* Images */}
      {post.images.length > 0 && (
        <div className={`grid gap-2 mb-3 ${post.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
          {post.images.map((img, idx) => (
            <div key={idx} className="border-2 border-black">
                <img 
                    src={img} 
                    alt="post" 
                    className={`object-cover w-full ${post.images.length === 1 ? 'h-48' : 'h-32'}`} 
                />
            </div>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-6 mt-2 pt-2 border-t-2 border-dashed border-stone-200">
        <button className="flex items-center gap-2 text-stone-600 hover:text-red-500 transition-colors group">
          <Heart size={20} className="group-hover:fill-current" />
          <span className="text-sm font-bold">{post.likes}</span>
        </button>
        <button className="flex items-center gap-2 text-stone-600 hover:text-blue-600 transition-colors">
          <MessageCircle size={20} />
          <span className="text-sm font-bold">{post.comments}</span>
        </button>
        <button className="flex items-center gap-2 text-stone-600 ml-auto hover:text-black">
          <Share2 size={20} />
        </button>
      </div>
    </div>
  );
};