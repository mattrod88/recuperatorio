package ar.com.uade.tiendaOnline.tpo.entidad.dto;

import jakarta.persistence.Column;
import lombok.Data;

@Data
public class ProductoDTO {
    String nombre;
    Long categoria_id;
    int cantidad;
    double precio;
}
