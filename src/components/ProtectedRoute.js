import React from 'react';
import { Navigate } from 'react-router-dom';

function useAuthCheck() {
  const isLoggedIn = validateToken(localStorage.getItem('token'));
  return isLoggedIn;
}

const validateToken = (token) => {
  if (token && token.length > 0) {
    return true;
  } else {
    return false;
  }
};

function ProtectedRoute({ children }) {
  const isLoggedIn = useAuthCheck();

  return isLoggedIn ? children : <Navigate to="/" replace />;
}

export default ProtectedRoute;
