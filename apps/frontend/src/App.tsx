import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { Navigation } from './components/Navigation';
import { Overview } from './pages/Overview';
import { PortfolioOverview } from './pages/PortfolioOverview';
import { ActivityView } from './pages/ActivityView';
import { AccessContext } from './pages/AccessContext';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="min-h-screen relative overflow-hidden">
          {/* Animated background elements */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-indigo/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent-violet/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
          </div>
          <Navigation />
          <div className="relative z-10">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/portfolios" element={<PortfolioOverview />} />
              <Route path="/activity" element={<ActivityView />} />
              <Route path="/access" element={<AccessContext />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

