package ar.com.uade.tiendaOnline.tpo.entidad.dto;

import ar.com.uade.tiendaOnline.tpo.entidad.Carrito;
import ar.com.uade.tiendaOnline.tpo.entidad.Producto;

public class ItemCarritoRequest {
    private Long id;

    private Producto producto;


    private Carrito carrito;

    private int cantidad;
}
