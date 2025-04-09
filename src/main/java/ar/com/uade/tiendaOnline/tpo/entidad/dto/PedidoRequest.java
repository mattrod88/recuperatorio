package ar.com.uade.tiendaOnline.tpo.entidad.dto;

import ar.com.uade.tiendaOnline.tpo.entidad.Cliente;
import ar.com.uade.tiendaOnline.tpo.entidad.Vendedor;
import jakarta.persistence.*;

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
