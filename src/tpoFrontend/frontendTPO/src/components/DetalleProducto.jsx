import { useState } from "react";

import { useContext } from "react";

import { NavLink } from "react-router-dom";

export default function ItemDetail(props) {
//   const cartContext = useContext()
//   const [agregado, setAgregado] = useState(cartContext.isInCart(props.producto.id));

//   function onAdd(cantidad) {
//     cartContext.addToCart(props.producto, cantidad)
//     setAgregado(true);
//   }

//   const precio = props.producto.precio.toLocaleString('es-ar', {
//     style: 'currency',
//     currency: 'ARS',
//     minimumFractionDigits: 2
//   });

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={props.producto.imagen}
        alt={props.item.titulo}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.producto.titulo}</div>
        <p className="text-gray-700 text-base">
          {props.producto.titulo}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        </span>
      </div>
    </div>
  );
}