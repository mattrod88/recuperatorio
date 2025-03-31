package ar.com.uade.tiendaOnline.tpo.controllers;

import ar.com.uade.tiendaOnline.tpo.entidad.Categoria;
import ar.com.uade.tiendaOnline.tpo.entidad.Producto;
import ar.com.uade.tiendaOnline.tpo.servicios.producto.IProductoServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/productos")
@CrossOrigin
public class ProductoController {
    @Autowired
    private IProductoServicio productoServicio;

    @GetMapping
    public List<Producto> listarProductos(@RequestParam(required = false) Categoria categoria) {
        if (categoria != null) {
            return productoServicio.obtenerProductosXCategoria(categoria);

        } else {
            return productoServicio.obtenerTodosLosProductos();

        }
    }

    @PostMapping
    public void agregarProducto(@RequestBody Producto producto) {
        productoServicio.agregarProducto(producto);

    }

    @GetMapping
    public Producto seleccionarProducto(Producto producto) {
        if (producto != null) {
            return productoServicio.mostarProducto();
        }
        return productoServicio.mostrarImagenNoHayProductos();

    }

    @GetMapping
    public void elegirCantidad(Producto producto, int cant) {

        if (productoServicio.getCantidad() != 0 && productoServicio.getCantidad() >= cant) {
            int cantidad = producto.getCantidad() - cant;

            productoServicio.setCantidad(cantidad);
        }
    }


    @DeleteMapping
    public void eliminarProducto(@RequestBody Producto producto) {
        productoServicio.eliminarProducto(producto);
        }


}