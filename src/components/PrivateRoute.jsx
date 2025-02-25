// filepath: /Users/victorung/Documents/Visual Studio Projects/Wealth Within app/wealth-within-app/src/components/PrivateRoute.jsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useContext(AuthContext);

  return currentUser ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;