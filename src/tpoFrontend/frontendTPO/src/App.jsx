import Navbar from './components/Navbar'
import ElFooter from './components/ElFooter'
import ListaDeProductos from './components/ListaDeProductos'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './tailwind.css'
import MainSlider from './components/Carrusel'
import Home from './components/Home'


function App() {

  return (
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/categoria/:nombre_categoria" element={<ListaDeProductos/>}/>
            
          </Routes>
          <ElFooter/>
      </BrowserRouter>
      
  )
}

export default App