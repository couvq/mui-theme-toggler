import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Landing from "./Landing";

const useAuth = () => {
    // real hook would return true or false if you are authenticated
    // (my site will set this state in context as a result of calling my Auth service with user state)
  const user = { isAdmin: false };

  return user && user.isAdmin;
};

const ProtectedRoutes = () => {
  const isAdmin = useAuth();

  return isAdmin ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
