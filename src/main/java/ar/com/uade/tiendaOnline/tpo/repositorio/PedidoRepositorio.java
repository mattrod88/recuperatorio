package ar.com.uade.tiendaOnline.tpo.repositorio;

import ar.com.uade.tiendaOnline.tpo.entidad.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PedidoRepositorio extends JpaRepository<Pedido,Long> {
    @Query(value = "select p from Pedido p where p.cliente.id = ?1")
    List<Pedido> obtenerPorCliente(Long id);
}
