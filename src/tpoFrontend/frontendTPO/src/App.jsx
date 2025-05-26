import "./tailwind.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Navbar/Header";
import Footer from "./components/Footer/Footer";
import { Rutas } from "./Rutas/Todas";
import { useState } from "react";
import RutasProtegidas from "./Rutas/RutasProtegidas";
import { useNavigate } from "react-router-dom";

function App() {
  const [autenticacion, setAutenticacion] = useState({
    logueado: false,
    rol: "",
    email: "",
    accessToken: "",
  });

  const alHacerLogin = (auth) => {
    setAutenticacion(auth);
  };

  return (
    <div className="App">
      <Header autenticacion={autenticacion} />
      <Rutas autenticacion={autenticacion} callbackLogin={alHacerLogin} />
      <RutasProtegidas
        autenticacion={autenticacion}
        callbackLogin={alHacerLogin}
      />
      <Footer />
    </div>
  );
}

export default App;
