import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const token = window.localStorage.getItem('token');

  if (!token) {
    // If the user is not authenticated, redirect to the sign-in page
    return <Navigate to="/signin" replace />;
  }

  // If the user is authenticated, render the specified component
  return <Route {...rest} element={<Component />} />;
};

export default PrivateRoute;
