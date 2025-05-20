import { NavLink } from "react-router-dom";

export default function Producto(props) {
  const precio = props.producto.precio.toLocaleString("es-ar", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
  });
  return (
    <div className="max-w-sm rounded-lg shadow-lg bg-white">
      <NavLink to={`/producto/${props.producto.id}`}>
        <img
          className="rounded-t-lg"
          src={props.producto.imagen}
          alt={`${props.producto.nombre}`}
        />
      </NavLink>
      <div className="p-4">
        <h5 className="text-lg font-semibold mb-2">{props.producto.nombre}</h5>
        <p className="text-gray-700 text-base mb-3">{precio}</p>
        <button className="bg-lime-900 hover:bg-lime-900 text-white font-bold py-2 px-4 rounded ">
          <NavLink to={`/carrito/${props.producto.id}`}>
            Agregar al carrito
          </NavLink>
        </button>
      </div>
    </div>
  );
}
