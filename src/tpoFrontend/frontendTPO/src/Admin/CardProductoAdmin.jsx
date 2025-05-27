import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CardProductoAdmin({ producto, onEliminar }) {
    const [imagenUrl, setImagenUrl] = useState("");

    useEffect(() => {
        async function fetchImagenes() {
            try {
                const response = await fetch(`http://localhost:4002/productos/${producto.id}/imagenes`);
                const imagenes = await response.json();
                if (imagenes.length > 0) {
                    setImagenUrl(`data:image/jpeg;base64,${imagenes[0].imagenData}`);
                }
            } catch (error) {
                setImagenUrl("");
            }
        }
        fetchImagenes();
    }, [producto.id]);

    return (
        <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <NavLink to={`/productos/${producto.id}`} className="relative">
                <span className="absolute top-4 left-2 px-2 bg-lime-900 bg-opacity-90 text-white rounded">
                    {producto.categoria}
                </span>
                <img
                    className="rounded-t-lg w-full h-64"
                    src={imagenUrl}
                    alt="imagen"
                />
            </NavLink>
            <div className="p-5">
                <Link to={`/productos/${producto.id}`} >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-lime-900 dark:text-lime">
                        {producto.nombre}
                    </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {producto.descripcion}
                </p>
                <p className="flex justify-between items-center">
                    <span className="text-2xl dark:text-gray-200 mx-2">
                        <span>$</span>
                        <span>{producto.precio}</span>
                    </span>
                </p>
                <div className="flex justify-end space-x-2 mt-4">
                    <Link
                        to={`/admin/productos/editar/${producto.id}`}
                        className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none dark:focus:ring-blue-800"
                    >
                        Editar
                    </Link>
                    <button
                        onClick={() => onEliminar(producto.id)}
                        className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base px-5 py-2.5 dark:bg-red-500 dark:hover:bg-red-600 focus:outline-none dark:focus:ring-red-800"
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    );
}
