export type Role = 'admin' | 'advisor' | 'client';

export interface TenantContext {
  tenantId: string;
  tenantName: string;
}

export interface ActorContext {
  actorId: string;
  actorName: string;
  role: Role;
}

export interface RequestContext {
  tenant: TenantContext;
  actor: ActorContext;
}

export interface Portfolio {
  id: string;
  clientId: string;
  clientName: string;
  totalValue: number;
  lastUpdated: string;
}

export interface Activity {
  id: string;
  timestamp: string;
  actorId: string;
  actorName: string;
  role: Role;
  action: string;
  resource: string;
  resourceId: string;
}

export interface Permission {
  resource: string;
  actions: string[];
}

