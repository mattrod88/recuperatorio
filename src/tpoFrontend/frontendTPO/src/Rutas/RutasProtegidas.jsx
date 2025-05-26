import InicioAdmin from "../admin/InicioAdmin";
import Carrito from "../pages/carrito/Carrito";
import FormularioContacto from "../pages/seccionesFooter/FormularioContacto";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "../pages/Sesion/Auth";
import TablaUsuarios from "../admin/TablaUsuarios";
import { ProtectedRoute } from "./ProtectedRoute";

export default function RutasProtegidas({ callbackLogin, autenticacion }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/carrito"
          element={
            <ProtectedRoute autenticacion={autenticacion}>
              <Carrito autenticacion={autenticacion}></Carrito>
            </ProtectedRoute>
          }
        />
        <Route
          path="/contactanos"
          element={
            <ProtectedRoute autenticacion={autenticacion}>
              <FormularioContacto
                autenticacion={autenticacion}
              ></FormularioContacto>
            </ProtectedRoute>
          }
        />
        <Route
          path="/carrito"
          element={
            <ProtectedRoute autenticacion={autenticacion}>
              <Carrito autenticacion={autenticacion}></Carrito>
            </ProtectedRoute>
          }
        />
        <Route
          path="/sesion"
          element={<Auth callbackLogin={callbackLogin}></Auth>}
        />
        <Route
          path="/admin"
          element={
          <ProtectedRoute autenticacion={autenticacion}><InicioAdmin autenticacion={autenticacion}></InicioAdmin></ProtectedRoute>}
        />
        <Route
          path="/admin/usuarios"
          element={
             <ProtectedRoute autenticacion={autenticacion}> <TablaUsuarios autenticacion={autenticacion}></TablaUsuarios></ProtectedRoute>}
        />
      </Routes>
    </BrowserRouter>
  );
}
