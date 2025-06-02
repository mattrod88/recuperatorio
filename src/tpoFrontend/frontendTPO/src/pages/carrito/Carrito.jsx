import React from 'react'
import CarritoVacio from './CarritoVacio';
import ListaCarrito from './ListaCarrito';


export default function carrito({autenticacion}) {
  
    const lista = 2;
  return (
     <main>
        {lista ? <ListaCarrito autenticacion={autenticacion}/>:<CarritoVacio/> }
    </main>
  )
}
