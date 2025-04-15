package ar.com.uade.tiendaOnline.tpo.controllers;

import ar.com.uade.tiendaOnline.tpo.entidad.Categoria;
import ar.com.uade.tiendaOnline.tpo.entidad.Producto;
import ar.com.uade.tiendaOnline.tpo.entidad.dto.ProductoDTO;
import ar.com.uade.tiendaOnline.tpo.servicios.producto.IProductoServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/productos")
@CrossOrigin
public class ProductoController {
    @Autowired
    private IProductoServicio productoServicio;


    @GetMapping
    public List<Producto> obtenerProductosXcategoria(@RequestParam(required = false) String categoria) {
        if(categoria!=null) {
            return productoServicio.obtenerProductosXCategoria(categoria);
        }
            return productoServicio.obtenerTodosLosProductos();
    }

    @PostMapping("{id}/imagen")
    public ResponseEntity<String>  subirImagen(@PathVariable Long id, @RequestParam("file") MultipartFile file) {
        try {
            Producto producto = new Producto();
            producto.setId(id);
            productoServicio.guardarImagen(producto, file);
            return new ResponseEntity<>("Producto cargado con exito", HttpStatus.OK);
        } catch (IOException e) {
            return new ResponseEntity<>("No se pudo cargar el producto", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping
    public void crearProducto(@RequestBody Producto producto) {
        productoServicio.crearProducto(producto);

    }

    @GetMapping("/{id}")
    public Producto clickEnUnProducto(@PathVariable Long id) {

        return productoServicio.obtenerProductoPorId(id);
}



    @DeleteMapping("delete/{id}")
    public void eliminarProducto(@PathVariable Long id) {

        productoServicio.eliminarProducto(id);

}
}