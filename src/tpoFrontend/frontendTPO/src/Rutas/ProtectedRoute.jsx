import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ autenticacion, children }) => {
  if (!autenticacion) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
