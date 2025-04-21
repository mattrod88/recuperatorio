package ar.com.uade.tiendaOnline.tpo.controllers;

import ar.com.uade.tiendaOnline.tpo.entidad.Imagen;
import ar.com.uade.tiendaOnline.tpo.entidad.Producto;
import ar.com.uade.tiendaOnline.tpo.excepciones.ProductoInexistenteExcepcion;
import ar.com.uade.tiendaOnline.tpo.servicios.imagen.IImagenServicio;
import ar.com.uade.tiendaOnline.tpo.servicios.imagen.ImagenServicio;
import ar.com.uade.tiendaOnline.tpo.servicios.producto.IProductoServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
@RestController
@RequestMapping("/imagenes")
public class ImagenController {
    @Autowired
    private IImagenServicio imagenServicio;

 @DeleteMapping("/{id}")
    public void eliminarImagenPorId(@PathVariable Long id) {
     imagenServicio.delete(id);
    }
}
