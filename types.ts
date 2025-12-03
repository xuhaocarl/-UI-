export type Tab = 'square' | 'activities' | 'publish' | 'stay' | 'profile';

export type ViewState = 
  | { type: 'tab'; tab: Tab }
  | { type: 'activity_detail'; id: string }
  | { type: 'stay_detail'; id: string }
  | { type: 'publish_menu' }
  | { type: 'publish_activity_form' }
  | { type: 'publish_post_form' };

export interface User {
  id: string;
  name: string;
  avatar: string;
  level?: number;
}

export interface Activity {
  id: string;
  title: string;
  image: string;
  date: string;
  location: string;
  price: string;
  tags: string[];
  status: 'recruiting' | 'full' | 'ended';
  participants: string[]; // Avatar URLs
  participantCount: number;
  organizer: string;
  isOnline: boolean;
  description?: string;
}

export interface Post {
  id: string;
  user: User;
  content: string;
  images: string[];
  likes: number;
  comments: number;
  timeAgo: string;
}

export interface Stay {
  id: string;
  title: string;
  image: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  tags: string[];
  description?: string;
}