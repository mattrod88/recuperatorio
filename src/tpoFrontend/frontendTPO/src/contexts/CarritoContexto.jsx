import React, { createContext, useState } from 'react';

export const ContextoCarrito = createContext();

export function ProveedorCarrito({ children }) {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto, cantidad = 1) => {
    setCarrito(anterior => {
      const existe = anterior.find(item => item.producto.id === producto.id);
      if (existe) {
        return anterior.map(item =>
          item.producto.id === producto.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        );
      }
      return [...anterior, { producto, cantidad }];
    });
  };

  const eliminarDelCarrito = id => {
    setCarrito(anterior => anterior.filter(item => item.producto.id !== id));
  };

  const vaciarCarrito = () => setCarrito([]);

  return (
    <ContextoCarrito.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito }}>
      {children}
    </ContextoCarrito.Provider>
  );
}