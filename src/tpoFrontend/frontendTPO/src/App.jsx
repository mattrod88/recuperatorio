

import './tailwind.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ElFooter from './components/ElFooter';
import Home from './components/Home';
import ListaDeProductos from './components/ListaDeProductos';



function App() {

  return (
    <>
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route  path="/" element={<Home/>}></Route>
            <Route path="/categoria/:nombre_categoria" element={<ListaDeProductos/>}></Route>
          </Routes>
          <ElFooter/>
      </BrowserRouter>
  
      </>
  )
}

export default App