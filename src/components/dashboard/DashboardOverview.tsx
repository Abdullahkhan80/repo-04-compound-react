import React, { useState } from 'react';
import './dashboard.css';
import { Project } from '../../types/project';
import { User } from '../../types/user';
import { ActivityItem, ActivityFilterType } from '../../types/activity';
import { DashboardMetrics } from '../../hooks/useMetrics';
import { MetricCard } from './MetricCard';
import { ProjectList } from './ProjectList';
import { TeamMemberList } from './TeamMemberList';
import { ActivityFilter } from '../activity/ActivityFilter';
import { LegacyActivityWidget } from '../activity/LegacyActivityWidget';

export interface DashboardOverviewProps {
  projects: Project[];
  activities: ActivityItem[];
  teamMembers: User[];
  metrics: DashboardMetrics;
}

export const DashboardOverview: React.FC<DashboardOverviewProps> = ({
  projects,
  activities,
  teamMembers,
  metrics,
}) => {
  const [activityFilter, setActivityFilter] = useState<ActivityFilterType>('all');

  const filteredActivities = activityFilter === 'all'
    ? activities
    : activities.filter((a) => a.type === activityFilter);

  return (
    <div className="dashboard-overview">
      <div className="dashboard-header">
        <div className="dashboard-title-group">
          <h1>Engineering Operations</h1>
          <p className="dashboard-subtitle">
            Live velocity, deployment pipelines, and active development streams.
          </p>
        </div>
      </div>

      <div className="dashboard-metrics-grid">
        <MetricCard
          title="Active Projects"
          value={metrics.activeProjects}
          icon="🚀"
          trend="+1 from last month"
        />
        <MetricCard
          title="Open Tasks"
          value={metrics.totalOpenTasks}
          icon="📋"
          trend="5 critical issues"
        />
        <MetricCard
          title="Recent Deployments"
          value={metrics.recentDeployments}
          icon="⚡"
          trend="100% success rate"
        />
        <MetricCard
          title="Team Members"
          value={teamMembers.length}
          icon="👥"
          trend="4 currently active"
        />
      </div>

      <div className="dashboard-main-grid">
        <div className="dashboard-left-column">
          <div className="dashboard-section-header">
            <h3 className="dashboard-section-title">Active Projects</h3>
          </div>
          <ProjectList projects={projects} />

          <div className="dashboard-activity-section">
            <div className="dashboard-section-header">
              <h3 className="dashboard-section-title">Team Activity Feed</h3>
            </div>
            <ActivityFilter
              currentFilter={activityFilter}
              onFilterChange={setActivityFilter}
            />
            <LegacyActivityWidget activities={filteredActivities} maxItems={5} />
          </div>
        </div>

        <div className="dashboard-right-column">
          <TeamMemberList members={teamMembers} />
        </div>
      </div>
    </div>
  );
};
