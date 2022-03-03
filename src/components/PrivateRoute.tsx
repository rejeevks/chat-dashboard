import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children , isAuthenticated}: { children: any , isAuthenticated:any}) => {

  const useAuth = () => {
    return true;
 
  };
console.log(isAuthenticated)
  const auth = useAuth();
  return auth ? children : <Navigate to="/" />;
};

export default PrivateRoute;
