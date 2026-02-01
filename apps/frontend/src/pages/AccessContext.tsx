import { useAppSelector } from '@/store/hooks';
import { getEffectivePermissions } from '@/utils/permissions';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function AccessContext() {
  const { tenantId, actorId, role } = useAppSelector((state) => state.auth);
  const permissions = getEffectivePermissions(role);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      if (card) {
        gsap.from(card, {
          opacity: 1,
          scale: 0.95,
          duration: 0.5,
          delay: i * 0.1,
          ease: 'power3.out',
        });
      }
    });
  }, [permissions]);

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-4 gradient-text">Access & Role Context</h1>
          <p className="text-gray-300 text-lg">Explicit permission display</p>
        </div>

        <div className="glass-strong rounded-2xl p-6 mb-6 border border-dark-border">
          <h2 className="text-xl font-semibold text-gray-100 mb-4 flex items-center">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-violet to-accent-purple flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            Purpose
          </h2>
          <p className="text-sm text-gray-300 mb-2">
            This page makes authority explicit. It shows why you can see what you can see.
          </p>
          <p className="text-sm text-gray-300">
            No ability to change anything yet. This page prevents UI from lying about access.
          </p>
        </div>

        <div className="glass-strong rounded-2xl p-6 mb-6 border border-dark-border">
          <h2 className="text-xl font-semibold text-gray-100 mb-6">Current Context</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-dark-surface/50 border border-dark-border">
              <dt className="text-xs font-medium text-gray-300 mb-2 uppercase tracking-wider">Tenant ID</dt>
              <dd className="text-sm font-mono text-primary-400 font-semibold">{tenantId}</dd>
            </div>
            <div className="p-4 rounded-xl bg-dark-surface/60 border border-dark-border">
              <dt className="text-xs font-medium text-gray-300 mb-2 uppercase tracking-wider">Actor ID</dt>
              <dd className="text-sm font-mono text-primary-400 font-semibold">{actorId}</dd>
            </div>
            <div className="p-4 rounded-xl bg-dark-surface/60 border border-dark-border">
              <dt className="text-xs font-medium text-gray-300 mb-2 uppercase tracking-wider">Role</dt>
              <dd className="text-sm">
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-accent-indigo to-accent-violet text-white capitalize font-medium">
                  {role}
                </span>
              </dd>
            </div>
          </div>
        </div>

        <div className="glass-strong rounded-2xl p-6 border border-dark-border">
          <h2 className="text-xl font-semibold text-gray-100 mb-4">Effective Permissions</h2>
          <p className="text-sm text-gray-300 mb-6">
            Permissions are derived from your role, not configured individually.
          </p>
          <div className="space-y-4">
            {permissions.length === 0 ? (
              <p className="text-sm text-gray-400 text-center py-8">No permissions assigned</p>
            ) : (
              permissions.map((permission, index) => (
                <div
                  key={index}
                  ref={(el) => el && (cardsRef.current[index] = el)}
                  className="glass rounded-xl p-5 border border-dark-border card-hover"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-indigo/20 flex items-center justify-center mr-3 border border-primary-500/30">
                      <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div className="font-semibold text-lg text-gray-100 capitalize">{permission.resource}</div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {permission.actions.map((action) => (
                      <span
                        key={action}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-gradient-to-r from-primary-500/20 to-accent-indigo/20 text-primary-400 border border-primary-500/30"
                      >
                        {action}
                      </span>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="mt-6 glass rounded-xl p-4 border border-accent-violet/30">
          <p className="text-sm text-gray-300">
            <strong className="text-accent-violet">Note:</strong> These permissions are read-only projections. They cannot be
            modified through this interface. All access control is enforced at the API boundary.
          </p>
        </div>
      </div>
    </div>
  );
}
