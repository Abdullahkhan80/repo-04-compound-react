import { useMemo } from 'react';
import { Project } from '../types/project';
import { ActivityItem } from '../types/activity';

export interface DashboardMetrics {
  totalProjects: number;
  activeProjects: number;
  completedProjects: number;
  totalOpenTasks: number;
  totalActivitiesCount: number;
  recentDeployments: number;
}

export function useMetrics(projects: Project[], activities: ActivityItem[]): DashboardMetrics {
  return useMemo(() => {
    const activeProjects = projects.filter((p) => p.status === 'on_track' || p.status === 'at_risk').length;
    const completedProjects = projects.filter((p) => p.status === 'completed').length;
    const totalOpenTasks = projects.reduce((acc, curr) => acc + curr.openTasks, 0);
    const recentDeployments = activities.filter((a) => a.type === 'deployment').length;

    return {
      totalProjects: projects.length,
      activeProjects,
      completedProjects,
      totalOpenTasks,
      totalActivitiesCount: activities.length,
      recentDeployments,
    };
  }, [projects, activities]);
}
