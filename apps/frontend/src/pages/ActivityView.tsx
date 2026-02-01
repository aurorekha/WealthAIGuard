import { useAppSelector } from '@/store/hooks';
import { getActivitiesForRole } from '@/data/mockData';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function ActivityView() {
  const { role, actorId } = useAppSelector((state) => state.auth);
  const activities = getActivitiesForRole(role, actorId);
  const rowRef = useRef<HTMLTableRowElement[]>([]);

  useEffect(() => {
    rowRef.current.forEach((row, i) => {
      if (row) {
        gsap.from(row, {
          opacity: 1,
          x: -20,
          duration: 0.4,
          delay: i * 0.05,
          ease: 'power2.out',
        });
      }
    });
  }, [activities]);

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin':
        return 'from-primary-500 to-accent-blue';
      case 'advisor':
        return 'from-accent-indigo to-accent-violet';
      case 'client':
        return 'from-accent-violet to-accent-purple';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-4 gradient-text">Activity & Audit View</h1>
          <p className="text-gray-300 text-lg">Read-only audit log of system actions</p>
        </div>

        <div className="glass-strong rounded-2xl p-6 mb-6 border border-dark-border">
          <h2 className="text-xl font-semibold text-gray-100 mb-4 flex items-center">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-indigo to-accent-violet flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            Purpose
          </h2>
          <p className="text-sm text-gray-300 mb-2">
            This view establishes auditability by recording all system actions.
          </p>
          <p className="text-sm text-gray-300">
            Each entry records: who did what, when, under which role. This is where AI will later
            explain "what happened."
          </p>
        </div>

        <div className="glass-strong rounded-2xl overflow-hidden border border-dark-border">
          <div className="px-6 py-4 border-b border-dark-border bg-gradient-to-r from-accent-indigo/10 to-transparent">
            <h2 className="text-xl font-semibold text-gray-100">Recent Activities</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-dark-surface/50 border-b border-dark-border">
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                    Timestamp
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                    Actor
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                    Action
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                    Resource
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                    Resource ID
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dark-border">
                {activities.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-8 text-center text-gray-400">
                      No activities recorded
                    </td>
                  </tr>
                ) : (
                  activities.map((activity, index) => (
                    <tr
                      key={activity.id}
                      ref={(el) => el && (rowRef.current[index] = el)}
                      className="hover:bg-dark-surface/30 transition-colors group"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {new Date(activity.timestamp).toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                        {activity.actorName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${getRoleColor(activity.role)} text-white capitalize`}>
                          {activity.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-primary-400 font-medium">{activity.action}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {activity.resource}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-400">
                        {activity.resourceId}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 glass rounded-xl p-4 border border-accent-indigo/30">
          <p className="text-sm text-gray-300">
            <strong className="text-accent-indigo">Note:</strong> This is a read-only audit log. All activities are recorded
            automatically. AI explanation capabilities will be added in a future milestone.
          </p>
        </div>
      </div>
    </div>
  );
}
