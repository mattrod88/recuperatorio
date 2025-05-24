import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function CardProducto(props) {
  
  const params = useParams();


  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <NavLink to={`/productos/${props.producto.id}`} className="relative">
        <span className="absolute top-4 left-2 px-2 bg-lime-900 bg-opacity-90 text-white rounded">
          {props.producto.categoria}
        </span>
        <img
          className="rounded-t-lg w-full h-64"
          src="/imagen1.jpg"
          alt="imagen"
        ></img>
      </NavLink>
      <div className="p-5">
        <Link to={`/productos/${props.producto.id}`} >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-lime-900 dark:text-lime">
            {props.producto.nombre}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.producto.descripcion}
        </p>

        <p className="flex justify-between items-center">
          <span className="text-2xl dark:text-gray-200 mx-2">
            <span>$</span>
            <span>{props.producto.precio}</span>
          </span>
          <button className="text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-lime-600 dark:hover:bg-lime-700 focus:outline-none dark:focus:ring-blue-800">
            <NavLink to={`/carrito/${props.producto.id}`}>
              Agregar al carrito
            </NavLink>

            <i className="ml-1 bi bi-plus-lg"></i>
          </button>
        </p>
      </div>
    </div>
  );
}
