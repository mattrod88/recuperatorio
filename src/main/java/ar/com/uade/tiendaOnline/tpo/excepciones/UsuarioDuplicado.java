package ar.com.uade.tiendaOnline.tpo.excepciones;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
@ResponseStatus(code = HttpStatus.BAD_REQUEST, reason = "El mail que se intenta agregar ya esta registrado")

public class UsuarioDuplicado extends RuntimeException {

    }


