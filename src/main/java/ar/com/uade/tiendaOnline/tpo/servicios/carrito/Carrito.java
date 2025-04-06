package ar.com.uade.tiendaOnline.tpo.servicios.carrito;

import ar.com.uade.tiendaOnline.tpo.entidad.ItemCarrito;
import ar.com.uade.tiendaOnline.tpo.repositorio.CarritoRepositorio;
import ar.com.uade.tiendaOnline.tpo.repositorio.ItemCarritoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Carrito implements ICarrito{
    @Autowired
    private ItemCarritoRepositorio itemCarritoRepo;
    public void calcularTotal() {
        itemCarritoRepo.findAll().stream()
                .mapToDouble(item -> item.getProducto().getPrecio() * item.getCantidad())
                .sum();
    }


    public void agregarItem(ItemCarrito item) {
        itemCarritoRepo.save(item);
    }

    public void eliminarItem(ItemCarrito item) {
        itemCarritoRepo.delete(item);
    }

    public List<ItemCarrito> verItems(ItemCarrito item) {
        return itemCarritoRepo.findAll();
    }
}
