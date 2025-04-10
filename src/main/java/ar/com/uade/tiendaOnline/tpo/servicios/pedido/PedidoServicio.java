package ar.com.uade.tiendaOnline.tpo.servicios.pedido;

import ar.com.uade.tiendaOnline.tpo.entidad.Pedido;
import ar.com.uade.tiendaOnline.tpo.entidad.Producto;
import ar.com.uade.tiendaOnline.tpo.entidad.dto.ItemPedidoDTO;

import ar.com.uade.tiendaOnline.tpo.entidad.dto.PedidoDTO;
import ar.com.uade.tiendaOnline.tpo.repositorio.PedidoRepositorio;

import ar.com.uade.tiendaOnline.tpo.repositorio.ProductoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.time.LocalDate;
import java.util.ArrayList;

import java.util.List;
import java.util.Optional;

@Service
public class PedidoServicio implements IPedidoServicio {
    @Autowired
    private PedidoRepositorio pedidoRepositorio;

    @Autowired
    private ProductoRepositorio productoRepositorio;
    List<ItemPedidoDTO> pedido = new ArrayList<>();

    List<Producto>productosComprados =  new ArrayList<>();


    @Override
    public void realizarComprar(PedidoDTO pdto) {
        for(ItemPedidoDTO item:pdto.getItems()){
            int cantidadPedida = item.getCantidad();
            Optional<Producto> producto = productoRepositorio.findById(item.getId());
            if (producto.isPresent()) {
                Producto p = producto.get();
                if(p.getCantidad()>= cantidadPedida){
                    p.setCantidad(p.getCantidad()-cantidadPedida);   //calcula si hay o no stock
                    productosComprados.add(p);
                }else{
                    throw new RuntimeException("No hay stock");
                }

            }else{
                throw new RuntimeException("El producto no existe");
            }
        }
        //guardar pedido
        Pedido p = new Pedido();
        p.setFecha(LocalDate.now());
        p.setProductosComprados(productosComprados);
        pedidoRepositorio.save(p);

    }

    @Override
    public List<Producto> mostrarProductosComprados() {
        return productosComprados;
    }
}











