import React from 'react';
import './dashboard.css';
import { User } from '../../types/user';
import { Card } from '../common/Card';
import { Avatar } from '../common/Avatar';

export interface TeamMemberListProps {
  members: User[];
}

export const TeamMemberList: React.FC<TeamMemberListProps> = ({ members }) => {
  return (
    <Card
      header={<h3 className="dashboard-section-title">Team Availability</h3>}
    >
      <div className="team-member-list">
        {members.map((member) => (
          <div key={member.id} className="team-member-item">
            <div className="team-member-info">
              <Avatar
                initials={member.avatar}
                status={member.status}
                size="sm"
              />
              <div className="team-member-details">
                <span className="team-member-name">{member.name}</span>
                <span className="team-member-role">{member.role}</span>
              </div>
            </div>
            <span className="team-member-tasks">
              {member.activeTasks} tasks
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};
