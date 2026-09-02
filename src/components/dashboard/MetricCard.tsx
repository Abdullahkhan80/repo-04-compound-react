import React from 'react';
import './dashboard.css';

export interface MetricCardProps {
  title: string;
  value: string | number;
  icon: string;
  trend?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  icon,
  trend,
}) => {
  return (
    <div className="metric-card">
      <div className="metric-card-header">
        <span className="metric-card-title">{title}</span>
        <span className="metric-card-icon">{icon}</span>
      </div>
      <div className="metric-card-value">{value}</div>
      {trend && <div className="metric-card-trend">{trend}</div>}
    </div>
  );
};
