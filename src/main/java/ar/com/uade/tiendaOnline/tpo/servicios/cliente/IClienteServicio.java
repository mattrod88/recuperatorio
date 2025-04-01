package ar.com.uade.tiendaOnline.tpo.servicios.cliente;

import ar.com.uade.tiendaOnline.tpo.entidad.Pedido;

import java.util.List;

public interface IClienteServicio {
  List<Pedido> obtenerPedidos(Long id);
}
