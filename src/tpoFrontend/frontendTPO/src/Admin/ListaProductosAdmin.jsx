import { useEffect, useState } from "react";
import CardProductoAdmin from "./CardProductoAdmin";
import SideBar from "./SideBar";

export const ListaProductosAdmin = ({ autenticacion }) => {
    const [productos, setProductos] = useState([]);

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

    return (
        <>
    
        
        <main>
            <section className="my-5">
                <h2 className="text-lime-900 text-2xl font-semibold text-center dark:text-lime-900">
                    Catálogo de Productos
                </h2>

                <div className="flex flex-wrap justify-center lg:flex-row mt-6">
                    {productos.length > 0 ? (
                        productos.map((producto) => (
                            <CardProductoAdmin
                                key={producto.id}
                                producto={producto}
                                onEliminar={eliminarProducto}
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
