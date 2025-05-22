import './tailwind.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ElFooter from './components/Footer';
import Home from './views/Home';
import ListaDeProductos from './components/Catalogo';
import DetalleProducto from './components/DetalleProducto';
import Carrito from './components/Carrito';
import { ProveedorCarrito } from './contexts/CarritoContexto';

function App() {
  return (
    <ProveedorCarrito>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categoria/:nombre_categoria" element={<ListaDeProductos />} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
        <ElFooter />
      </BrowserRouter>
    </ProveedorCarrito>
  );
}

export default App;