import React from 'react';
import './layout.css';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

export interface AppLayoutProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({
  currentTab,
  onSelectTab,
  searchQuery,
  onSearchChange,
  children,
}) => {
  return (
    <div className="app-layout">
      <Sidebar currentTab={currentTab} onSelectTab={onSelectTab} />
      <div className="app-main">
        <Header searchQuery={searchQuery} onSearchChange={onSearchChange} />
        <main className="app-content">{children}</main>
      </div>
    </div>
  );
};
