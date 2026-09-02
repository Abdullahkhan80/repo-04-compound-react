import React from 'react';
import './activity.css';
import { ActivityFilterType } from '../../types/activity';

export interface ActivityFilterProps {
  currentFilter: ActivityFilterType;
  onFilterChange: (filter: ActivityFilterType) => void;
}

export const ActivityFilter: React.FC<ActivityFilterProps> = ({
  currentFilter,
  onFilterChange,
}) => {
  const filters: { id: ActivityFilterType; label: string }[] = [
    { id: 'all', label: 'All Activities' },
    { id: 'commit', label: 'Commits' },
    { id: 'pull_request', label: 'Pull Requests' },
    { id: 'deployment', label: 'Deployments' },
    { id: 'task_resolved', label: 'Tasks Resolved' },
    { id: 'release', label: 'Releases' },
  ];

  return (
    <div className="activity-filter-bar">
      {filters.map((item) => (
        <button
          key={item.id}
          type="button"
          className={`activity-filter-btn ${
            currentFilter === item.id ? 'activity-filter-btn--active' : ''
          }`}
          onClick={() => onFilterChange(item.id)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};
