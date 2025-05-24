import { Routes, Route, BrowserRouter } from "react-router-dom";
import  Inicio  from "../pages/Inicio/Inicio";

import DetalleProducto from "../pages/detalleProducto/DetalleProducto";
import { ListaProductos } from "../pages/Productos/ListaProductos";
export const Rutas = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<ListaProductos/>} />
          <Route path="/productos/:id" element={<DetalleProducto/>} />
          <Route path="/productos/:categoria" element={<ListaProductos/>} />
  

          
        </Routes>
      </BrowserRouter>
    </>
  );
};
