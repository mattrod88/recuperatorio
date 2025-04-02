package ar.com.uade.tiendaOnline.tpo.servicios.detalleDeCompra;

import ar.com.uade.tiendaOnline.tpo.entidad.DetalleDeCompra;
import ar.com.uade.tiendaOnline.tpo.entidad.Pedido;

import java.util.List;
import java.util.Optional;

public interface IDetalleDeCompraServicio {
   List<DetalleDeCompra> mostraDetalleCompra(Long id);
}
