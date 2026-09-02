import React from 'react';
import './layout.css';

export interface SidebarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentTab, onSelectTab }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'projects', label: 'Projects', icon: '📁' },
    { id: 'team', label: 'Team', icon: '👥' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <aside className="app-sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo-icon">P</div>
        <div className="sidebar-brand-name">Pulse Engine</div>
      </div>
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`sidebar-nav-item ${currentTab === item.id ? 'sidebar-nav-item--active' : ''}`}
            onClick={() => onSelectTab(item.id)}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="sidebar-footer">
        <span>Pulse v1.4.0 • Engineering Hub</span>
      </div>
    </aside>
  );
};
