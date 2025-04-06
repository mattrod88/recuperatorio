package ar.com.uade.tiendaOnline.tpo.entidad.dto;
import ar.com.uade.tiendaOnline.tpo.entidad.Cliente;
import ar.com.uade.tiendaOnline.tpo.entidad.ItemCarrito;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class CarritoRequest {
    private Long id;

    private Cliente cliente;

    private List<ItemCarrito> items = new ArrayList<>();

    private double total;

}
