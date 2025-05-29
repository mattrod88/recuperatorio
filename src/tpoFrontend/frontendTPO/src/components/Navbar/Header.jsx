import DropdownCategoria from "./DropdownCategoria";
import Buscador from "./Buscador";
import React, { useEffect, useState } from "react";
import { DropdownUsuarioLogueado } from "./DropdownUsuarioLogueado";

export default function Header({ autenticacion, setAuth }) {
  const [openNav, setOpenNav] = React.useState(false);
  const [categorias, setCategorias] = useState();
  const [mostrarBuscador, setMostrarBuscador] = useState(false);
  const [dropdownUsuario, setDropdownUsuario] = useState(false);


  useEffect(() => {
    async function fetchCategorias() {
      const response = await fetch(`http://localhost:4002/categorias`);
      const data = await response.json();
      setCategorias(data.content);
    }

    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );

    fetchCategorias();
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      if (dropdownUsuario) setDropdownUsuario(false);
    };

    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [dropdownUsuario]);

  const clickEnBuscar = () => {
    setMostrarBuscador(!mostrarBuscador);
  };

  const toggleDropdownUsuario = (e) => {
  e.stopPropagation(); // ← Previene la propagación
  setDropdownUsuario(!dropdownUsuario);
};
  const cerrarSesion = () => {
    // Lógica de cierre de sesión
    localStorage.removeItem("authToken"); // Elimina el token
    setAuth({ logueado: false, email: "" }); // Actualiza el estado de autenticación
    setDropdownUsuario(false);
    // Opcional: recargar la página para limpiar el estado
    window.location.href = "/";
  };

  return (
    <main>
      <nav className="bg-white border-gray-500 dark:bg-lime-900 dark:border-gray-700 text-lime-900">
        <div className="mx-auto flex flex-wrap items-center justify-between p-4">
          {/* Logo y título (sin cambios) */}
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            {/* ... SVG y texto del logo ... */}
          </a>

          {/* Botón móvil (sin cambios) */}
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-lime-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            {/* ... Icono de menú móvil ... */}
          </button>

          {/* Menú principal */}
          <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-lime-900 dark:border-gray-700">
              <li>
                <DropdownCategoria items={categorias} />
              </li>

              {autenticacion.logueado ? (
                <li className="relative list-none"> {/* Añade list-none */}
  <button
    onClick={toggleDropdownUsuario}
    className="flex items-center hover:text-lime-700"
  >
    {autenticacion.email}
    {/* Icono de flecha */}
  </button>
  {dropdownUsuario && (
    <div className="absolute top-full right-0 z-50"> {/* Añade z-50 y top-full */}
      <DropdownUsuarioLogueado
        setDropdown={setDropdownUsuario}
        onLogout={cerrarSesion}
      />
    </div>
  )}
</li>
              ) : (
                <li>
                  <a href="/sesion">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="50"
                      fill="currentColor"
                      className="bi bi-person-fill hover:text-lime-700"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>
                  </a>
                </li>
              )}

              {/* Iconos de búsqueda y carrito (sin cambios) */}
              <li>
                <button onClick={clickEnBuscar}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="50"
                    fill="currentColor"
                    className="bi bi-search hover:text-lime-700"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </button>
              </li>
              <li>
                <a href="/carrito">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="50"
                    fill="currentColor"
                    className="bi bi-cart-fill hover:text-lime-700"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {mostrarBuscador && <Buscador />}
    </main>
  );
}