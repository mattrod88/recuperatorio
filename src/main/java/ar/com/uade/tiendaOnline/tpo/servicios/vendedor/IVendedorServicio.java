package ar.com.uade.tiendaOnline.tpo.servicios.vendedor;

import ar.com.uade.tiendaOnline.tpo.entidad.Pedido;

import java.util.List;

public interface IVendedorServicio {
    public List<Pedido> obtenerVentas();


    //darDeAltaProducto(Long id):
    //Permite al vendedor dar de alta un nuevo producto. El producto debe incluir la siguiente información:
    //Nombre,Descripción,Categoría,Precio,Foto (imagen)
    //modificarProducto(Long id):
    //eliminarProducto(Long id):
    //agregarProducto(Long id):
}
