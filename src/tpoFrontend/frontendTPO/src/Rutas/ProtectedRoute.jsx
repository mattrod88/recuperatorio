import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ autenticacion, children }) => {
  console.log(children)
  console.log(autenticacion)
  if (!autenticacion.logueado) {
    return <Navigate to="/sesion" replace />;
  }
  return children;
};
