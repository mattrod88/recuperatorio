import { useEffect, useState, useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { CarritoContexto } from "../contexts/CarritoContexto";

export default function Producto(props) {
  const [imagen, setImagen] = useState("");
  const { agregarAlCarrito } = useContext(CarritoContexto);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:4002/productos/${props.producto.id}/imagenes`)
      .then((response) => response.json())
      .then((imagenes) => {
        setImagen(`data:image/jpg;base64,${imagenes[0].imagenData}`);
      });
  }, []);

  const precio = props.producto.precio.toLocaleString("es-ar", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
  });

  return (
    <div className="max-w-sm rounded-lg shadow-lg bg-white">
      <NavLink to={`/producto/${props.producto.id}`}>
        <img
          className="rounded-t-lg w-full h-64 object-cover"
          src={imagen}
          alt={props.producto.nombre}
        />
      </NavLink>
      <div className="p-4">
        <h5 className="text-lg font-semibold mb-2">{props.producto.nombre}</h5>
        <p className="text-gray-700 text-base mb-3">{precio}</p>
        <button
          className="bg-lime-900 hover:bg-lime-800 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            agregarAlCarrito(props.producto);
            navigate("/carrito");
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
