import { Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import AuthGuard from './components/shared/AuthGuard';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import TasksPage from './pages/TasksPage';
import LogPage from './pages/LogPage';
import ModePage from './pages/ModePage';

// Components
import { LayoutDashboard, CheckSquare, Clock, LogOut } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  if (['/login', '/register'].includes(location.pathname)) return null;

  return (
    <nav className="card" style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem', background: 'linear-gradient(to right, #6366f1, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        Procrastination Tracker
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/dashboard" className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`}>
          <LayoutDashboard size={18} style={{ marginRight: '0.5rem', verticalAlign: 'text-bottom' }} /> Dashboard
        </Link>
        <Link to="/tasks" className={`nav-link ${location.pathname === '/tasks' ? 'active' : ''}`}>
          <CheckSquare size={18} style={{ marginRight: '0.5rem', verticalAlign: 'text-bottom' }} /> Tasks
        </Link>
        <Link to="/log" className={`nav-link ${location.pathname === '/log' ? 'active' : ''}`}>
          <Clock size={18} style={{ marginRight: '0.5rem', verticalAlign: 'text-bottom' }} /> Log Avoidance
        </Link>
        <button onClick={handleLogout} className="nav-link" style={{ background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          <LogOut size={18} style={{ marginRight: '0.5rem' }} /> Logout
        </button>
      </div>
    </nav>
  );
};

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<AuthGuard />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/log" element={<LogPage />} />
          <Route path="/modes/:modeId" element={<ModePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
