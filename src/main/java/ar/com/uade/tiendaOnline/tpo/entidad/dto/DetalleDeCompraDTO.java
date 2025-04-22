package ar.com.uade.tiendaOnline.tpo.entidad.dto;
import lombok.Data;


import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Data
public class DetalleDeCompraDTO {
    private double montoTotal;
    private long numero;
    private LocalDate fecha;
    private List<LineaDeCompraDTO>items;

}
