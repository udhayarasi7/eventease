import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

// This component wraps protected routes
const PrivateRoute = ({ children }) => {
  const location = useLocation();
  // Check if user is logged in
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    // Not logged in, redirect to login page
    return <Navigate to="/login" replace />;
  }

  // Prevent providers from accessing user routes
  const isProvider = user.userType === 'provider';
  const userOnlyRoutes = ['/home', '/services', '/about'];
  
  if (isProvider && userOnlyRoutes.some(route => location.pathname.startsWith(route))) {
    return <Navigate to="/provider/dashboard" replace />;
  }

  // Prevent users from accessing provider routes
  const isUser = user.userType === 'user';
  const providerOnlyRoutes = ['/provider/dashboard'];
  
  if (isUser && providerOnlyRoutes.some(route => location.pathname.startsWith(route))) {
    return <Navigate to="/home" replace />;
  }

  // Logged in, render the protected component
  return children;
};

export default PrivateRoute;
