import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { obtenerProductos } from '../assets/API';
import Producto from './Producto';
// @ts-ignore
import NotFound from '../assets/notFound.png';

export default function Catalogo() {
    const params = useParams();
    const [productos, setProductos] = useState([])
    useEffect(() => {
        let promesa = obtenerProductos(params);
        promesa.then((productos) => setProductos(productos))
    }, [params]);

    return (
        <>
            {
                productos.length > 0 ?
                    (
                        <div className="bg-white card">
                            <div className="mx-auto max-w-2xl px-2 py-4 sm:px-3 sm:py-24 lg:max-w-7xl lg:px-4  ">
                                <div className="grid grid-cols-1 gap-x-2 gap-y-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-4  ">

                                    {
                                        productos.map((producto) => (
                                            <Producto nombre={producto.nombre} precio={producto.precio} imagen={producto.imagen} key={producto.id} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ) :
                    (
                        <NotFound/>
                    )

            }
        </>
    )
}