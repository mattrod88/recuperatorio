package ar.com.uade.tiendaOnline.tpo.excepciones;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
@ResponseStatus(code = HttpStatus.NOT_FOUND, reason = "La categoria que buscas no existe")
public class CategoriaInexistenteExcepcion extends RuntimeException {

}
