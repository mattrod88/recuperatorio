import { useState } from 'react';

export default function CarruselProducto({ imagenes }) {
    const [imagenActual, setImagenActual] = useState(0);

    const manejarSiguienteImagen = () => {
        setImagenActual((prev) => (imagenes.length === 0 ? 0 : (prev + 1) % imagenes.length));
    };

    const manejarAnteriorImagen = () => {
        setImagenActual((prev) => (imagenes.length === 0 ? 0 : (prev === 0 ? imagenes.length - 1 : prev - 1)));
    };

    if (!imagenes.length) return <p>No hay imágenes disponibles</p>;

    const imagenActualData = imagenes[imagenActual];
    const srcImagen = imagenActualData
        ? `data:image/jpeg;base64,${imagenActualData.imagenData}`
        : '';

 return (
        <div className="relative flex-1 min-w-[400px] min-h-[500px] max-w-[600px] rounded-3xl shadow-lg overflow-hidden">
            <img
                src={srcImagen}
                alt={`Imagen ${imagenActual + 1}`}
                className="rounded-lg h-full object-cover"
            />
            
            <button
                onClick={manejarAnteriorImagen}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-lime-700 text-white rounded-full px-5 py-3 hover:bg-lime-800 shadow"
                aria-label="Imagen anterior"
            >
                ‹
            </button>
            
            <button
                onClick={manejarSiguienteImagen}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-lime-700 text-white rounded-full px-5 py-3 hover:bg-lime-800 shadow"
                aria-label="Siguiente imagen"
            >
                ›
            </button>
        </div>
    );
}
