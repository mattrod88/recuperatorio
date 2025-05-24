import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


export default function Producto(props) {
  const [imagen,setImagen]=useState("");

   useEffect(() => {
    console.log("Voy a pedir productos",props.producto)
    fetch(`http://localhost:4002/productos/${props.producto.id}/imagenes`)
    .then((response)=>response.json())
    .then((imagenes)=>{
      setImagen(`data:image/jpg;base64 ${imagenes[0].imagenData}`)
      console.log(imagen)
    })
     }, []);
     
  const precio = props.producto.precio.toLocaleString("es-ar", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
  });
  return (
    <div className="max-w-sm rounded-lg shadow-lg bg-lime-900 mx-3">
      <NavLink to={`/producto/${props.producto.id}`}>
        <img
          className="rounded-t-lg"
          src={imagen}
          alt={props.producto.nombre}
        />
      </NavLink>
      <div className="p-4">
        <h5 className="text-lg font-semibold mb-2">{props.producto.nombre}</h5>
        <p className="text-white text-base mb-3">{precio}</p>
        <button className="bg-white hover:bg-lime-900 text-lime-900 font-bold py-2 px-4 rounded ">
          <NavLink to={`/carrito/${props.producto.id}`}>
            Agregar al carrito
          </NavLink>
        </button>
      </div>
    </div>
  );
}
