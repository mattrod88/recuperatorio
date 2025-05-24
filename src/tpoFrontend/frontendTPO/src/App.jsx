import './tailwind.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from './components/Navbar/Header'
import Footer from './components/Footer/Footer';
import { Rutas } from './Rutas/Todas';
function App() {
  return (
<div className='App'>
<Header/>
<Rutas/>
<Footer/>
</div>

  );
}

export default App;