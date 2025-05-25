import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CarruselProducto from './componentes/CarrouselProducto';
import InformacionProducto from './componentes//InformacionProducto';
import { toast } from 'react-toastify';

export default function DetalleProducto() {
 
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [imagenes, setImagenes] = useState([]);
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    async function fetchProducto() {
      const response = await fetch(`http://localhost:4002/productos/${id}`);
      const data = await response.json();
      setProducto(data);
    }

    async function fetchImagenes() {
      const response = await fetch(`http://localhost:4002/productos/${id}/imagenes`);
      const data = await response.json();
      setImagenes(data);
    }

    fetchProducto();
    fetchImagenes();
  }, [id]);

  if (!producto) return <p>Cargando producto...</p>;

  const agregarAlCarrito = () => {
    if (producto) {
     toast(`${producto.nombre} ha sido agregado a tu carrito`)
    }
  };


  return (
    <main className="flex justify-center p-10 max-w-screen-xl mx-auto">
      <div className="flex flex-wrap gap-14 bg-white shadow-2xl rounded-xl p-10 min-w-[900px] min-h-[600px]">
        <CarruselProducto imagenes={imagenes} />
        <InformacionProducto
          producto={producto}
          cantidad={cantidad}
          setCantidad={setCantidad}
          agregarAlCarrito={agregarAlCarrito}
        />
      </div>
    </main>
  );
}
