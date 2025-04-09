package ar.com.uade.tiendaOnline.tpo.servicios.pedido;

import ar.com.uade.tiendaOnline.tpo.entidad.Cliente;
import ar.com.uade.tiendaOnline.tpo.entidad.Pedido;
import ar.com.uade.tiendaOnline.tpo.entidad.Producto;
import ar.com.uade.tiendaOnline.tpo.repositorio.PedidoRepositorio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page; 
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class PedidoServicio implements IPedidoServicio{
    @Autowired
    private PedidoRepositorio pedidoRepositorio;

    public Page<Pedido> getPedidos(PageRequest pageable){
        return pedidoRepositorio.findAll(pageable);
    }
   
    public Optional<Pedido> getPedidoById(Long pedidoId) {
        return pedidoRepositorio.findById(pedidoId);
    }

    public List<Pedido> getPedidoPorCliente(Long clienteId) {
        return pedidoRepositorio.obtenerPorCliente(clienteId);
    }

    @Override
    public Pedido crearPedido(Pedido pedido) {
        return null;

    }

//    //public Pedido crearPedido(List<Long> productosIds) {
//        List<Producto> productos = productoRepositorio.findAllById(productosIds); // revisar
//        if (productos.isEmpty()) {
//            throw new IllegalArgumentException("El pedido no contiene productos.");  //revisar
//        }
//
//        double total = productos.stream()
//                            .mapToDouble(Producto::getPrecio)
//                            .sum();
//
//        Pedido nuevoPedido = new Pedido(); // revisar
//        nuevoPedido.setProductos(productos);
//        nuevoPedido.setFecha(LocalDate.now());
//        nuevoPedido.setEstado("PENDIENTE");
//        nuevoPedido.setTotal(total);
//
//        return pedidoRepositorio.save(nuevoPedido);
//    }

}
