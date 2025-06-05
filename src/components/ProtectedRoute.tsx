import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const ProtectedRoute: React.FC = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    // You can replace this with a more sophisticated loading spinner
    return <div>Loading session...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />; // Use Outlet to render child routes
};

export default ProtectedRoute;
