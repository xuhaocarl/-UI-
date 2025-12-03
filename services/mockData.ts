import { Activity, Post, Stay, User } from '../types';

export const currentUser: User = {
  id: 'u1',
  name: 'Nomad_Jack',
  avatar: 'https://picsum.photos/seed/user1/100/100',
  level: 3,
};

export const activities: Activity[] = [
  {
    id: 'a1',
    title: 'Sunset Yoga & Eco-Talk: Reconnecting with Nature',
    image: 'https://picsum.photos/seed/yoga/800/600',
    date: 'Oct 24 • 18:00',
    location: 'Green Valley Hub, Dali',
    price: '¥29',
    tags: ['Wellness', 'Social'],
    status: 'recruiting',
    participants: [
      'https://picsum.photos/seed/p1/50/50',
      'https://picsum.photos/seed/p2/50/50',
      'https://picsum.photos/seed/p3/50/50',
      'https://picsum.photos/seed/p4/50/50',
    ],
    participantCount: 12,
    organizer: 'Mindful Collective',
    isOnline: false,
  },
  {
    id: 'a2',
    title: 'Digital Nomad Web3 Workshop',
    image: 'https://picsum.photos/seed/coding/800/600',
    date: 'Oct 26 • 14:00',
    location: 'Tencent Meeting',
    price: 'Free',
    tags: ['Tech', 'Career'],
    status: 'recruiting',
    participants: [
      'https://picsum.photos/seed/p5/50/50',
      'https://picsum.photos/seed/p6/50/50',
    ],
    participantCount: 45,
    organizer: 'CodeYouth',
    isOnline: true,
  },
  {
    id: 'a3',
    title: 'Organic Farm Weekend Volunteer',
    image: 'https://picsum.photos/seed/farm/800/600',
    date: 'Nov 01 • 09:00',
    location: 'Sunshine Farm, Chengdu',
    price: 'Free',
    tags: ['Volunteer', 'Outdoors'],
    status: 'full',
    participants: [
      'https://picsum.photos/seed/p7/50/50',
      'https://picsum.photos/seed/p8/50/50',
      'https://picsum.photos/seed/p9/50/50',
    ],
    participantCount: 20,
    organizer: 'EcoFarms',
    isOnline: false,
  },
];

export const posts: Post[] = [
  {
    id: 'p1',
    user: { id: 'u2', name: 'Alice_Wander', avatar: 'https://picsum.photos/seed/u2/100/100' },
    content: 'Just arrived at the co-living space! The vibe here is absolutely insane. Who wants to grab coffee?',
    images: ['https://picsum.photos/seed/post1/600/400', 'https://picsum.photos/seed/post2/600/400'],
    likes: 42,
    comments: 8,
    timeAgo: '2h ago',
  },
  {
    id: 'p2',
    user: { id: 'u3', name: 'Eco_Dave', avatar: 'https://picsum.photos/seed/u3/100/100' },
    content: 'Found this hidden gem while hiking today. Nature is the best designer.',
    images: ['https://picsum.photos/seed/hiking/600/600'],
    likes: 128,
    comments: 24,
    timeAgo: '5h ago',
  },
];

export const stays: Stay[] = [
  {
    id: 's1',
    title: 'Minimalist Loft in Creative Park',
    image: 'https://picsum.photos/seed/room1/800/600',
    location: 'Chengdu, Jinjiang',
    price: 268,
    rating: 4.9,
    reviews: 120,
    tags: ['Work Friendly', 'Pet Friendly'],
  },
  {
    id: 's2',
    title: 'Forest Cabin Retreat',
    image: 'https://picsum.photos/seed/cabin/800/600',
    location: 'Qingcheng Mountain',
    price: 450,
    rating: 4.8,
    reviews: 85,
    tags: ['Nature', 'Quiet'],
  },
];
