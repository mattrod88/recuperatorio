package ar.com.uade.tiendaOnline.tpo.servicios.producto;


import ar.com.uade.tiendaOnline.tpo.entidad.Producto;
import ar.com.uade.tiendaOnline.tpo.excepciones.ProductoInexistenteExcepcion;
import ar.com.uade.tiendaOnline.tpo.repositorio.ProductoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;




import java.util.List;
import java.util.Optional;

@Service
public class ProductoServicio implements IProductoServicio {
    @Autowired
    private ProductoRepositorio productoRepositorio;

    public List<Producto> obtenerTodosLosProductos(){

        return productoRepositorio.findAll();
    }

    public void crearProducto(Producto producto) {

        productoRepositorio.save(producto);
    }

    @Override
    public List<Producto> obtenerProductosXCategoria(String categoria ) {
        return productoRepositorio.findByCategoria(categoria);
    }



    @Override
    public void eliminarProducto(Producto producto) {
        productoRepositorio.delete(producto);

    }

    @Override
    public Producto obtenerProductoPorId(Long id){
        //Objeto opcional envuelve otro,ayuda a que no hayan nullPointerExceptions
        //Te ahorras de preguntar si existe o no .
        Optional<Producto> productoBuscado= productoRepositorio.findById(id);
        return productoBuscado.orElseThrow(ProductoInexistenteExcepcion::new);
    }
}
