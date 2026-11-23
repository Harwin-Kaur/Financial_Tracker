import React from 'react';
import { Navigate } from 'react-router-dom';

const Auth = ({ children }) => {
//   const isLoggedin = false;
const isLoggedin = !!localStorage.getItem("accessJWT");
  return isLoggedin ? children : <Navigate to="/" replace />
}

export default Auth
