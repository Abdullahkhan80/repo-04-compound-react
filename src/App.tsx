import React, { useState } from 'react';
import { AppLayout } from './components/layout/AppLayout';
import { DashboardOverview } from './components/dashboard/DashboardOverview';
import { ProjectsView } from './components/views/ProjectsView';
import { TeamView } from './components/views/TeamView';
import { Card } from './components/common/Card';
import { useProjects } from './hooks/useProjects';
import { useActivities } from './hooks/useActivities';
import { useMetrics } from './hooks/useMetrics';
import { mockTeamMembers } from './data/mockTeam';

export const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>('dashboard');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const { projects } = useProjects();
  const { activities } = useActivities();
  const metrics = useMetrics(projects, activities);

  const filteredProjects = searchQuery
    ? projects.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : projects;

  const renderContent = () => {
    switch (currentTab) {
      case 'dashboard':
        return (
          <DashboardOverview
            projects={filteredProjects}
            activities={activities}
            teamMembers={mockTeamMembers}
            metrics={metrics}
          />
        );
      case 'projects':
        return <ProjectsView projects={filteredProjects} />;
      case 'team':
        return <TeamView members={mockTeamMembers} />;
      case 'settings':
        return (
          <Card header={<h3>Workspace Configuration</h3>}>
            <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
              Manage notification channels, deployment webhooks, and team access credentials.
            </p>
          </Card>
        );
      default:
        return (
          <DashboardOverview
            projects={filteredProjects}
            activities={activities}
            teamMembers={mockTeamMembers}
            metrics={metrics}
          />
        );
    }
  };

  return (
    <AppLayout
      currentTab={currentTab}
      onSelectTab={setCurrentTab}
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
    >
      {renderContent()}
    </AppLayout>
  );
};

export default App;
