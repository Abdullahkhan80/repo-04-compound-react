import React from 'react';
import './views.css';
import { Project } from '../../types/project';
import { ProjectList } from '../dashboard/ProjectList';

export interface ProjectsViewProps {
  projects: Project[];
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ projects }) => {
  return (
    <div className="view-container">
      <div className="view-header">
        <div>
          <h2>All Engineering Projects</h2>
          <p>Portfolio of ongoing development, infrastructure, and SDK initiatives.</p>
        </div>
      </div>
      <ProjectList projects={projects} />
    </div>
  );
};
