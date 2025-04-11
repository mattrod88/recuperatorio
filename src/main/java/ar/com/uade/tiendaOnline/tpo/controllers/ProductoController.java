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
    @PostMapping("/upload")
    public ResponseEntity<String> uploadProductWithImage(@ModelAttribute ProductoDTO productDTO,
                                                         @RequestParam("file") MultipartFile file) {
        try {
            Producto producto = new Producto();
            producto.setNombre(productDTO.getNombre());

            Categoria categoria = new Categoria();
            categoria.setId(productDTO.getCategoria_id());
            producto.setCategoria(categoria);

            productoServicio.saveProductWithImage(producto, file);
            return new ResponseEntity<>("Producto se cargo satisfactoriamente", HttpStatus.OK);
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
    public void eliminarProducto(@RequestBody Producto producto) {
        productoServicio.eliminarProducto(producto);
        }


}