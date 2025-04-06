package ar.com.uade.tiendaOnline.tpo.entidad.dto;


import ar.com.uade.tiendaOnline.tpo.entidad.Categoria;
import lombok.Data;

@Data
public class ProductoRequest {
    private int cantidad;
    private String nombre;
    private double precio;
    private long id;
    private String imagen;
    private String descripcion;
    private Categoria categoria;
}
