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
        <Route path="/productos/:categoria" element={<ListaProductos />} />
        <Route path="/sesion" element={<Auth />} />
        <Route path="/sesion" element={<Carrito />} />
        {/* <Route
          path="/carrito"
          element={
            <RutasProtegidas>
              <Carrito />
            </RutasProtegidas>
          } */}
      
      </Routes>
    </BrowserRouter>
  );
};
