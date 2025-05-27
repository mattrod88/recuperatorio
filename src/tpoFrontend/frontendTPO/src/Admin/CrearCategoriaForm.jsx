import { useState } from "react";

export default function FormularioCrearCategoriaAdmin({ autenticacion }) {
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        if (!nombre.trim() || !descripcion.trim()) {
            alert("Por favor, completá todos los campos antes de crear la categoría.");
            return;
        }

        try {
            await fetch("http://localhost:4002/categorias", {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + autenticacion.accessToken,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nombre, descripcion }),
            });

        setNombre("");
        setDescripcion("");
        } catch (error) {
            alert("Error al crear la categoría.");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded shadow">
            <h2 className="text-2xl font-semibold mb-4 text-lime-700">Crear Nueva Categoría</h2>

            <div className="mb-4">
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                    Nombre
                </label>
                <input
                    type="text"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">
                    Descripción
                </label>
                <textarea
                    id="descripcion"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                ></textarea>
            </div>

            <button
                type="submit"
                className="bg-lime-600 text-white px-4 py-2 rounded hover:bg-lime-700"
            >
                Crear
            </button>
        </form>
    );
}
