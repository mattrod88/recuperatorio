import Buscador from "./Buscador";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";

import Carrito from '../assets/carrito.svg'
import Usuario from '../assets/usuario.svg'
import React from "react";

export default function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
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
    <nav className="bg-white border-lime-900 shadow-md lime-900:bg-lime-900 fixed top-0 w-full">
       <div className="bg-lime-900 text-white border-bottom-1px-solid hidden lg:block">
        <div className="conatiner">
          <div className="text-center">
             <p>ENTREGA A DOMICILIO SIN COSTO</p>
          </div>
       
      </div>

    </div>
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
      <div className="flex flex-row items-center gap-3 w-full">
       
        <div>
          <NavLink to="/"><h1 className="text-lime-900 font-bold">Tienda Saludable Online</h1></NavLink>
        </div>
        <div>
          <Dropdown items={items}/>
          
        </div>
        <div className="ml-auto flex items-center gap-3" >
         <Buscador/>
         <NavLink to="/carrito"><img className="h-8" src={Carrito}></img></NavLink> 
         <NavLink to="/iniciarSesionORegistrarse"><img className="h-8"src={Usuario}></img></NavLink>
        </div>  
        <div>
          
          </div>   
    </div>
    </div>
    </nav>         
    </>

  );
}
