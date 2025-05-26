import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Inicio from "../pages/Inicio/Inicio";
import DetalleProducto from "../pages/detalleProducto/DetalleProducto";
import { ListaProductos } from "../pages/Productos/ListaProductos";
import Auth from "../pages/Sesion/Auth";
import Tiendas from "../pages/seccionesFooter/Tiendas";
import Blog from "../pages/seccionesFooter/Blog";
import Terminos from "../pages/seccionesFooter/Terminos";
import Licencia from "../pages/seccionesFooter/Licencia";
import Politicas from "../pages/seccionesFooter/Politicas";
import { useState } from "react";
import ListaProductosAdmin from "../admin/InicioAdmin";
import Nosotros from "../pages/seccionesFooter/Nosotros";
import TrabajaConNosotros from "../pages/seccionesFooter/TrabajaConNosotros";
import InicioAdmin from "../admin/InicioAdmin";

export const Rutas = (autenticacion) => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros  />} />
        <Route path="/productos" element={<ListaProductos />} />
        <Route path="/productos/:id" element={<DetalleProducto />} /> 
        <Route path="/trabajaConNosotros" element={<TrabajaConNosotros />} />
        <Route path="/tiendas" element={<Tiendas />} />
        <Route path="/blog" element={<Blog />} /> 
        <Route path="/condiciones" element={<Terminos />} />
        <Route path="/licencia" element={<Licencia />} />
        <Route path="/politicaPrivacidad" element={<Politicas />} />
       
      </Routes>
    </BrowserRouter>
  );
};
