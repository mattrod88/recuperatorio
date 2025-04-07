package ar.com.uade.tiendaOnline.tpo.servicios.carrito;

import ar.com.uade.tiendaOnline.tpo.entidad.ItemCarrito;



public interface ICarrito {

    void calcularTotal() ;
    void agregarItem(ItemCarrito item);
    void eliminarItem(ItemCarrito item);

    //modificarCantidad():
    //Los clientes pueden modificar la cantidad de productos en su carrito, es decir, aumentar o disminuir la cantidad de cada producto seleccionado.
    //checkout():
    //El carrito tiene un total que se calcula automáticamente, teniendo en cuenta el precio de cada producto y la cantidad.
    //Al realizar el checkout, el sistema valida que haya suficiente stock disponible para cada producto del carrito.
    //descontarStock():
    //Después de que el cliente confirme el checkout y el pedido sea procesado, el sistema actualizará el stock de los productos comprados, descontando la cantidad correspondiente del inventario.
}
