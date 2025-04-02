package ar.com.uade.tiendaOnline.tpo.repositorio;

import ar.com.uade.tiendaOnline.tpo.entidad.DetalleDeCompra;
import ar.com.uade.tiendaOnline.tpo.entidad.Pedido;
import ar.com.uade.tiendaOnline.tpo.entidad.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface DetalleCompraRepositorio extends JpaRepository<Pedido,Long> {
    @Query(value = "select d from DetalleDeCompra d where d.cliente.id = ?1")
    List<DetalleDeCompra> findByIdCliente(Long id)  ;
}
