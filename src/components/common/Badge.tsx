import React from 'react';
import './common.css';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className = '',
}) => {
  return (
    <span className={`ui-badge ui-badge--${variant} ${className}`}>
      {children}
    </span>
  );
};
