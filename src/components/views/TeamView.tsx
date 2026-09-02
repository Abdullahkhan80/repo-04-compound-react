import React from 'react';
import './views.css';
import { User } from '../../types/user';
import { Card } from '../common/Card';
import { Avatar } from '../common/Avatar';
import { Badge } from '../common/Badge';

export interface TeamViewProps {
  members: User[];
}

export const TeamView: React.FC<TeamViewProps> = ({ members }) => {
  return (
    <div className="view-container">
      <div className="view-header">
        <div>
          <h2>Engineering Team Directory</h2>
          <p>Core engineering contributors, assignments, and availability.</p>
        </div>
      </div>
      <div className="team-grid">
        {members.map((member) => (
          <Card key={member.id}>
            <div className="team-card-inner">
              <Avatar
                initials={member.avatar}
                status={member.status}
                size="lg"
              />
              <div className="team-card-info">
                <span className="team-card-name">{member.name}</span>
                <span className="team-card-role">{member.role}</span>
                <span className="team-card-email">{member.email}</span>
                <div style={{ marginTop: '0.25rem' }}>
                  <Badge variant={member.status === 'online' ? 'success' : 'default'}>
                    {member.status} • {member.activeTasks} active tasks
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
