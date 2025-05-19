import { useEffect, useState } from "react";
import Producto from "./Producto";
import { useParams } from "react-router-dom";
import { obtenerProductos } from "../assets/API";
import MainSlider from "./Carrusel";


export default function ListaDeProductos() {
  const [productos, setProductos] = useState([]);
  const params = useParams();

  useEffect(() => {
    let promesa = obtenerProductos(params);
    promesa.then((productos) => setProductos(productos));
  }, [params]);

  return (
    <>

      <div className='flex flex-col items-center mt-20 mb-40  w-full"'>
        <div className="grid gap-4 grid-cols-4  max-w-screen-lg ">
   
          {productos.length > 0 ? (
            productos.map((producto) => (
              <Producto key={producto.id} producto={producto} />
            ))
          ) : (
            <>
              <span>Cargando productos...</span>
            </>
          )}
        </div>
      </div>
    </>
  );
}
