import InicioAdmin from "../admin/InicioAdmin";
import Carrito from "../pages/carrito/Carrito";
import FormularioContacto from "../pages/seccionesFooter/FormularioContacto";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "../pages/Sesion/Auth";
import TablaUsuarios from "../admin/TablaUsuarios";


export default function RutasProtegidas({ callbackLogin, autenticacion }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/carrito"
          element={<Carrito autenticacion={autenticacion} />}
        />
        <Route
          path="/contactanos"
          element={<FormularioContacto autenticacion={autenticacion} />}
        />
        <Route
          path="/carrito"
          element={<Carrito autenticacion={autenticacion} />}
        />
        <Route
          path="/sesion"
          element={<Auth callbackLogin={callbackLogin} />}
        />
    

        <Route
          path="/admin"
          element={<InicioAdmin autenticacion={autenticacion} />}
        />
         <Route
          path="/admin/usuarios"
          element={<TablaUsuarios autenticacion={autenticacion} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
