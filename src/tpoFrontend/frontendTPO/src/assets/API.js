import { PRODUCTOS } from "./PRODUCTOS";

export async function obtenerProductos(params) {
    let productos = PRODUCTOS
    if (params.nombre_categoria) {
        productos = PRODUCTOS.filter(p => p.categoria === params.nombre_categoria)
    }
    return productos;
}