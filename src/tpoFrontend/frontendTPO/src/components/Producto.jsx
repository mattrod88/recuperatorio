import { NavLink } from "react-router-dom";

export default function Producto(props) {
  const precio = props.producto.precio.toLocaleString("es-ar", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
  });
  return (
    <div className="max-w-sm rounded-lg shadow-lg">
      <img
        className="rounded-t-lg"
        src={props.producto.imagen}
        alt={`${props.producto.nombre}`}
      />
      <div className="p-4">
        <h5 className="text-lg font-semibold mb-2">{props.producto.nombre}</h5>
        <p className="text-gray-700 text-base">{precio}</p>
          <NavLink
            to={`/producto/${props.producto.id}`}>
            Ver Detalle
          </NavLink>
      </div>
      </div>
  );
}
