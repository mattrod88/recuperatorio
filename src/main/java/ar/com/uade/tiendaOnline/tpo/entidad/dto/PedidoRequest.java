package ar.com.uade.tiendaOnline.tpo.entidad.dto;

import java.time.LocalDate;

public class PedidoRequest {
    private Long id;
    private Long count;
    private Cliente cliente;
    private Vendedor vendedor;
    private LocalDate fecha;
    private String estado;
    private double total;

}
