// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = window.localStorage.getItem('token');
  
  return (
    <Route
      {...rest}
      element={props => 
        token ? <Component {...props} /> : <Navigate to="/signin" />
      }
    />
  );
};

export default PrivateRoute;
