import Buscador from "./Buscador";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import Logo from '../assets/logo.svg'
import Carrito from '../assets/carrito.svg'
import Usuario from '../assets/usuario.svg'

export default function NavBar() {
  const items = [
    {
      titulo: "Frutas Secas",
      link: "/categoria/frutas_Secas",
    },
    {
      titulo: "Frutas Deshidratadas ",
      link: "/categoria/Frutas",
    },
    {
      titulo: "Semillas",
      link: "/categoria/Semillas",
    },
    {
      titulo: "Snacks Saludables",
      link: "/categoria/Snacks",
    },
    {
      titulo: "Harinas Integrales y Alternativas",
      link: "/categoria/Harinas",
    },
    {
      titulo: "Mermeladas Saludables",
      link: "/categoria/Mermeladas",
    },
    {
      titulo: "Aderezos Naturales",
      link: "/categoria/Aderezos",
    },
    {
      titulo: "Bebidas Saludables",
      link: "/categoria/Bebidas",
    },
  ];

  return (
    <>
  
    <nav className="bg-white border-lime-900 shadow-md lime-900:bg-lime-900 fixed top-0 w-full z-50">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lime-900" >
         
          <NavLink to="/"> <img className="h-8"  src={Logo}></img></NavLink>
        </li>
        <li>
          <NavLink to="/"><h1 className="text-lime-900 font-bold">Tienda Saludable Online</h1></NavLink>
        </li>
        <li>
          <Dropdown items={items}/>
          
        </li>
        <li >
          <NavLink to="/resultado"> <Buscador/></NavLink>
        </li>
        <li >
         <NavLink to="/carrito"><img className="h-8" src={Carrito}></img></NavLink> 
        </li>
        <li >
         <NavLink to="/iniciarSesionORegistrarse"><img className="h-8"src={Usuario}></img></NavLink>  
        </li>
     
    </ul>
    </div>
    </nav>         
    </>

  );
}
