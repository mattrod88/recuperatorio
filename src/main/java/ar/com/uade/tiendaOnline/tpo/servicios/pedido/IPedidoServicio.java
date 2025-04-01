package ar.com.uade.tiendaOnline.tpo.servicios.pedido;

import ar.com.uade.tiendaOnline.tpo.entidad.Cliente;
import ar.com.uade.tiendaOnline.tpo.entidad.Pedido;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import java.util.List;

public interface IPedidoServicio {

    List<Pedido> obtenerPedidoPorCliente(Cliente cliente);
}
