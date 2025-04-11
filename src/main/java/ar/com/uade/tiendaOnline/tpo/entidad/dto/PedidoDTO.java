package ar.com.uade.tiendaOnline.tpo.entidad.dto;
import lombok.Data;
import java.util.List;

@Data
public class PedidoDTO {
   List<ItemPedidoDTO> items;
}
