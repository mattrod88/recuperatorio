import DropdownCategoria from "./DropdownCategoria";
import Buscador from "./Buscador";
import React, { useEffect, useState } from "react";
import { DropdownUsuarioLogueado } from "./DropdownUsuarioLogueado";

export default function Header({ autenticacion }) {
  const [openNav, setOpenNav] = useState(false);
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

    return () => {
      window.removeEventListener("resize", () => setOpenNav(false));
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const usuarioDropdown = document.querySelector(".dropdown-usuario");
      if (
        dropdownUsuario &&
        usuarioDropdown &&
        !usuarioDropdown.contains(e.target)
      ) {
        setDropdownUsuario(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [dropdownUsuario]);

  const clickEnBuscar = (e) => {
    e.preventDefault();
    setMostrarBuscador(!mostrarBuscador);
  };

  const toggleDropdownUsuario = (e) => {
    e.stopPropagation();
    setDropdownUsuario(!dropdownUsuario);
  };

  const cerrarSesion = () => {
    //setAuth({ logueado: false, email: "" });
    //setDropdownUsuario(false);
    window.location.href = "/";
  };

  return (
    <main>
      <nav className="bg-white border-gray-500 dark:bg-lime-900 dark:border-gray-700 text-lime-900">
        <div className="mx-auto flex flex-wrap items-center justify-between p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <svg
              className="w-6 h-6 text-lime-900 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M10.9715 12.2168c-.0118.0406-.0234.0795-.0347.1166.0391.0574.0819.1192.1278.1855.3277.473.812 1.172 1.2141 2.0892.2147-.2864.4616-.5799.7447-.8832l-.0024-.0317c-.0236-.3254-.0361-.7783.0091-1.2905.0882-.9978.4095-2.3695 1.4623-3.39555 1.0079-.98229 2.3556-1.42385 3.4044-1.59916.5344-.08932 1.0323-.11665 1.4296-.09869.1954.00883.3932.02974.5707.07034.0872.01996.1979.05097.3114.10232.0867.03927.3102.14854.4769.39195.1453.21217.1993.45929.22.55586.0321.14963.0559.32134.0712.50398.0307.36676.0311.82807-.0291 1.32915-.1181.9828-.4871 2.2522-1.47 3.2102-1.0357 1.0093-2.4736 1.3803-3.5197 1.5249-.542.0749-1.0253.0952-1.3736.0969-.036.0002-.0706.0002-.1037 0-.931.9987-1.2688 1.7317-1.4072 2.3512-.0345.1545-.0581.303-.0739.451.0004.0342.0006.0685.0006.1029v2c0 .5523-.4477 1-1 1s-1-.4477-1-1c0-.1991-.0064-.4114-.0131-.6334-.0142-.4713-.0298-.9868.0117-1.5138-.0358-1.8786-.7555-2.9405-1.40123-3.8932-.13809-.2037-.2728-.4025-.39671-.6032-.05186-.0105-.10709-.0222-.16538-.035-.39471-.0865-.93803-.2268-1.53416-.4432-1.15636-.4197-2.67587-1.1841-3.58743-2.5531-.90552-1.35993-1.03979-2.96316-.96002-4.15955.04066-.60984.13916-1.15131.24451-1.56046.05234-.20327.10977-.38715.16845-.53804.02865-.07367.06419-.15663.10713-.23658.02132-.03968.0522-.09319.0933-.15021.03213-.04456.11389-.15344.24994-.25057.18341-.13093.36351-.16755.42749-.17932.0854-.01572.16019-.01941.21059-.02024.1023-.0017.20235.00733.28493.0176.17089.02126.37298.06155.58906.11526.43651.1085.99747.2886 1.59668.54576 1.16944.50188 2.63819 1.3629 3.52935 2.70126.9248 1.38891.9601 2.99601.818 4.14739-.0726.589-.1962 1.0975-.3016 1.4594Z"
              />
            </svg>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Tienda Online Saludable
            </span>
          </a>

          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
          >
            <span className="sr-only">Abrir menú</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-lime-900 dark:border-gray-700">
              <li>
                <DropdownCategoria items={categorias} />
              </li>

              {autenticacion.logueado ? (
                <li className="relative list-none dropdown-usuario">
                  <button
                    onClick={toggleDropdownUsuario}
                    className="flex items-center hover:text-lime-700 dark:text-white dark:hover:text-lime-300"
                  >
                    {autenticacion.email}
                    <svg
                      className={`w-2.5 h-2.5 ms-2.5 transition-transform ${
                        dropdownUsuario ? "rotate-180" : ""
                      }`}
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
                  {dropdownUsuario && (
                    <DropdownUsuarioLogueado
                      setDropdown={setDropdownUsuario}
                      onLogout={cerrarSesion}
                    />
                  )}
                </li>
              ) : (
                <li>
                  <a
                    href="/sesion"
                    className="flex items-center hover:text-lime-700 dark:text-white dark:hover:text-lime-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-person-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>
                  </a>
                </li>
              )}

              <li>
                <button
                  onClick={clickEnBuscar}
                  className="hover:text-lime-700 dark:text-white dark:hover:text-lime-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </button>
              </li>
              <li>
                <a
                  href="/carrito"
                  className="hover:text-lime-700 dark:text-white dark:hover:text-lime-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-cart-fill"
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
