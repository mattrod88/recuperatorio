import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { CarritoContexto } from "../contexts/CarritoContexto";

export default function Carrito() {
  const { carrito, eliminarDelCarrito, vaciarCarrito } = useContext(CarritoContexto);
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);

  const calcularTotal = () => {
    return carrito.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
  };

  const formatearPrecio = (precio) => {
    return precio.toLocaleString("es-ar", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 2,
    });
  };

  const handleVaciarCarrito = () => {
    setMostrarConfirmacion(true);
  };

  const confirmarVaciarCarrito = () => {
    vaciarCarrito();
    setMostrarConfirmacion(false);
  };

  const cancelarVaciarCarrito = () => {
    setMostrarConfirmacion(false);
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-3xl font-bold text-lime-900 mb-8">Tu Carrito de Compras</h1>
      
      {carrito.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl mb-4">Tu carrito está vacío</p>
          <NavLink 
            to="/" 
            className="bg-lime-900 text-white px-6 py-2 rounded-md hover:bg-lime-800 transition-colors"
          >
            Ir a comprar
          </NavLink>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="hidden md:grid grid-cols-12 bg-lime-100 p-4 font-semibold text-lime-900">
                <div className="col-span-5">Producto</div>
                <div className="col-span-2 text-center">Precio</div>
                <div className="col-span-2 text-center">Cantidad</div>
                <div className="col-span-2 text-center">Subtotal</div>
                <div className="col-span-1"></div>
              </div>
              
              {carrito.map((producto) => (
                <div key={producto.id} className="grid grid-cols-12 p-4 border-b items-center">
                  <div className="col-span-5 flex items-center gap-4">
                    <img 
                      src={producto.imagen} 
                      alt={producto.nombre} 
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <NavLink 
                        to={`/producto/${producto.id}`} 
                        className="font-medium hover:text-lime-900"
                      >
                        {producto.nombre}
                      </NavLink>
                    </div>
                  </div>
                  <div className="col-span-2 text-center">
                    {formatearPrecio(producto.precio)}
                  </div>
                  <div className="col-span-2 text-center">
                    {producto.cantidad}
                  </div>
                  <div className="col-span-2 text-center">
                    {formatearPrecio(producto.precio * producto.cantidad)}
                  </div>
                  <div className="col-span-1 text-center">
                    <button 
                      onClick={() => eliminarDelCarrito(producto.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 flex justify-end">
              <button 
                onClick={handleVaciarCarrito}
                className="text-red-500 hover:text-red-700 underline"
              >
                Vaciar carrito
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 h-fit">
            <h2 className="text-xl font-semibold mb-4 text-lime-900">Resumen de compra</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>{formatearPrecio(calcularTotal())}</span>
              </div>
              <div className="flex justify-between">
                <span>Envío:</span>
                <span className="text-green-600">Gratis</span>
              </div>
              <div className="border-t pt-4 flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>{formatearPrecio(calcularTotal())}</span>
              </div>
            </div>
            
            <NavLink 
              to="/checkout" 
              className="block mt-6 bg-lime-900 text-white text-center py-3 rounded-md hover:bg-lime-800 transition-colors"
            >
              Proceder al pago
            </NavLink>
          </div>
        </div>
      )}
      
      {/* Modal de confirmación para vaciar carrito */}
      {mostrarConfirmacion && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4">¿Vaciar carrito?</h3>
            <p className="mb-6">¿Estás seguro que deseas eliminar todos los productos de tu carrito?</p>
            <div className="flex justify-end gap-4">
              <button 
                onClick={cancelarVaciarCarrito}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
              >
                Cancelar
              </button>
              <button 
                onClick={confirmarVaciarCarrito}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Vaciar carrito
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}