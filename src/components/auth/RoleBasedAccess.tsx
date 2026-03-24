import React from 'react';

interface RoleBasedAccessProps {
  children: React.ReactNode;
  allowedRoles: string[];
}

export const RoleBasedAccess: React.FC<RoleBasedAccessProps> = ({ children, allowedRoles }) => {
  const userStr = localStorage.getItem('user');
  const user = userStr ? JSON.parse(userStr) : null;

  if (!user || !allowedRoles.includes(user.role)) {
    return null;
  }

  return <>{children}</>;
};