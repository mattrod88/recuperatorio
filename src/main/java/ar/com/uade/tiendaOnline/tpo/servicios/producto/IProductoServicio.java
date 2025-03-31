package ar.com.uade.tiendaOnline.tpo.servicios.producto;

import ar.com.uade.tiendaOnline.tpo.entidad.Categoria;
import ar.com.uade.tiendaOnline.tpo.entidad.Producto;

import java.util.List;

public interface IProductoServicio {
    List<Producto> obtenerTodosLosProductos();

     void agregarProducto(Producto producto) ;


    List<Producto> obtenerProductosXCategoria(Categoria categoria);

    Producto mostarProducto();

    Producto mostrarImagenNoHayProductos();

    int getCantidad();

    int setCantidad(int cantidad);

    void eliminarProducto(Producto producto);
}
