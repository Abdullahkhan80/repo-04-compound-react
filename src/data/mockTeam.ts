import { User } from '../types/user';

export const mockTeamMembers: User[] = [
  {
    id: 'u-1',
    name: 'Elena Rostova',
    email: 'elena.rostova@company.io',
    avatar: 'ER',
    role: 'Lead Engineer',
    status: 'online',
    activeTasks: 5,
  },
  {
    id: 'u-2',
    name: 'Marcus Vance',
    email: 'marcus.v@company.io',
    avatar: 'MV',
    role: 'Frontend Engineer',
    status: 'busy',
    activeTasks: 4,
  },
  {
    id: 'u-3',
    name: 'Siddharth Patel',
    email: 'siddharth.p@company.io',
    avatar: 'SP',
    role: 'Fullstack Engineer',
    status: 'online',
    activeTasks: 6,
  },
  {
    id: 'u-4',
    name: 'Chloe Tremblay',
    email: 'chloe.t@company.io',
    avatar: 'CT',
    role: 'Product Designer',
    status: 'away',
    activeTasks: 2,
  },
  {
    id: 'u-5',
    name: 'Devon Hayes',
    email: 'devon.h@company.io',
    avatar: 'DH',
    role: 'DevOps Engineer',
    status: 'online',
    activeTasks: 3,
  },
];
