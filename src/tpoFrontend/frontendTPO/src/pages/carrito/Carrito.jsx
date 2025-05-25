import React from 'react'
import CarritoVacio from './CarritoVacio';
import ListaCarrito from './ListaCarrito';


export default function carrito() {
    const listaCarritoTamano = 0;
  return (
     <main>
        {listaCarritoTamano ? <ListaCarrito/>:<CarritoVacio/> }
    </main>
  )
}
