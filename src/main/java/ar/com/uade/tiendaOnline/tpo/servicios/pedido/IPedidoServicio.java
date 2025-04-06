package ar.com.uade.tiendaOnline.tpo.servicios.pedido;

import ar.com.uade.tiendaOnline.tpo.entidad.Cliente;
import ar.com.uade.tiendaOnline.tpo.entidad.Pedido;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import java.util.List;
import java.util.Optional;

public interface IPedidoServicio {
    Page<Pedido> getPedidos(PageRequest pageable);

    Optional<Pedido> getPedidoById(Long pedidoId);

    List<Pedido> getPedidoPorCliente(Long clienteId);

    Pedido crearPedido(List<Long> productosIds);
}
