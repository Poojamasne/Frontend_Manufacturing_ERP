import React from 'react';
import { NavLink } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
}

interface MenuItem {
  path: string;
  name: string;
  icon: string;
}

const menuItems: MenuItem[] = [
  { path: '/sales', name: 'Sales', icon: '💰' },
  { path: '/purchase', name: 'Purchase', icon: '🛒' },
  { path: '/inventory', name: 'Inventory', icon: '📦' },
  { path: '/production', name: 'Production', icon: '🏭' },
  { path: '/planner', name: 'Planner', icon: '📅' },
  { path: '/operator', name: 'Operator', icon: '👷' },
  { path: '/quality', name: 'Quality', icon: '✅' },
  { path: '/hrms', name: 'HRMS', icon: '👥' },
  { path: '/finance', name: 'Finance', icon: '💵' },
  { path: '/reports', name: 'Reports', icon: '📊' },
  { path: '/admin', name: 'Admin', icon: '👑' },
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const userStr = localStorage.getItem('user');
  const user = userStr ? JSON.parse(userStr) : null;
  
  const filteredMenu = user?.module === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.path === `/${user?.module}`);

  if (!isOpen) return null;

  return (
    <aside
      style={{
        width: '280px',
        backgroundColor: '#1f2937',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        position: 'sticky',
        top: 0,
        overflowY: 'auto',
      }}
    >
      <div style={{ padding: '24px', borderBottom: '1px solid #374151' }}>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>🏭 Manufacturing ERP</h1>
        <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '4px' }}>
          {user?.fullName || 'User'} - {user?.role || 'Role'}
        </p>
      </div>

      <nav style={{ flex: 1, padding: '16px 0' }}>
        {filteredMenu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            style={({ isActive }) => ({
              display: 'flex',
              alignItems: 'center',
              padding: '12px 24px',
              margin: '4px 12px',
              borderRadius: '8px',
              backgroundColor: isActive ? '#374151' : 'transparent',
              color: isActive ? 'white' : '#9ca3af',
              textDecoration: 'none',
              transition: 'all 0.2s',
            })}
          >
            <span style={{ fontSize: '20px', marginRight: '12px' }}>{item.icon}</span>
            <span style={{ flex: 1 }}>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div style={{ padding: '16px 24px', borderTop: '1px solid #374151', fontSize: '12px', color: '#6b7280' }}>
        <p>© 2024 Manufacturing ERP</p>
      </div>
    </aside>
  );
};