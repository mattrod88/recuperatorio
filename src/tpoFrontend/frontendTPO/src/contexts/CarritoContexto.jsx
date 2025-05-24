import { createContext, useContext, useState } from "react";

export const CarritoContexto = createContext(null);

export function ProveedorCarrito({ children }) {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto, cantidad = 1) => {
    setCarrito((prevCarrito) => {
      const productoExistente = prevCarrito.find(item => item.id === producto.id);

      if (productoExistente) {
        return prevCarrito.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        );
      }

      return [...prevCarrito, { ...producto, cantidad }];
    });
  };

  const eliminarDelCarrito = (productoId) => {
    setCarrito((prevCarrito) =>
      prevCarrito.filter(item => item.id !== productoId)
    );
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <CarritoContexto.Provider
      value={{
        carrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        vaciarCarrito
      }}
    >
      {children}
    </CarritoContexto.Provider>
  );
}

// Custom hook opcional para consumir el contexto
export function useCarrito() {
  return useContext(CarritoContexto);
}