package ar.com.uade.tiendaOnline.tpo.servicios.pedido;

import ar.com.uade.tiendaOnline.tpo.entidad.Pedido;
import ar.com.uade.tiendaOnline.tpo.entidad.Producto;
import ar.com.uade.tiendaOnline.tpo.entidad.Usuario;
import ar.com.uade.tiendaOnline.tpo.entidad.dto.ItemPedidoDTO;
import ar.com.uade.tiendaOnline.tpo.entidad.dto.PedidoDTO;

import java.util.List;

public interface IPedidoServicio {
    void realizarComprar(PedidoDTO pedido, Usuario usuario);


    //void hacerPedido(Pedido pedido);
}





