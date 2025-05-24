import { useEffect, useState } from "react";
import CardProducto from "./componentes/CardProducto";
import { Filtro } from "./componentes/Filtro";

export const ListaProductos = () => {
    const [mostrar,setMostrar]= useState(false);
    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
      async function fetchProductos() {
        const response = await fetch(
          `http://localhost:4002/productos`
        );
        const data = await response.json();
        console.log(data)
        setProductos(data);
      }
      fetchProductos();
  }, []);

  return (
    <main>
      <section className="my-5">
        <div className="my-5 flex justify-between">
          <span className="text-lime-900   text-2xl font-semibold text-center dark:text-lime-900 ">
            Nuestros Productos
          </span>
          <span>
            <button onClick={()=>setMostrar(!mostrar)}
              id="dropdownMenuIconButton"
              data-dropdown-toggle="dropdownDots"
              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700"
              type="button"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
              </svg>
            </button>
          </span>
        </div>

        <div className="flex flex-wrap justify-center lg:flex-row">
          {productos.length > 0 && productos.map((producto)=>(
          <CardProducto producto = {producto} />
          
          ))}
          
        </div>
      </section>

      {mostrar && <Filtro setMostrar={setMostrar}/>}
    </main>
  );
};


     