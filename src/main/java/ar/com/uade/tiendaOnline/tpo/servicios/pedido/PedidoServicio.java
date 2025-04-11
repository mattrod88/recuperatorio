package ar.com.uade.tiendaOnline.tpo.servicios.pedido;

import ar.com.uade.tiendaOnline.tpo.entidad.Pedido;
import ar.com.uade.tiendaOnline.tpo.entidad.Producto;
import ar.com.uade.tiendaOnline.tpo.entidad.Usuario;
import ar.com.uade.tiendaOnline.tpo.entidad.dto.ItemPedidoDTO;

import ar.com.uade.tiendaOnline.tpo.entidad.dto.PedidoDTO;
import ar.com.uade.tiendaOnline.tpo.excepciones.ProductoInexistenteExcepcion;
import ar.com.uade.tiendaOnline.tpo.excepciones.ProductoNoEncontradoExcepcion;
import ar.com.uade.tiendaOnline.tpo.excepciones.SinStockExcepcion;
import ar.com.uade.tiendaOnline.tpo.repositorio.PedidoRepositorio;

import ar.com.uade.tiendaOnline.tpo.repositorio.ProductoRepositorio;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.time.LocalDate;
import java.util.ArrayList;

import java.util.List;
import java.util.Optional;

@Service
public class PedidoServicio implements IPedidoServicio {
    @Autowired
    private final PedidoRepositorio pedidoRepositorio;
    private final ProductoRepositorio productoRepositorio;

    @Autowired
    public PedidoServicio(PedidoRepositorio pedidoRepositorio, ProductoRepositorio productoRepositorio) {
        this.pedidoRepositorio = pedidoRepositorio;
        this.productoRepositorio = productoRepositorio;
    }

    @Override
    @Transactional
    public void realizarComprar(PedidoDTO pdto) {
        List<Producto> productosComprados = new ArrayList<>();

        for (ItemPedidoDTO item : pdto.getItems()) {
            int cantidadPedida = item.getCantidad();
            Optional<Producto> productoOptional = productoRepositorio.findById(item.getId());

            if (productoOptional.isPresent()) {
                Producto producto = productoOptional.get();
                if (producto.getCantidad() >= cantidadPedida) {
                    producto.setCantidad(producto.getCantidad() - cantidadPedida);
                    productosComprados.add(producto);
                } else {
                    throw new SinStockExcepcion();
                }
            } else {
                throw new ProductoNoEncontradoExcepcion();
            }
        }


        Pedido pedido = new Pedido();
        Usuario usuario = new Usuario();
        usuario.setId(14L);
        pedido.setUsuario(usuario);
        pedido.setFecha(LocalDate.now());
        pedido.setProductosComprados(productosComprados);
        pedidoRepositorio.save(pedido);
    }
}













