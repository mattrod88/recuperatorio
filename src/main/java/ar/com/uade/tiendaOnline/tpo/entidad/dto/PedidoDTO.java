package ar.com.uade.tiendaOnline.tpo.entidad.dto;

import ar.com.uade.tiendaOnline.tpo.entidad.Usuario;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class PedidoDTO {
   List<ItemPedidoDTO>items;

}
