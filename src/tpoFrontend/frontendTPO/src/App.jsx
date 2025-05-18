import Navbar from './components/Navbar'
import ElFooter from './components/ElFooter'
import ListaDeProductos from './components/ListaDeProductos'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './tailwind.css'

function App() {

  return (
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<ListaDeProductos/>}/>
            <Route path="/categoria/:nombre_categoria" element={<ListaDeProductos/>}/>
            
          </Routes>
          <ElFooter/>
      </BrowserRouter>
      
  )
}

export default App