import React from 'react';
import './dashboard.css';
import { Project } from '../../types/project';
import { ProjectCard } from './ProjectCard';

export interface ProjectListProps {
  projects: Project[];
}

export const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};
