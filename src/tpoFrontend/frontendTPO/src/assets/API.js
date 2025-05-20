import { PRODUCTOS } from "./PRODUCTOS";

export async function obtenerProductos(params, filtro) {
    let productos = PRODUCTOS
    if (params.nombre_categoria) {
        productos = PRODUCTOS.filter(p => p.categoria === params.nombre_categoria)
    } else if (filtro) {
        productos = PRODUCTOS.filter(p => p.nombre.includes(filtro))
    }
    console.log(productos)
    return productos;
}