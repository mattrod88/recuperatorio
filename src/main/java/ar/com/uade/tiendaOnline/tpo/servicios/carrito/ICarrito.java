package ar.com.uade.tiendaOnline.tpo.servicios.carrito;

import ar.com.uade.tiendaOnline.tpo.entidad.ItemCarrito;



public interface ICarrito {

    void calcularTotal() ;
    void agregarItem(ItemCarrito item);
    void eliminarItem(ItemCarrito item);
}
