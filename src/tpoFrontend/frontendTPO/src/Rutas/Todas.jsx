import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Inicio from "../pages/Inicio/Inicio";

import DetalleProducto from "../pages/detalleProducto/DetalleProducto";
import { ListaProductos } from "../pages/Productos/ListaProductos";
import Auth from "../pages/Sesion/Auth";
import Carrito from "../pages/carrito/Carrito";


export const Rutas = () => {
  const access_token = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<ListaProductos />} />
        <Route path="/productos/:id" element={<DetalleProducto />} />
        <Route path="/sesion" element={<Auth />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </BrowserRouter>
  );
};
