package ar.com.uade.tiendaOnline.tpo.entidad.dto;

import ar.com.uade.tiendaOnline.tpo.entidad.Usuario;

import java.time.LocalDate;

public class PedidoRequest {
    private Long id;
    private Long count;
    private Usuario usuario;
    private LocalDate fecha;
    private String estado;
    private double total;

}
