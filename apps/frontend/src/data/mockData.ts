import { Portfolio, Activity, Role } from '@/types';

export const mockPortfolios: Portfolio[] = [
  {
    id: 'portfolio-001',
    clientId: 'client-001',
    clientName: 'John Doe',
    totalValue: 1250000,
    lastUpdated: '2025-01-25T10:30:00Z',
  },
  {
    id: 'portfolio-002',
    clientId: 'client-002',
    clientName: 'Jane Smith',
    totalValue: 850000,
    lastUpdated: '2025-01-25T09:15:00Z',
  },
  {
    id: 'portfolio-003',
    clientId: 'client-003',
    clientName: 'Robert Johnson',
    totalValue: 2100000,
    lastUpdated: '2025-01-24T16:45:00Z',
  },
];

export const mockActivities: Activity[] = [
  {
    id: 'activity-001',
    timestamp: '2025-01-26T11:00:00Z',
    actorId: 'actor-001',
    actorName: 'System Administrator',
    role: 'admin',
    action: 'viewed',
    resource: 'portfolio',
    resourceId: 'portfolio-001',
  },
  {
    id: 'activity-002',
    timestamp: '2025-01-26T10:45:00Z',
    actorId: 'actor-002',
    actorName: 'Financial Advisor',
    role: 'advisor',
    action: 'accessed',
    resource: 'client',
    resourceId: 'client-002',
  },
  {
    id: 'activity-003',
    timestamp: '2025-01-26T10:30:00Z',
    actorId: 'actor-003',
    actorName: 'John Doe',
    role: 'client',
    action: 'viewed',
    resource: 'portfolio',
    resourceId: 'portfolio-001',
  },
];

export function getPortfoliosForRole(role: Role, actorId: string): Portfolio[] {
  switch (role) {
    case 'admin':
      return mockPortfolios;
    case 'advisor':
      return mockPortfolios;
    case 'client':
      return mockPortfolios.filter((p) => p.clientId === actorId);
    default:
      return [];
  }
}

export function getActivitiesForRole(role: Role, actorId: string): Activity[] {
  if (role === 'admin') {
    return mockActivities;
  }
  return mockActivities.filter((a) => a.actorId === actorId);
}

