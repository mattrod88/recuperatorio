package ar.com.uade.tiendaOnline.tpo.repositorio;

import ar.com.uade.tiendaOnline.tpo.entidad.ItemCarrito;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ItemCarritoRepositorio extends JpaRepository<ItemCarrito, Long> {

    // Buscar todos los items de un carrito específico
    @Query("SELECT i FROM ItemCarrito i WHERE i.carrito.id = ?1")
    List<ItemCarrito> findByCarritoId(Long carritoId);

    // Buscar un item específico por carrito y producto (para evitar duplicados)
    @Query("SELECT i FROM ItemCarrito i WHERE i.carrito.id = ?1 AND i.producto.id = ?2")
    Optional<ItemCarrito> findByCarritoAndProducto(Long carritoId, Long productoId);

    // Eliminar todos los items de un carrito (útil al confirmar pedido)
    @Modifying
    @Query("DELETE FROM ItemCarrito i WHERE i.carrito.id = ?1")
    void deleteAllByCarritoId(Long carritoId);
}