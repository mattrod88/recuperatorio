import "./tailwind.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Navbar/Header";
import Footer from "./components/Footer/Footer";
import { Rutas } from "./Rutas/Todas";
import { useState } from "react";
import { Flip, toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import RutasProtegidas from "./Rutas/RutasProtegidas";

function App() {
  const [autenticacion, setAutenticacion] = useState({logueado: false, rol:"",email:"",accessToken:""});

  const alHacerLogin = (accessToken) => {
    if (accessToken) {
      const datos = jwtDecode(accessToken)
      toast.success("Bienvenido " + datos.sub, {position: "top-right", transition: Flip})
      setAutenticacion({rol: datos['rol'], email: datos.sub, accessToken: accessToken, logueado: true})
    }
    
  };
  return (
    <div className="App">
      <Header autenticacion={autenticacion}/>
      <Rutas autenticacion={autenticacion} callbackLogin={alHacerLogin} />
      <RutasProtegidas autenticacion={autenticacion} callbackLogin={alHacerLogin} />
      <Footer />
    </div>
  );
}

export default App;
