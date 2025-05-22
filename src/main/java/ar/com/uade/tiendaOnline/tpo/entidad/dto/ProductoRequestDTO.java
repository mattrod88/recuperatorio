package ar.com.uade.tiendaOnline.tpo.entidad.dto;

import lombok.Data;

@Data
public class ProductoRequestDTO {
    String nombre;
    Long categoria_id;
    int cantidad;
    double precio;
}
