package ar.com.uade.tiendaOnline.tpo.servicios.pedido;

import ar.com.uade.tiendaOnline.tpo.entidad.Pedido;
import ar.com.uade.tiendaOnline.tpo.entidad.Producto;
import ar.com.uade.tiendaOnline.tpo.entidad.ProductoComprado;
import ar.com.uade.tiendaOnline.tpo.entidad.Usuario;
import ar.com.uade.tiendaOnline.tpo.entidad.dto.DetalleDeCompraDTO;
import ar.com.uade.tiendaOnline.tpo.entidad.dto.ItemPedidoDTO;

import ar.com.uade.tiendaOnline.tpo.entidad.dto.LineaDeCompraDTO;
import ar.com.uade.tiendaOnline.tpo.entidad.dto.PedidoDTO;
import ar.com.uade.tiendaOnline.tpo.excepciones.ProductoInexistenteExcepcion;
import ar.com.uade.tiendaOnline.tpo.excepciones.SinStockExcepcion;
import ar.com.uade.tiendaOnline.tpo.repositorio.PedidoRepositorio;

import ar.com.uade.tiendaOnline.tpo.repositorio.ProductoCompradoRepositorio;
import ar.com.uade.tiendaOnline.tpo.repositorio.ProductoRepositorio;
import jakarta.transaction.Transactional;
import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.time.LocalDate;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

@Service


public class PedidoServicio implements IPedidoServicio {
    @Autowired
    private final PedidoRepositorio pedidoRepositorio;
    @Autowired
    private final ProductoRepositorio productoRepositorio;
    @Autowired
    private final ProductoCompradoRepositorio productoCompradoRepositorio;

    public PedidoServicio(PedidoRepositorio pedidoRepositorio, ProductoRepositorio productoRepositorio, ProductoCompradoRepositorio productoCompradoRepositorio) {
        this.pedidoRepositorio = pedidoRepositorio;
        this.productoRepositorio = productoRepositorio;
        this.productoCompradoRepositorio = productoCompradoRepositorio;
    }

    @Override
    @Transactional
    public DetalleDeCompraDTO realizarComprar(PedidoDTO pdto, Usuario usuario) {
        DetalleDeCompraDTO detalle = new DetalleDeCompraDTO();
        List<LineaDeCompraDTO> items = new LinkedList<>();
        Pedido pedido = new Pedido();
        pedido.setUsuario(usuario);
        pedido.setFecha(LocalDate.now());
        pedidoRepositorio.save(pedido);
        double montoTotal = 0;
        for (ItemPedidoDTO item : pdto.getItems()) {
            int cantidadPedida = item.getCantidad();
            Optional<Producto> productoOptional = productoRepositorio.findById(item.getId());

            if (productoOptional.isPresent()) {
                Producto producto = productoOptional.get();
                if (producto.getCantidad() >= cantidadPedida) {
                    producto.setCantidad(producto.getCantidad() - cantidadPedida);
                    ProductoComprado p = new ProductoComprado();
                    p.setPedido(pedido);
                    p.setProducto(producto);
                    p.setCantidad(cantidadPedida);
                    p.setPrecioUnitario(producto.getPrecio());
                    productoCompradoRepositorio.save(p);
                    LineaDeCompraDTO linea = new LineaDeCompraDTO();
                    linea.setIdProducto(producto.getId());
                    linea.setNombreProducto(producto.getNombre());
                    linea.setPrecioUnitario(producto.getPrecio());
                    linea.setCantidad(cantidadPedida);
                    linea.setSubTotal(cantidadPedida*producto.getPrecio());
                    items.add(linea);
                    montoTotal+=linea.getSubTotal();

                } else {
                    throw new SinStockExcepcion();
                }
            } else {
                throw new ProductoInexistenteExcepcion();
            }
        }
        detalle.setFecha(pedido.getFecha());
        detalle.setNumero(pedido.getId());
        detalle.setMontoTotal(montoTotal);
        detalle.setItems(items);


        return detalle;

    }
}













