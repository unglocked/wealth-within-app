import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ element }) => {
  const authContext = useContext(AuthContext);

  if (!authContext || !authContext.currentUser) {
    return <Navigate to="/login" />;
  }

  return element;
};

export default PrivateRoute;