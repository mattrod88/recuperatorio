import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Dropdown = ({ items }) => {
  const toggle = () => {
    setAbierto(!abierto)

  }
  const [abierto, setAbierto] = useState(false);
  const activeStyle = "underline underline-offset-4";
  return (
   <>

      <div>
        <button
          type="button"
          className="w-full rounded-full border border-gray-100 bg-white px-5 py-3 pr-20 text-base shadow-md transition-shadow duration-200 hover:shadow-lg focus:border-gray-300 focus:outline-none"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={toggle}
        >
          Categorias
          <svg
            className="-mr-1 size-0.5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div
        className="absolute z-10 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1"
      >
        {abierto && (
          <div className="py-1" role="none">
            {items.map((item, indice) => (
              <a
                key={indice}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabIndex = "-1"
                id="menu-item-"
                indice
                onClick={toggle}
              >
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                >
                  {item.titulo}
                </NavLink>
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default Dropdown;
