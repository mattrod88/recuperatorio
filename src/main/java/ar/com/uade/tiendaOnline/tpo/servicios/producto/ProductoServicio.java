package ar.com.uade.tiendaOnline.tpo.servicios.producto;

import ar.com.uade.tiendaOnline.tpo.entidad.Categoria;
import ar.com.uade.tiendaOnline.tpo.entidad.Producto;
import ar.com.uade.tiendaOnline.tpo.entidad.dto.ProductoDTO;
import ar.com.uade.tiendaOnline.tpo.excepciones.ProductoDuplicateExcepcion;
import ar.com.uade.tiendaOnline.tpo.excepciones.ProductoInexistenteExcepcion;
import ar.com.uade.tiendaOnline.tpo.repositorio.CategoriaRepositorio;
import ar.com.uade.tiendaOnline.tpo.repositorio.ProductoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class ProductoServicio implements IProductoServicio {
    @Autowired
    private ProductoRepositorio productoRepositorio;

    @Autowired
    private CategoriaRepositorio categoriaRepositorio;

    public List<Producto> obtenerTodosLosProductos() {

        return productoRepositorio.obtenerProductos();
    }

    @Transactional(rollbackFor = Throwable.class)
    public void crearProducto(Producto producto) throws ProductoDuplicateExcepcion {
        List<Producto> productosExistentes = productoRepositorio.findByNombre(producto.getNombre());

        if (productosExistentes.isEmpty()) {
            productoRepositorio.save(producto);
        } else {
            throw new ProductoDuplicateExcepcion();
        }
    }

    @Override
    public List<Producto> obtenerProductosXCategoria(String categoria) {
        return productoRepositorio.findByCategoria(categoria);
    }

    @Transactional
    @Override
    public void eliminarProducto(Long id) {
        Optional<Producto> productoBuscado = productoRepositorio.obtenerPoId(id);
        Producto producto = productoBuscado.orElseThrow(ProductoInexistenteExcepcion::new);
        producto.setEliminado(true);
    }

    @Override
    public Producto obtenerProductoPorId(Long id) {
        // Objeto opcional envuelve otro,ayuda a que no hayan nullPointerExceptions
        // Te ahorras de preguntar si existe o no .
        Optional<Producto> productoBuscado = productoRepositorio.obtenerPoId(id);
        return productoBuscado.orElseThrow(ProductoInexistenteExcepcion::new);
    }

    public Producto guardarImagen(Producto producto, MultipartFile file) throws IOException {
        producto.setImagenNombre(file.getOriginalFilename());
        producto.setImagenData(file.getBytes());
        return productoRepositorio.save(producto);

    }

    @Override
    @Transactional(rollbackFor = Throwable.class)
    public void actualizarProducto(Long id, ProductoDTO productoDTO) throws ProductoInexistenteExcepcion {

        if (id == null || productoDTO == null) {
            throw new IllegalArgumentException("Parámetros inválidos para actualizar producto");
        }

        Producto productoExistente = productoRepositorio.findById(id)
                .orElseThrow(() -> new ProductoInexistenteExcepcion());

        if (productoExistente.isEliminado()) {
            throw new ProductoInexistenteExcepcion();
        }

        if (productoDTO.getNombre() != null && !productoDTO.getNombre().trim().isEmpty()
                && !productoDTO.getNombre().equals(productoExistente.getNombre())) {

            if (existeProductoConNombre(productoDTO.getNombre())) {
                throw new IllegalArgumentException("Ya existe un producto con el nombre: " + productoDTO.getNombre());
            }
            productoExistente.setNombre(productoDTO.getNombre());
        }

        if (productoDTO.getCategoria_id() != null) {
            Categoria nuevaCategoria = new Categoria();
            nuevaCategoria.setId(productoDTO.getCategoria_id());
            productoExistente.setCategoria(nuevaCategoria);
        }

        productoRepositorio.save(productoExistente);
    }

    private boolean existeProductoConNombre(String nombre) {
        return !productoRepositorio.findByNombre(nombre).isEmpty();
    }

}
