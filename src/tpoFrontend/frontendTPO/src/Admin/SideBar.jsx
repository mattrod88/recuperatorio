import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";

export default function SideBar({ items }) {
  const [openNav, setOpenNav] = React.useState(false);

  const opcionesUsuarios = [
    {
      descripcion: "Ver usuarios",
      link: "/usuarios",
    },
  ];

  const opcionesCategorias = [
    {
      descripcion: "Crear categoria",
      link: "/crearCategoria",
    },
    {
      descripcion: "Ver categorias",
      link: "/categorias",
    },
  ];
  const opcionesProductos = [
    {
      descripcion: "Crear Producto",
      link: "/crearProducto",
    },
    {
      descripcion: "Ver productos",
      link: "/productos",
    },
  ];

  return (
    <div className="relative flex h-full w-full max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border p-4 text-lime-900 shadow-xl shadow-blue-gray-900/5">
      <div className="p-4 mb-2">
        <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-lime-900">
          Menu
        </h5>
      </div>
      <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-lime-700">
        <div className="relative block w-full">
          <div
            role="button"
            className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <button
              type="button"
              className="flex items-center justify-between w-full p-3 font-sans text-xl antialiased font-semibold leading-snug text-left transition-colors border-b-0 select-none border-b-blue-gray-100 text-blue-gray-700 hover:text-blue-gray-900"
            >
              <div className="grid mr-4 place-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <p className="block mr-auto font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
                TiendaOnlineSaludable
              </p>
              <span className="ml-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-4 h-4 mx-auto transition-transform"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
          <div className="overflow-hidden">
            <div className="block w-full py-1 font-sans text-sm antialiased font-light leading-normal text-gray-700">
              <nav className="flex min-w-[240px] flex-col gap-1 p-0 font-sans text-base font-normal text-blue-gray-700">
                

                <Dropdown
                  titulo="Productos"
                  items={opcionesProductos}
                ></Dropdown>

                <Dropdown
                  titulo="Categorias"
                  items={opcionesCategorias}
                ></Dropdown>
                <Dropdown titulo="Usuarios" items={opcionesUsuarios}></Dropdown>
                <div>
                  <ul>
                    <li>
                      <button>
                        <h1 className="block px-4 py-2 hover:bg-gray-100 dark:hover:green-lime-900 dark:hover text-lime-900 ">
                          Perfil
                        </h1>
                      </button>
                    </li>
                    <li>
                      <button>
                        <h1 className="block px-4 py-2 hover:bg-gray-100 dark:hover:green-lime-900 dark:hover text-lime-900 ">
                          Settings
                        </h1>
                      </button>
                    </li>
                    <li>
                      <button
                        type="submit"
                        className="w-full text-white bg-lime-700 hover:bg-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-lime-600 dark:hover:bg-lime-700"
                      >
                        Cerrar Sesión
                      </button>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
