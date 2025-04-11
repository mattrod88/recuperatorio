package ar.com.uade.tiendaOnline.tpo.excepciones;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;


@ResponseStatus(code = HttpStatus.NOT_FOUND, reason = "No hay compras realizadas")
public class CompraInexistente extends RuntimeException {
}
