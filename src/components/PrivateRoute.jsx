import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ element }) => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    console.error("AuthContext is undefined! Make sure AuthProvider is wrapping your app.");
    return <Navigate to="/login" />;
  }

  const { currentUser } = authContext;

  return currentUser ? element : <Navigate to="/login" />;
};

export default PrivateRoute;