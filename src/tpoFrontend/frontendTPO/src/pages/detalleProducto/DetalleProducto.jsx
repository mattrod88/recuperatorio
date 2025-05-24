import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function DetalleProducto() {
    const [producto,setProducto] = useState({});
    const { id } = useParams();

     useEffect(() => {
          async function fetchProducto() {
            const response = await fetch(
              `http://localhost:4002/productos/${id}`
            );
            const data = await response.json();
            setProducto(data);
          }
          fetchProducto();
      }, [id]);
    
  return (
    producto && 
    <main>
        <section>
          <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-lime-900 dark:text-lime-900">{producto.nombre}</h1>
          <p className="mb-5 text-lg text-center text-gray-900 dark:text-lime-900">{producto.descripcion}</p>
          <div className="flex flex-wrap justify-around">
            <div className="max-w-xl my-3">
              <img className="rounded" src="" alt={producto.imagen} />
            </div>
            <div className="max-w-xl my-3">
              <p className="text-3xl font-bold text-gray-900 dark:text-lime-900">
                <span className="mr-1">$</span>
                <span className="">{producto.precio}</span>
              </p>
              {/* <p className="my-4 select-none">
                { producto.favorito && <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">BEST SELLER</span> }
                { producto.conStock && <span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">INSTOCK</span> }
                { !producto.conStock && <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">OUT OF STOCK</span> }
              </p> */}
              <p className="my-3">
                <button className="text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-lime-600 dark:hover:bg-lime-700 focus:outline-none dark:focus:ring-blue-800">Agregar al carrito <i className="ml-1 bi bi-plus-lg"></i></button>
              </p>
            </div>
          </div>
        </section>
      </main> 
  )
}