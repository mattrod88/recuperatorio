package ar.com.uade.tiendaOnline.tpo.servicios.cliente;

import ar.com.uade.tiendaOnline.tpo.entidad.Pedido;
import ar.com.uade.tiendaOnline.tpo.repositorio.PedidoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteServicio implements IClienteServicio {
    @Autowired
    private PedidoRepositorio pedidoRepositorio;

    @Override
    public List<Pedido> obtenerPedidos(Long id){
        return pedidoRepositorio.obtenerPorCliente(id);
}
}
