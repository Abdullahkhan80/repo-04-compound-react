import React from 'react';
import './LegacyActivityWidget.css';
import { ActivityItem } from '../../types/activity';

export interface LegacyActivityWidgetProps {
  activities: ActivityItem[];
  maxItems?: number;
  title?: string;
}

export const LegacyActivityWidget: React.FC<LegacyActivityWidgetProps> = ({
  activities,
  maxItems = 5,
  title = 'System Activity Log',
}) => {
  const displayedActivities = activities.slice(0, maxItems);

  return (
    <div className="legacy-activity-widget">
      <div className="legacy-activity-widget__header">
        <h4 className="legacy-activity-widget__title">{title}</h4>
        <span className="legacy-activity-widget__count">
          Showing {displayedActivities.length} of {activities.length}
        </span>
      </div>
      <table className="legacy-activity-widget__table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Member</th>
            <th>Project</th>
            <th>Summary</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {displayedActivities.map((act) => (
            <tr key={act.id}>
              <td>
                <span
                  className={`legacy-activity-widget__type-tag legacy-activity-widget__type-tag--${act.type}`}
                >
                  {act.type.replace('_', ' ')}
                </span>
              </td>
              <td>
                <span className="legacy-activity-widget__user">{act.actor.name}</span>
              </td>
              <td>
                <span className="legacy-activity-widget__project">{act.projectName}</span>
              </td>
              <td>
                <div>{act.summary}</div>
                {act.metadata?.hash && (
                  <span className="legacy-activity-widget__meta">
                    #{act.metadata.hash}
                  </span>
                )}
                {act.metadata?.version && (
                  <span className="legacy-activity-widget__meta">
                    {act.metadata.version}
                  </span>
                )}
              </td>
              <td>
                <span className="legacy-activity-widget__time">{act.timestamp}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
