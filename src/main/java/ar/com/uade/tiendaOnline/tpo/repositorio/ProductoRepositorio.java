package ar.com.uade.tiendaOnline.tpo.repositorio;
import ar.com.uade.tiendaOnline.tpo.entidad.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface ProductoRepositorio extends JpaRepository<Producto,Long> {
    @Query(value = "select p from Producto p where p.categoria.descripcion = ?1and p.eliminado=false")
    List<Producto> findByCategoria(String categoria) ;

    @Query(value = "select p from Producto p where p.eliminado = false")
    List<Producto> obtenerProductos();

    @Query(value = "select p from Producto p where p.id = ?1 and p.eliminado=false")
    Optional<Producto> obtenerPoId(Long id);
}