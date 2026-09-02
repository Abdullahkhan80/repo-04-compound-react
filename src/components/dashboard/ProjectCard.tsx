import React from 'react';
import './dashboard.css';
import { Project } from '../../types/project';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

export interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getStatusBadge = (status: Project['status']) => {
    switch (status) {
      case 'on_track':
        return <Badge variant="success">On Track</Badge>;
      case 'at_risk':
        return <Badge variant="warning">At Risk</Badge>;
      case 'delayed':
        return <Badge variant="danger">Delayed</Badge>;
      case 'completed':
        return <Badge variant="info">Completed</Badge>;
      default:
        return <Badge variant="default">{status}</Badge>;
    }
  };

  return (
    <Card className="project-card">
      <div className="project-card-header">
        <h4 className="project-card-name">{project.name}</h4>
        {getStatusBadge(project.status)}
      </div>
      <p className="project-card-desc">{project.description}</p>
      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{ width: `${project.progress}%` }}
        />
      </div>
      <div className="project-card-meta">
        <span>Progress: {project.progress}%</span>
        <span>{project.openTasks} open tasks</span>
      </div>
    </Card>
  );
};
