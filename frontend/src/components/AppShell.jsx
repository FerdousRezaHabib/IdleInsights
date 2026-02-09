import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, CheckSquare, Clock, Settings, History, LogOut } from 'lucide-react';

const AppShell = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleQuickLog = () => {
    navigate('/log');
  };

  if (['/login', '/register'].includes(location.pathname)) {
    return <div className="app-container">{children}</div>;
  }

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/tasks', label: 'Tasks', icon: CheckSquare },
    { path: '/log', label: 'Log', icon: Clock },
    { path: '/modes', label: 'Modes', icon: Settings },
    { path: '/history', label: 'History', icon: History },
  ];

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="logo">Procrastination Tracker</div>
        <nav>
          <ul className="sidebar-nav">
            {navItems.map(({ path, label, icon: Icon }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`sidebar-link ${location.pathname === path ? 'active' : ''}`}
                >
                  <Icon size={18} style={{ marginRight: '0.5rem', verticalAlign: 'text-bottom' }} />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <header className="top-bar">
        <div></div> {/* Spacer */}
        <div className="user-profile">
          <button onClick={handleQuickLog} className="quick-log-btn">
            Quick Log
          </button>
          <div className="user-avatar">
            {user?.email?.charAt(0).toUpperCase() || 'U'}
          </div>
          <span className="text-muted">{user?.email || 'user@example.com'}</span>
        </div>
      </header>

      <main className="main-content">
        <div className="grid-container">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AppShell;