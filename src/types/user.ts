export type UserRole = 'Lead Engineer' | 'Product Designer' | 'Frontend Engineer' | 'DevOps Engineer' | 'Fullstack Engineer';

export type UserStatus = 'online' | 'busy' | 'away' | 'offline';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: UserRole;
  status: UserStatus;
  activeTasks: number;
}
