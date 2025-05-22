package ar.com.uade.tiendaOnline.tpo.entidad.dto;
import lombok.Data;

@Data
public class ProductoResponseDTO {
    long id;
    String nombre;
    String categoria; 
    int cantidad;
    double precio;
    
}
