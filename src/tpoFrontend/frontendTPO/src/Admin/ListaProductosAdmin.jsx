import { useEffect, useState } from "react";
import CardProductoAdmin from "./CardProductoAdmin.jsx";


export const ListaProductosAdmin = ({ autenticacion }) => {
    const [productos, setProductos] = useState([]);
    const [productoEditar, setProductoEditar] = useState(null); 
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        async function fetchProductos() {
            const response = await fetch("http://localhost:4002/productos");
            const data = await response.json();
            setProductos(data);
        }
        fetchProductos();
    }, []);

    useEffect(() => {
        async function fetchCategorias() {
            const response = await fetch(`http://localhost:4002/categorias`);
            const data = await response.json();
            setCategorias(data.content);
        }
    
        fetchCategorias();
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

    function FormularioEdicion() {
        const [nombre, setNombre] = useState(productoEditar.nombre);
        const [precio, setPrecio] = useState(productoEditar.precio);
        const [cantidad, setCantidad] = useState(productoEditar.cantidad);
        const [categoria, setCategoria] = useState(productoEditar.categoria);
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
                    id: productoEditar.id,
                    nombre,
                    precio,
                    cantidad,
                    categoria_id: Number(categoria),
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
                <label className="block mb-1 font-medium" htmlFor="nombre-input">Nombre</label>
                <input
                    id="nombre-input"
                    className="block mb-2 border p-1 w-full"
                    type="text"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                    placeholder="Nombre"
                    required
                />
                <label className="block mb-1 font-medium" htmlFor="precio-input">Precio</label>
                <input
                    id="precio-input"
                    className="block mb-2 border p-1 w-full"
                    type="number"
                    value={precio}
                    onChange={e => setPrecio(e.target.value)}
                    placeholder="Precio"
                    required
                />
                
                <label className="block mb-1 font-medium" htmlFor="cantidad-input">Cantidad</label>
                <input
                    id="cantidad-input"
                    className="block mb-2 border p-1 w-full"
                    type="number"
                    value={cantidad}
                    onChange={e => setCantidad(e.target.value)}
                    placeholder="Cantidad"
                    required
                />

                <label className="block mb-1 font-medium" htmlFor="categoria-input">
                    Categoría
                </label>

                <select
                    id="categoria-input"
                    className="block mb-2 border p-1 w-full"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    required
                >
                    <option value="" disabled>
                        Seleccioná una categoría
                    </option>
                    {categorias.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                            {cat.descripcion}
                        </option>
                    ))}
                </select>

                <label className="block mb-1 font-medium" htmlFor="descripcion-input">Descripción</label>
                <textarea
                    id="descripcion-input"
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
                        <p>No se hallaron resultados para tu búsqueda.</p>
                    )}
                </div>
            </section>
        </main>
        </>
    );
};