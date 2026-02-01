import { useAppSelector } from '@/store/hooks';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function Overview() {
  const { tenantId, tenantName, actorId, actorName, role } = useAppSelector(
    (state) => state.auth
  );
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      if (card) {
        gsap.from(card, {
          opacity: 1,
          y: 30,
          duration: 0.6,
          delay: i * 0.1,
          ease: 'power3.out',
        });
      }
    });
  }, []);

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 gradient-text">Overview</h1>
          <p className="text-gray-300 text-lg">System anchor point and navigation hub</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div
            ref={(el) => el && (cardsRef.current[0] = el)}
            className="glass-strong rounded-2xl p-8 card-hover border border-dark-border"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-blue flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Tenant Context</h2>
            </div>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-gray-300 mb-1">Tenant ID</dt>
                <dd className="text-lg font-mono text-primary-400 font-semibold">{tenantId}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-300 mb-1">Tenant Name</dt>
                <dd className="text-lg text-white font-medium">{tenantName}</dd>
              </div>
            </dl>
          </div>

          <div
            ref={(el) => el && (cardsRef.current[1] = el)}
            className="glass-strong rounded-2xl p-8 card-hover border border-dark-border"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-indigo to-accent-violet flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Actor Context</h2>
            </div>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-gray-300 mb-1">Actor ID</dt>
                <dd className="text-lg font-mono text-neon-cyan font-semibold">{actorId}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-300 mb-1">Actor Name</dt>
                <dd className="text-lg text-white font-medium">{actorName}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-300 mb-1">Role</dt>
                <dd className="text-lg">
                  <span className="px-3 py-1 rounded-full bg-accent-violet/20 text-accent-violet border border-accent-violet/50 capitalize">
                    {role}
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div
          ref={(el) => el && (cardsRef.current[2] = el)}
          className="glass-strong rounded-2xl p-8 mb-6 card-hover border border-dark-border"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 animate-pulse"></div>
            System Status
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center p-4 rounded-xl bg-dark-surface/60 border border-primary-500/30">
              <div className="relative w-3 h-3 mr-3">
                <span className="absolute w-3 h-3 bg-primary-500 rounded-full animate-ping"></span>
                <span className="absolute w-3 h-3 bg-primary-500 rounded-full"></span>
              </div>
              <span className="text-white font-medium">System operational</span>
            </div>
            <div className="flex items-center p-4 rounded-xl bg-dark-surface/60 border border-primary-500/30">
              <div className="relative w-3 h-3 mr-3">
                <span className="absolute w-3 h-3 bg-primary-500 rounded-full animate-ping"></span>
                <span className="absolute w-3 h-3 bg-primary-500 rounded-full"></span>
              </div>
              <span className="text-white font-medium">Tenant isolation active</span>
            </div>
            <div className="flex items-center p-4 rounded-xl bg-dark-surface/60 border border-primary-500/30">
              <div className="relative w-3 h-3 mr-3">
                <span className="absolute w-3 h-3 bg-primary-500 rounded-full animate-ping"></span>
                <span className="absolute w-3 h-3 bg-primary-500 rounded-full"></span>
              </div>
              <span className="text-white font-medium">Role-based access enforced</span>
            </div>
          </div>
        </div>

        <div
          ref={(el) => el && (cardsRef.current[3] = el)}
          className="glass-strong rounded-2xl p-8 border border-dark-border"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Navigation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              to="/portfolios"
              className="group relative p-6 rounded-xl glass border border-dark-border card-hover overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-blue flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="font-semibold text-white mb-2">Portfolio Overview</div>
                <div className="text-sm text-gray-300">
                  View portfolios based on your role
                </div>
              </div>
            </Link>
            <Link
              to="/activity"
              className="group relative p-6 rounded-xl glass border border-dark-border card-hover overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-indigo/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-indigo to-accent-violet flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="font-semibold text-white mb-2">Activity & Audit</div>
                <div className="text-sm text-gray-300">
                  View recent system activities
                </div>
              </div>
            </Link>
            <Link
              to="/access"
              className="group relative p-6 rounded-xl glass border border-dark-border card-hover overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-violet/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-violet to-accent-purple flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div className="font-semibold text-white mb-2">Access & Role</div>
                <div className="text-sm text-gray-300">
                  View your effective permissions
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
