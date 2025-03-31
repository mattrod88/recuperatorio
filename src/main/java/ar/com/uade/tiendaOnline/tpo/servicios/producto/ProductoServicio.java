package ar.com.uade.tiendaOnline.tpo.servicios.producto;

import ar.com.uade.tiendaOnline.tpo.entidad.Categoria;
import ar.com.uade.tiendaOnline.tpo.entidad.Producto;
import ar.com.uade.tiendaOnline.tpo.repositorio.ProductoRepositorio;
import ar.com.uade.tiendaOnline.tpo.servicios.producto.IProductoServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductoServicio implements IProductoServicio {
    @Autowired
    private ProductoRepositorio productoRepositorio;

    public List<Producto> obtenerTodosLosProductos(){

        return productoRepositorio.findAll();
    }

    public void agregarProducto(Producto producto) {

        productoRepositorio.save(producto);
    }

    @Override
    public List<Producto> obtenerProductosXCategoria(Categoria categoria ) {
        return productoRepositorio.findByCategoria(categoria);
    }

    @Override
    public Producto mostarProducto() {
        return null;
    }


    @Override
    public Producto mostrarImagenNoHayProductos() {
        return null;
    }

    @Override
    public int getCantidad() {
        return 0;
    }

    @Override
    public int setCantidad(int cantidad) {
        return 0;
    }

    @Override
    public void eliminarProducto(Producto producto) {

    }

}
