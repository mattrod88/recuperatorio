import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function CardProducto(props) {
  
  const params = useParams();


  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <NavLink to={`productos/${props.producto.id}`} className="relative">
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
        <Link to={`productos/${props.producto.id}`} >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-lime-900 dark:text-lime">
            {props.producto.nombre}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.producto.descripcion}
        </p>

        <p className="flex justify-between items-center">
          <span className="text-2xl dark:text-gray-200">
            <span>$</span>
            <span>{props.producto.precio}</span>
          </span>
          <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-lime-900 rounded-lg hover:bg-lime-900">
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
