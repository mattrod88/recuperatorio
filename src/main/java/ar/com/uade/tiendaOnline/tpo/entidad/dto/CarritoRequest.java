package ar.com.uade.tiendaOnline.tpo.entidad.dto;
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
