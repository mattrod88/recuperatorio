import React, { useContext } from 'react';
import { ContextoCarrito } from '../../context/CarritoContexto';
import { NavLink } from 'react-router-dom';

export default function Carrito() {
  const { carrito, eliminarDelCarrito, vaciarCarrito } = useContext(ContextoCarrito);

  if (carrito.length === 0) {
    return <p className="p-4">Tu carrito está vacío.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Tu Carrito</h2>
      <ul className="space-y-4">
        {carrito.map(({ producto, cantidad }) => {
          const precio = producto.precio.toLocaleString('es-ar', {
            style: 'currency', currency: 'ARS', minimumFractionDigits: 2
          });
          return (
            <li key={producto.id} className="flex items-center justify-between p-4 border rounded">
              <div className="flex items-center space-x-4">
                <img src={producto.imagen} alt={producto.nombre} className="w-16 h-16 object-cover rounded" />
                <div>
                  <h3 className="font-semibold">{producto.nombre}</h3>
                  <p>Cantidad: {cantidad}</p>
                </div>
              </div>
              <div className="text-right">
                <p>{precio}</p>
                <button
                  onClick={() => eliminarDelCarrito(producto.id)}
                  className="mt-2 text-sm text-red-600 hover:underline"
                >Eliminar</button>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="mt-6 flex justify-between">
        <button
          onClick={vaciarCarrito}
          className="bg-red-500 text-lime-900 px-4 py-2 rounded hover:bg-red-600"
        >Vaciar carrito</button>
        <NavLink to="/checkout" className="bg-green-600 text-lime-900 px-4 py-2 rounded hover:bg-green-700">
          Finalizar compra
        </NavLink>
      </div>
    </div>
  );
}