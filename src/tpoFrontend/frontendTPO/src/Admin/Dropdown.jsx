import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Dropdown({ items }) {

const titulos = ["Pedidos", "Productos", "Categorias", "Usuarios"];
       titulos.map((titulo) =>
         <h1 >{titulo} </h1>
);
        


  const toggle = (e) => {
    e.preventDefault();
    setAbierto(!abierto);
  };
  console.log(items);
  const [abierto, setAbierto] = useState(false);
  const activeStyle = "underline underline-offset-4";

  return (
    <>
      <button
        type="button"
        onClick={toggle}
        id="dropdownNavbar"
        className="relative flex items-center justify-between w-full py-2 px-3 text-lime-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-lime-900 md:w-auto dark:text-lime-900 md:dark:hover:text-lime-900 dark:focus:text-lime-900 dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
      >
        {titulos}
  
        <svg
          className="w-2.5 h-2.5 ms-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {abierto && (
        <div
          id="dropdownNavbar"
          className="z-10  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-green-lime-900  absolute block"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-lime-900"
            aria-labelledby="dropdownLargeButton"
          >
            <li>
           

              {items.map((item, indice) => (
                <a
                  key={indice}
                  href={`/productos?categoria=${item.link}`}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:green-lime-900 dark:hover:text-lime-900 "
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-"
                  indice
                >
                  {item.descripcion}
                </a>
              ))}
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
