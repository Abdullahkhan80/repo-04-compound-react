import { useState } from 'react';
import { ActivityItem, ActivityFilterType } from '../types/activity';
import { mockActivities } from '../data/mockActivities';

export function useActivities() {
  const [activities, setActivities] = useState<ActivityItem[]>(mockActivities);
  const [filter, setFilter] = useState<ActivityFilterType>('all');

  const filteredActivities = filter === 'all'
    ? activities
    : activities.filter((a) => a.type === filter);

  const addActivity = (item: ActivityItem) => {
    setActivities((prev) => [item, ...prev]);
  };

  return {
    activities,
    filteredActivities,
    filter,
    setFilter,
    addActivity,
  };
}
