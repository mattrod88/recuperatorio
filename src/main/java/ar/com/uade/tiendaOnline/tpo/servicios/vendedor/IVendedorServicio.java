package ar.com.uade.tiendaOnline.tpo.servicios.vendedor;

import ar.com.uade.tiendaOnline.tpo.entidad.Pedido;

import java.util.List;

public interface IVendedorServicio {
    public List<Pedido> obtenerVentas();
}
