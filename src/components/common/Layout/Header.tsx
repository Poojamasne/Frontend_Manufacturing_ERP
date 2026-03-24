import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  
  const userStr = localStorage.getItem('user');
  const user = userStr ? JSON.parse(userStr) : null;

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <header
      style={{
        backgroundColor: 'white',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        padding: '12px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <button
        onClick={onMenuClick}
        style={{
          background: 'none',
          border: 'none',
          fontSize: '20px',
          cursor: 'pointer',
          padding: '8px',
          borderRadius: '8px',
        }}
      >
        ☰
      </button>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: '#3b82f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              {user?.fullName?.charAt(0) || 'U'}
            </div>
            <span>{user?.fullName || 'User'}</span>
          </button>

          {showDropdown && (
            <div
              style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                backgroundColor: 'white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                borderRadius: '8px',
                minWidth: '200px',
                zIndex: 1000,
              }}
            >
              <div style={{ padding: '12px 16px', borderBottom: '1px solid #e5e7eb' }}>
                <p style={{ fontWeight: '600' }}>{user?.fullName}</p>
                <p style={{ fontSize: '12px', color: '#6b7280' }}>{user?.email}</p>
                <p style={{ fontSize: '11px', color: '#9ca3af', marginTop: '4px' }}>{user?.role}</p>
              </div>
              <button
                onClick={handleLogout}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '12px 16px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#ef4444',
                }}
              >
                🚪 Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};