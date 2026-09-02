export type ProjectStatus = 'on_track' | 'at_risk' | 'delayed' | 'completed';
export type ProjectPriority = 'low' | 'medium' | 'high' | 'critical';

export interface Project {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  priority: ProjectPriority;
  progress: number;
  dueDate: string;
  leadId: string;
  teamSize: number;
  openTasks: number;
  category: string;
}
