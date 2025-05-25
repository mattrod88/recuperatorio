export default function InformacionProducto({
  producto,
  cantidad,
  setCantidad,
  agregarAlCarrito,
}) {
  const incrementar = () => {
    setCantidad((valor) => valor + 1);
  };

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad((valor) => valor - 1);
    }
  };

  return (
    <section className="flex flex-col justify-start max-w-xl w-full px-4 sm:px-6 lg:px-0 mx-auto">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-lime-900 mb-4 sm:mb-6">
        {producto.nombre}
      </h1>

      <p className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3 sm:mb-4">
        ${producto.precio}
      </p>

      <p className="mb-6 sm:mb-8 text-gray-700 leading-relaxed text-base sm:text-lg">
        {producto.descripcion}
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
        <button
          onClick={decrementar}
          className="bg-lime-700 text-white rounded-lg px-6 py-3 sm:px-8 sm:py-4 hover:bg-lime-800 transition"
          aria-label="Disminuir cantidad"
        >
          -
        </button>

        <span className="w-full sm:w-[200px] py-3 sm:py-4 text-xl sm:text-2xl font-bold rounded-lg text-center bg-lime-100 text-lime-900">
          {cantidad}
        </span>

        <button
          onClick={incrementar}
          className="bg-lime-700 text-white rounded-lg px-6 py-3 sm:px-8 sm:py-4 hover:bg-lime-800 transition"
          aria-label="Aumentar cantidad"
        >
          +
        </button>
      </div>

      <button
        onClick={agregarAlCarrito}
        className="bg-lime-700 hover:bg-lime-800 text-white font-semibold rounded-lg px-6 py-3 sm:px-8 sm:py-4 text-xl sm:text-2xl transition w-full sm:w-auto"
      >
        Agregar al carrito
      </button>
    </section>
  );
}
