package ar.com.uade.tiendaOnline.tpo.servicios.cliente;

import ar.com.uade.tiendaOnline.tpo.entidad.Pedido;

import java.util.List;



public interface IClienteServicio {
  List<Pedido> obtenerPedidos(Long id);
  //Buscar productos: Los clientes pueden buscar productos por palabras clave (por ejemplo, por nombre).
//
//Filtrar productos: Los clientes pueden filtrar productos utilizando los siguientes criterios:
//
//Categoría (por ejemplo, electrónicos, ropa, etc.).
//
//Rango de precio (por ejemplo, de $10 a $50).
//
//Nombre del producto (por ejemplo, buscando por marca o tipo de producto).
}
