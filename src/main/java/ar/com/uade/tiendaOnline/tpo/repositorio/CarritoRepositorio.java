package ar.com.uade.tiendaOnline.tpo.repositorio;

import ar.com.uade.tiendaOnline.tpo.entidad.Carrito;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CarritoRepositorio extends JpaRepository<Carrito, Long> {

    // Buscar carrito activo por cliente (asumiendo 1 carrito activo por cliente)
    @Query("SELECT c FROM Carrito c WHERE c.cliente.id = ?1")
    Optional<Carrito> encontrarPorIdcliente(Long clienteId);

    // Opcional: Contar items en el carrito de un cliente
    @Query("SELECT COUNT(i) FROM Carrito c JOIN c.items i WHERE c.cliente.id = ?1")
    int contarItemsPorIdCliente(Long clienteId);
}