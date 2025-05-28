
import React, { useEffect, useState } from "react";
import CardUsuario from "./CardUsuario";


export default function TablaCategorias({autenticacion}) {
  const [categorias, setCategorias] = useState([]);
  console.log(autenticacion);

  useEffect(() => {
    async function fetchCategorias() {
      const response = await fetch(
        `http://localhost:4002/categorias`, {
          method: 'GET',
          headers: {
            "Authorization": "Bearer " + autenticacion.accessToken
          }
        }
      );
      const data = await response.json();
      setCategorias(data.content);
    }
    fetchCategorias();
  }, []);

    return (
       <main className="flex-grow items-center">
         <div className="shadow-md sm:rounded-lg ml-80 mr-0">
           <table className="w-full text-sm text-right  text-gray-500 dark:text-gray-400">
             <thead className="text-xs text-gray-700 uppercase bg-lime-600 dark:bg-gray-700 dark:text-gray-400 ml-80">
               <tr>
                 <th scope="col" className="pl-6 py-3">
                   ID
                 </th>
                 <th scope="col" className="px-6 py-3">
                   Nombre
                 </th>
                 </tr>
             </thead>
             <tbody>
             {categorias.length > 0 &&
               categorias.map((categoria) => 
               (
                <tr >
                <td>
                    {categoria.id}
                </td>
                  <td>
                    {categoria.descripcion}
                </td>
                </tr>

               ))}
               </tbody>
           </table>
         </div>
       </main>
  )
}
