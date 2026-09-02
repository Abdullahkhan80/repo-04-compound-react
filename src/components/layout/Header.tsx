import React from 'react';
import './layout.css';
import { Avatar } from '../common/Avatar';

export interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ searchQuery, onSearchChange }) => {
  return (
    <header className="app-header">
      <div className="header-search">
        <input
          type="text"
          placeholder="Search projects, tasks, or updates..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div className="header-actions">
        <div className="header-user-profile">
          <Avatar initials="ER" size="sm" status="online" title="Elena Rostova (Lead Engineer)" />
          <span>Elena Rostova</span>
        </div>
      </div>
    </header>
  );
};
