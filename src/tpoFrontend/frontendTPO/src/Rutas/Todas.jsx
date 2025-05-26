import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Inicio from "../pages/Inicio/Inicio";

import DetalleProducto from "../pages/detalleProducto/DetalleProducto";
import { ListaProductos } from "../pages/Productos/ListaProductos";
import Auth from "../pages/Sesion/Auth";
import Carrito from "../pages/carrito/Carrito";
import Nosotros from "../pages/seccionesFooter/nosotros";
import TrabajaConNosotros from "../pages/seccionesFooter/trabajaConNosotros";
import Tiendas from "../pages/seccionesFooter/Tiendas";
import Blog from "../pages/seccionesFooter/Blog";
import FormularioContacto from "../pages/seccionesFooter/FormularioContacto";
import Terminos from "../pages/seccionesFooter/Terminos";
import Licencia from "../pages/seccionesFooter/Licencia";
import Politicas from "../pages/seccionesFooter/Politicas";
import { useState } from "react";

export const Rutas = ({callbackLogin,autenticacion}) => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros  />} />
        <Route path="/productos" element={<ListaProductos />} />
        <Route path="/productos/:id" element={<DetalleProducto />} />
        <Route path="/sesion" element={<Auth callbackLogin = {callbackLogin}/>} />
        <Route path="/carrito" element={<Carrito autenticacion={autenticacion}/>} />
        <Route path="/trabajaConNosotros" element={<TrabajaConNosotros />} />
        <Route path="/tiendas" element={<Tiendas />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contactanos" element={<FormularioContacto />} />
        <Route path="/condiciones" element={<Terminos />} />
        <Route path="/licencia" element={<Licencia />} />
        <Route path="/politicaPrivacidad" element={<Politicas />} />
      </Routes>
    </BrowserRouter>
  );
};
