package ar.com.uade.tiendaOnline.tpo.servicios.pedido;

import ar.com.uade.tiendaOnline.tpo.entidad.Cliente;
import ar.com.uade.tiendaOnline.tpo.entidad.Pedido;
import ar.com.uade.tiendaOnline.tpo.repositorio.PedidoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PedidoServicio implements IPedidoServicio{
    @Autowired
    private PedidoRepositorio pedidoRepositorio;

    public Page<Pedido> getPedidos(PageRequest pageable){
        return pedidoRepositorio.findAll(pageable);
    }

    public List<Pedido> obtenerPedidoPorCliente(Cliente cliente){
        return pedidoRepositorio.obtenerPorCliente(cliente.getId());
    }
}
