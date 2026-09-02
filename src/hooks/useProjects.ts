import { useState } from 'react';
import { Project, ProjectStatus } from '../types/project';
import { mockProjects } from '../data/mockProjects';

export function useProjects() {
  const [projects] = useState<Project[]>(mockProjects);
  const [selectedStatus, setSelectedStatus] = useState<ProjectStatus | 'all'>('all');

  const filteredProjects = selectedStatus === 'all'
    ? projects
    : projects.filter((p) => p.status === selectedStatus);

  const getProjectById = (id: string) => projects.find((p) => p.id === id);

  return {
    projects,
    filteredProjects,
    selectedStatus,
    setSelectedStatus,
    getProjectById,
  };
}
