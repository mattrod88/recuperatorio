package ar.com.uade.tiendaOnline.tpo.servicios.producto;

import ar.com.uade.tiendaOnline.tpo.entidad.Imagen;
import ar.com.uade.tiendaOnline.tpo.entidad.Producto;
import ar.com.uade.tiendaOnline.tpo.entidad.dto.ProductoDTO;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public interface IProductoServicio {
    List<Producto> obtenerTodosLosProductos();

     void crearProducto(Producto producto) ;
    //void crearProducto(Producto producto) throws ProductoDuplicateExcepcion;

    List<Producto> obtenerProductosXCategoria(String categoria);

    void eliminarProducto(Long id);


    Producto obtenerProductoPorId(Long id);

   void subirImagen(Producto producto, MultipartFile file) throws IOException;

    public ArrayList<Imagen> obtenerImagenes(Long id);

    void actualizarProducto(Long id, ProductoDTO productoDTO);
}