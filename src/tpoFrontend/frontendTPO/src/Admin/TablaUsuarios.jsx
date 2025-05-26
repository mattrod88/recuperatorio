import React, { useEffect, useState } from "react";
import CardUsuario from "./CardUsuario";

export default function TablaUsuarios(autenticacion) {
    const [usuarios, setUsuarios] = useState([]);
    console.log(autenticacion)

    
useEffect(() => {
        async function fetchUsuarios() {
          const response = await fetch(
            `http://localhost:4002/usuarios/registrados`
          );
          const data = await response.json();
          setUsuarios(usuarios);
        }
        fetchUsuarios();
    }, []);


  return (
    <main className="flex-grow">
    <div className="shadow-md sm:rounded-lg ml-80 mr-0">
      <table className="w-full text-sm text-right  text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ml-80">
          <tr>
            <th scope="col" className="pl-6 py-3">
            Nombre
            </th>
            <th scope="col" className="px-6 py-3">
              Apellido
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
          </tr>
        </thead>
         {usuarios.length > 0 && usuarios.map((usuario)=>(
                  <CardUsuario usuario = {usuario} />
                  
      ))}
      </table>
    </div>
    </main>
  );
}
