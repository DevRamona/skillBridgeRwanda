import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/authContext';

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuthContext(); // Assuming `isLoading` is part of your auth context

  if (isLoading) {
    // Show a loader or fallback UI while authentication status is being determined
    return <div>Loading...</div>;
  }

  // Redirect to login if the user is not authenticated
  return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
