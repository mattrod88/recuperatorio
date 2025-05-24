import { Routes, Route, BrowserRouter } from "react-router-dom";
import  Home  from "../views/Home";
import { ListaProductos } from "../components/ListaProductos";
import ListaDeProductos from "../components/Catalogo";
import DetalleProducto from "../components/DetalleProducto";
import Carrito from "../components/Carrito";
export const Rutas = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/productos" element={<ListaProductos />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/categoria/:nombre_categoria"
            element={<ListaDeProductos />}
          />
          <Route path="/producto/:id" element={<DetalleProducto />} />
          <Route path="/checkout" element={<Carrito />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};
