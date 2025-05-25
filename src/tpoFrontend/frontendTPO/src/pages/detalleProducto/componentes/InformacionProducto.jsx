
export default function InformacionProducto({ producto, cantidad, setCantidad, agregarAlCarrito }) {
    const incrementar = () => {
        setCantidad((valor) => valor + 1);
    };

    const decrementar = () => {
        if (cantidad > 1) {
            setCantidad((valor) => valor - 1);
        }
    };

    return (
        <section className="flex flex-col justify-start text-[20px] min-w-[400px] max-w-xl">
            <h1 className="text-6xl font-bold text-lime-900 mb-6">{producto.nombre}</h1>
            <p className="text-3xl font-semibold text-gray-900 mb-4">${producto.precio}</p>
            <p className="mb-8 text-gray-700 leading-relaxed">{producto.descripcion}</p>

            <div className="flex items-center gap-6 mb-8">
                <button
                    onClick={decrementar}
                    className="bg-lime-700 text-white rounded-lg px-8 py-4 hover:bg-lime-800 transition"
                    aria-label="Disminuir cantidad"
                >
                    -
                </button>

                <span className="w-[260px] py-4 text-2xl font-bold rounded-lg text-center bg-lime-100 text-lime-900">
                    {cantidad}
                </span>
                
                <button
                    onClick={incrementar}
                    className="bg-lime-700 text-white rounded-lg px-8 py-4 hover:bg-lime-800 transition"
                    aria-label="Aumentar cantidad"
                >
                    +
                </button>
            </div>

            <button
                onClick={agregarAlCarrito}
                className="bg-lime-700 hover:bg-lime-800 text-white font-semibold rounded-lg px-8 py-4 text-2xl transition"
            >
                Agregar al carrito
            </button>
        </section>
    );
}
