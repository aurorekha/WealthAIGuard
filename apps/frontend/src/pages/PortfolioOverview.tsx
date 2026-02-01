import { useAppSelector } from '@/store/hooks';
import { getPortfoliosForRole } from '@/data/mockData';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function PortfolioOverview() {
  const { role, actorId } = useAppSelector((state) => state.auth);
  const portfolios = getPortfoliosForRole(role, actorId);
  const tableRef = useRef<HTMLTableRowElement[]>([]);

  useEffect(() => {
    tableRef.current.forEach((row, i) => {
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
  }, [portfolios]);

  const getRoleDescription = () => {
    switch (role) {
      case 'admin':
        return 'Viewing aggregate portfolio data across all clients';
      case 'advisor':
        return 'Viewing portfolios for assigned clients';
      case 'client':
        return 'Viewing your own portfolio';
      default:
        return '';
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-4 gradient-text">Portfolio Overview</h1>
          <p className="text-gray-300 text-lg">Role-scoped portfolio visibility</p>
        </div>

        <div className="glass-strong rounded-2xl p-6 mb-6 border border-dark-border">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-100 mb-2">Scope</h2>
              <p className="text-sm text-gray-300 mb-1">
                Role: <span className="font-medium text-primary-400 capitalize">{role}</span>
              </p>
              <p className="text-sm text-gray-300">{getRoleDescription()}</p>
            </div>
            <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary-500/20 to-accent-indigo/20 border border-primary-500/30">
              <div className="text-2xl font-bold text-primary-400">{portfolios.length}</div>
              <div className="text-xs text-gray-300">Portfolios</div>
            </div>
          </div>
        </div>

        <div className="glass-strong rounded-2xl overflow-hidden border border-dark-border">
          <div className="px-6 py-4 border-b border-dark-border bg-gradient-to-r from-primary-500/10 to-transparent">
            <h2 className="text-xl font-semibold text-gray-100">Portfolios</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-dark-surface/50 border-b border-dark-border">
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                    Portfolio ID
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                    Client
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                    Total Value
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                    Last Updated
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dark-border">
                {portfolios.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-8 text-center text-gray-400">
                      No portfolios available
                    </td>
                  </tr>
                ) : (
                  portfolios.map((portfolio, index) => (
                    <tr
                      key={portfolio.id}
                      ref={(el) => el && (tableRef.current[index] = el)}
                      className="hover:bg-dark-surface/30 transition-colors group"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-mono text-primary-400 group-hover:text-primary-300 transition-colors">
                          {portfolio.id}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                        {portfolio.clientName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-lg font-bold text-gray-100">
                          ${portfolio.totalValue.toLocaleString()}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {new Date(portfolio.lastUpdated).toLocaleString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {role === 'admin' && (
          <div className="mt-6 glass rounded-xl p-4 border border-primary-500/30">
            <p className="text-sm text-gray-300">
              <strong className="text-primary-400">Admin view:</strong> Showing aggregate portfolio data. Individual client
              details are available but not displayed in aggregate view.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
