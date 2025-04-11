package ar.com.uade.tiendaOnline.tpo.excepciones;

import ar.com.uade.tiendaOnline.tpo.entidad.dto.ItemPedidoDTO;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.BAD_REQUEST, reason ="El producto  no existe")
public class ProductoNoEncontradoExcepcion extends RuntimeException {

}
