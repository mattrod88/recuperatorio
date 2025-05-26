import React from 'react'

export default function CardUsuario(usuario) {
  return (
    <tbody>
          <tr className="odd:bg-white odd:dark:bg-lime-900 even:bg-gray-50 even:dark:bg-lime-800 border-b dark:border-lime-700 border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-lime-900 whitespace-nowrap dark:text-white"
            >  </th>
            <td className="px-6 py-4">{usuario.nombre}</td>
            <td className="px-6 py-4">{usuario.apellido}</td>
            <td className="px-6 py-4">{usuario.email}</td>
          </tr>
        </tbody>            
  )
}
