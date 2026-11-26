import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../context/userContext';

const Auth = ({ children }) => {
//   const isLoggedin = false;
// const isLoggedin = !!localStorage.getItem("accessJWT");
//   return isLoggedin ? children : <Navigate to="/" replace />

  const {user} = useUser()
  return user?._id ? children : <Navigate to="/" replace />
}

export default Auth
