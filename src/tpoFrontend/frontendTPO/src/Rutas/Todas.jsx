import { Routes, Route, BrowserRouter } from "react-router-dom";
import  Inicio  from "../pages/Inicio/Inicio";
import { ListaProductos } from "../pages/Productos/listaProductos";
import Carrito from "../components/Carrito";
export const Rutas = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<ListaProductos/>} />
          <Route path="/carrito" element={<Carrito/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
