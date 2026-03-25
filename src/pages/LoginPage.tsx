import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Login } from '../components/auth/Login';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = (user: any) => {
    localStorage.setItem('token', 'mock-token');
    localStorage.setItem('user', JSON.stringify(user));
    
    const moduleRoutes: Record<string, string> = {
      
      admin: '/admin',
      sales: '/sales',
      purchase: '/purchase',
      inventory: '/inventory',
      production: '/production',
      operator: '/operator',
      quality: '/quality',
      hrms: '/hrms',
      finance: '/finance',
    };
    
    const redirectPath = moduleRoutes[user.module] || '/sales';
    navigate(redirectPath);
  };

  const handleRegisterClick = () => {
  };

  const handleLoginClick = () => {

  };
  
  return <Login onLoginSuccess={handleLoginSuccess}/>;
};
