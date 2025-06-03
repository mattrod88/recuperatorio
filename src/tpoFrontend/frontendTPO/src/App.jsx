import "./tailwind.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Navbar/Header";
import Footer from "./components/Footer/Footer";
import { Rutas } from "./Rutas/Todas";
import { useState } from "react";
import RutasProtegidas from "./Rutas/RutasProtegidas";

let carritoInicial = {
  productos: [],
  agregar: function(producto) {
    this.productos.push(producto)
     this.cuandoSeAgregaUnProducto(producto)
  },
  cuandoSeAgregaUnProducto: function (producto){},
  calcularTotal: function() {
    const total = this.productos.reduce((acumulado, producto) => {
      return acumulado + producto.precio
    }, 0)
    return total
  }
};

function App() {
  const [autenticacion, setAutenticacion] = useState({
    logueado: false,
    rol: "",
    email: "",
    accessToken: "",
  });
  const [carrito, setCarrito] = useState(carritoInicial)

  carrito.cuandoSeAgregaUnProducto = productoAgregado

  const alHacerLogin = (auth) => {
    setAutenticacion(auth);
  };

  function productoAgregado(producto) {
    console.log("Se agrego el producto:", producto)
    console.log(carrito)
    setCarrito(carrito)
  }


  return (
    <div className="App">
      <Header autenticacion={autenticacion} />
      <Rutas autenticacion={autenticacion} carrito={carrito} />
      <RutasProtegidas
        autenticacion={autenticacion}
        callbackLogin={alHacerLogin}
      />
      <Footer />
    </div>
  );
}

export default App;


