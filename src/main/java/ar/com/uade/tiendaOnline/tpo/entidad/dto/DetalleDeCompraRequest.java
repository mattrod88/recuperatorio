package ar.com.uade.tiendaOnline.tpo.entidad.dto;

import ar.com.uade.tiendaOnline.tpo.entidad.Cliente;
import ar.com.uade.tiendaOnline.tpo.entidad.Pedido;
import lombok.Data;


import java.util.Date;
import java.util.List;

@Data
public class DetalleDeCompraRequest {
    private double montoTotal;
    private long id;
    private Date fecha;
}
