import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import Dropdown from "./dropdown";

export default function NavBar() {
  
  const items = [
    {
      titulo: 'Frutas Secas',
      link: "/categoria/frutas_secas"
    },
    {
      titulo: 'Frutas Deshidratadas ',
      link: "/categoria/frutas_deshidratadas"
    },
        {
      titulo: 'Semillas',
      link: "/categoria/semillas"
    },
    {
      titulo: 'Snacks Saludables',
      link: "/categoria/snacks"
    },
        {
      titulo: 'Harinas Integrales y Alternativas',
      link: "/categoria/harinas"
    },
    {
      titulo: 'Mermeladas Saludables',
      link: "/categoria/mermeladas"
    },
        {
      titulo: 'Aderezos Naturales',
      link: "/categoria/aderezos"
    },
    {
      titulo: 'Bebidas Saludables',
      link: "/categoria/bebidas"
    }
  
  ]

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg-green">
          <NavLink to="/">Tienda Online Saludable</NavLink>
        </li>
        <li>
          <Dropdown items={items}/>
          
        </li>
        

        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
}