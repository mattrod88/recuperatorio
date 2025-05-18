import Navbar from './components/Navbar'
import ElFooter from './components/ElFooter'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './tailwind.css'

function App() {

  return (
      <BrowserRouter>
          <Navbar/>
          <Routes>
          </Routes>
          <ElFooter/>
      </BrowserRouter>
  )
}

export default App