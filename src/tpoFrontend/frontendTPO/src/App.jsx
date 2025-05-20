

import './tailwind.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ElFooter from './components/Footer';
import Home from './views/Home';
import ListaDeProductos from './components/Catalogo';
import DetalleProducto from './components/DetalleProducto';



function App() {

  return (
    <>
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route  path="/" element={<Home/>}></Route>
            <Route path="/categoria/:nombre_categoria" element={<ListaDeProductos/>}></Route>
            <Route path="/producto/:id" element={<DetalleProducto/>}></Route>
          </Routes>
          <ElFooter/>
      </BrowserRouter>
  
      </>
  )
}

export default App