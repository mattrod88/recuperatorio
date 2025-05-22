import { useEffect, useState } from "react";
import Producto from "./Producto";
import { useParams } from "react-router-dom";
import MainSlider from "./Carrusel";


export default function ListaDeProductos(props) {
  const [productos, setProductos] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch("http://localhost:4002/productos")
    .then((response)=>response.json())
    .then((productos)=>{
      setProductos(productos)
    
    })
    // let promesa = obtenerProductos(params, props.filtro);
    // promesa.then((productos) => setProductos(productos));
  }, [params]);

  return (
    <>
  
      <div className='flex flex-col items-center mt-40 mb-40  w-full bg-lime-900"'>
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
