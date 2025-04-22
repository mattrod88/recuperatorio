package ar.com.uade.tiendaOnline.tpo.entidad.dto;


import lombok.Data;

@Data
public class LineaDeCompraDTO {
    private int cantidad;
    private Long idProducto;
    private String nombreProducto;
    private double precioUnitario;
    private double subTotal;
}
