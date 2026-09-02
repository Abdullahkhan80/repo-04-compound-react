import React from 'react';
import './common.css';
import { UserStatus } from '../../types/user';

export interface AvatarProps {
  initials: string;
  size?: 'sm' | 'md' | 'lg';
  status?: UserStatus;
  title?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  initials,
  size = 'md',
  status,
  title,
}) => {
  return (
    <div className={`ui-avatar ui-avatar--${size}`} title={title}>
      <span>{initials}</span>
      {status && <span className={`ui-avatar-status ui-avatar-status--${status}`} />}
    </div>
  );
};
