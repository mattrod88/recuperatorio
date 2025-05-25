import React from 'react'
import { Link } from 'react-router-dom'

export default function CardCarrito(props) {
  return (
     <div className="flex flex-wrap justify-between border-b dark:border-slate-700 max-w-4xl m-auto p-2 mb-5 ">
      <div className="flex">
          <Link to={`productos/${props.producto.id}`}>
            <img className="w-32 rounded" src={props.producto.imagen} alt={props.producto.nombre} />
          </Link>
          <div className="">
            <Link to={`productos/${props.producto.id}`}>
              <p className="text-lg ml-2 dark:text-slate-200">{props.producto.nombre}</p>
            </Link>            
            <button className="text-base ml-2 text-red-400">Eliminar</button>
          </div>
      </div>
      <div className="text-lg m-2 dark:text-slate-200">
        <span>${props.producto.precio}</span>
      </div>
    </div>
  )
}
