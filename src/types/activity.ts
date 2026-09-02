export type ActivityType = 'commit' | 'pull_request' | 'deployment' | 'task_resolved' | 'release';

export interface ActivityItem {
  id: string;
  type: ActivityType;
  actor: {
    id: string;
    name: string;
    avatar: string;
  };
  projectId: string;
  projectName: string;
  summary: string;
  detail?: string;
  timestamp: string;
  metadata?: {
    branch?: string;
    hash?: string;
    version?: string;
    environment?: string;
  };
}

export type ActivityFilterType = 'all' | ActivityType;
