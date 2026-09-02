import { ActivityItem } from '../types/activity';

export const mockActivities: ActivityItem[] = [
  {
    id: 'act-1',
    type: 'pull_request',
    actor: {
      id: 'u-1',
      name: 'Elena Rostova',
      avatar: 'ER',
    },
    projectId: 'prj-101',
    projectName: 'Atlas Analytics Engine',
    summary: 'Merged PR #342: Optimize aggregation window buffer',
    detail: 'Reduced telemetry latency by 35% across high-throughput clusters.',
    timestamp: '12 minutes ago',
    metadata: {
      branch: 'perf/aggregation-window',
      hash: 'a9f1c32',
    },
  },
  {
    id: 'act-2',
    type: 'deployment',
    actor: {
      id: 'u-5',
      name: 'Devon Hayes',
      avatar: 'DH',
    },
    projectId: 'prj-103',
    projectName: 'Edge Gateway v2',
    summary: 'Deployed release v2.4.0 to production',
    detail: 'Zero downtime rollout across us-east and eu-west edge points of presence.',
    timestamp: '45 minutes ago',
    metadata: {
      version: 'v2.4.0',
      environment: 'production',
    },
  },
  {
    id: 'act-3',
    type: 'commit',
    actor: {
      id: 'u-2',
      name: 'Marcus Vance',
      avatar: 'MV',
    },
    projectId: 'prj-102',
    projectName: 'Customer Portal Redesign',
    summary: 'Pushed commit: Update billing invoice table layout',
    detail: 'Refactored CSS grid to auto-fit viewport widths on tablet displays.',
    timestamp: '2 hours ago',
    metadata: {
      branch: 'feature/portal-billing',
      hash: 'b482e19',
    },
  },
  {
    id: 'act-4',
    type: 'task_resolved',
    actor: {
      id: 'u-3',
      name: 'Siddharth Patel',
      avatar: 'SP',
    },
    projectId: 'prj-104',
    projectName: 'Mobile SDK Bridge',
    summary: 'Resolved issue #88: Android Keystore key generation error',
    detail: 'Fixed key generation parameters on API level 34 and above.',
    timestamp: '3 hours ago',
  },
  {
    id: 'act-5',
    type: 'release',
    actor: {
      id: 'u-5',
      name: 'Devon Hayes',
      avatar: 'DH',
    },
    projectId: 'prj-101',
    projectName: 'Atlas Analytics Engine',
    summary: 'Created release candidate v1.9.0-rc.2',
    detail: 'Internal staging tests passed; scheduled for sign-off review.',
    timestamp: '5 hours ago',
    metadata: {
      version: 'v1.9.0-rc.2',
      environment: 'staging',
    },
  },
  {
    id: 'act-6',
    type: 'commit',
    actor: {
      id: 'u-4',
      name: 'Chloe Tremblay',
      avatar: 'CT',
    },
    projectId: 'prj-102',
    projectName: 'Customer Portal Redesign',
    summary: 'Added Figma design token sync spec to repository',
    detail: 'Updated typography scales and primary brand accent color mappings.',
    timestamp: '7 hours ago',
    metadata: {
      branch: 'design/token-sync',
      hash: 'c819d44',
    },
  },
];
