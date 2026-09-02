import React from 'react';
import './common.css';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  header,
  footer,
}) => {
  return (
    <div className={`ui-card ${className}`}>
      {header && <div className="ui-card-header">{header}</div>}
      <div className="ui-card-body">{children}</div>
      {footer && <div className="ui-card-footer">{footer}</div>}
    </div>
  );
};
