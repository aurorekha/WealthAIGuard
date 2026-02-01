import { Role, Permission } from '@/types';

export function getEffectivePermissions(role: Role): Permission[] {
  switch (role) {
    case 'admin':
      return [
        { resource: 'tenant', actions: ['read', 'update'] },
        { resource: 'users', actions: ['read', 'create', 'update', 'delete'] },
        { resource: 'portfolios', actions: ['read'] },
        { resource: 'activity', actions: ['read'] },
      ];
    case 'advisor':
      return [
        { resource: 'portfolios', actions: ['read'] },
        { resource: 'clients', actions: ['read'] },
        { resource: 'activity', actions: ['read'] },
      ];
    case 'client':
      return [
        { resource: 'portfolio', actions: ['read'] },
        { resource: 'activity', actions: ['read'] },
      ];
    default:
      return [];
  }
}

