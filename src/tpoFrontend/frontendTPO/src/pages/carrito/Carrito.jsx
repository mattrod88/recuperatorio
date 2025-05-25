import React from 'react'
import CarritoVacio from './CarritoVacio';
import ListaCarrito from './ListaCarrito';


export default function carrito() {
    const lista = 2;
  return (
     <main>
        {lista ? <ListaCarrito/>:<CarritoVacio/> }
    </main>
  )
}
