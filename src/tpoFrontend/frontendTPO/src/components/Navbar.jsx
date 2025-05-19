import Buscador from "./Buscador";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import Logo from '../assets/logo.svg'
import Carrito from '../assets/carrito.svg'
import Lupa from '../assets/lupa.svg'

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
    <nav className="bg-white border-gray-200 shadow-md dark:bg-gray-900 fixed top-0 w-full z-50">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg-green" >
         
          <NavLink to="/"> <img className="h-8"  src={Logo}></img></NavLink>
        </li>
        <li>
          <Dropdown items={items}/>
          
        </li>
        <li >
          <Buscador/>
        </li>
        <li>
           <img className="  w-6"  src={Lupa}></img>
        </li>

        <li>
          <img className=" top-2 h-6 w-6"  src={Carrito}></img>
        </li>
     
    </ul>
    </div>
    </nav>         

  );
}
