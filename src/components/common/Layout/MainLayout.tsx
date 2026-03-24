import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

export const MainLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Sidebar isOpen={sidebarOpen} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main style={{ flex: 1, padding: '24px', backgroundColor: '#f3f4f6', overflow: 'auto' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};