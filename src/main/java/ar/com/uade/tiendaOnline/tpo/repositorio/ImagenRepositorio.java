package ar.com.uade.tiendaOnline.tpo.repositorio;

import ar.com.uade.tiendaOnline.tpo.entidad.Imagen;
import ar.com.uade.tiendaOnline.tpo.entidad.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
@Repository
public interface ImagenRepositorio extends JpaRepository<Imagen,Long> {

    @Query(value = "select i from Imagen i where i.producto.id = ?1 ")
    ArrayList<Imagen> obtenerImagenesDeUnProducto(Long id);

}
