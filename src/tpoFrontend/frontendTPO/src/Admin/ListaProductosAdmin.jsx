import { useEffect, useState } from "react";
import CardProductoAdmin from "./CardProductoAdmin.jsx";


export const ListaProductosAdmin = ({ autenticacion }) => {
    const [productos, setProductos] = useState([]);
    const [productoEditar, setProductoEditar] = useState(null); 

    useEffect(() => {
        async function fetchProductos() {
            const response = await fetch("http://localhost:4002/productos");
            const data = await response.json();
            setProductos(data);
        }
        fetchProductos();
    }, []);

    async function eliminarProducto(id) {
        await fetch(`http://localhost:4002/productos/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: "Bearer " + autenticacion.accessToken,
            },
        });
        const response = await fetch("http://localhost:4002/productos");
        const data = await response.json();
        setProductos(data);
    }


    async function guardarEdicion(e) {
        e.preventDefault();
        await fetch(`http://localhost:4002/productos/${productoEditar.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + autenticacion.accessToken,
            },
            body: JSON.stringify(productoEditar),
        });
        setProductoEditar(null);
        const response = await fetch("http://localhost:4002/productos");
        const data = await response.json();
        setProductos(data);
    }

    function FormularioEdicion() {
    const [nombre, setNombre] = useState(productoEditar.nombre);
    const [precio, setPrecio] = useState(productoEditar.precio);
    const [descripcion, setDescripcion] = useState(productoEditar.descripcion);

    async function handleGuardar(e) {
        e.preventDefault();
        await fetch(`http://localhost:4002/productos/${productoEditar.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + autenticacion.accessToken,
            },
            body: JSON.stringify({
                ...productoEditar,
                nombre,
                precio,
                descripcion,
            }),
        });
        setProductoEditar(null);
        const response = await fetch("http://localhost:4002/productos");
        const data = await response.json();
        setProductos(data);
    }

    return (
        <form onSubmit={handleGuardar} className="p-4 bg-gray-100 rounded shadow mb-4">
            <h3 className="mb-2 font-bold">Editar Producto</h3>
            <input
                className="block mb-2 border p-1 w-full"
                type="text"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
                placeholder="Nombre"
                required
            />
            <input
                className="block mb-2 border p-1 w-full"
                type="number"
                value={precio}
                onChange={e => setPrecio(e.target.value)}
                placeholder="Precio"
                required
            />
            <textarea
                className="block mb-2 border p-1 w-full"
                value={descripcion}
                onChange={e => setDescripcion(e.target.value)}
                placeholder="Descripción"
                required
            />
            <button type="submit" className="bg-lime-600 text-white px-4 py-2 rounded mr-2">Guardar</button>
            <button type="button" onClick={() => setProductoEditar(null)} className="bg-gray-400 text-white px-4 py-2 rounded">Cancelar</button>
        </form>
    );
}

    return (
        <>
    
        
        <main>
            <section className="my-5">
                <h2 className="text-lime-900 text-2xl font-semibold text-center dark:text-lime-900">
                    Catálogo de Productos
                </h2>
                {productoEditar && <FormularioEdicion />}
                <div className="flex flex-wrap justify-center lg:flex-row mt-6">
                    {productos.length > 0 ? (
                        productos.map((producto) => (
                            <CardProductoAdmin
                                key={producto.id}
                                producto={producto}
                                onEliminar={eliminarProducto}
                                onEditar={() => setProductoEditar(producto)}
                            />
                        ))
                    ) : (
                        <p>No hay productos para mostrar.</p>
                    )}
                </div>
            </section>
        </main>
        </>
    );
};