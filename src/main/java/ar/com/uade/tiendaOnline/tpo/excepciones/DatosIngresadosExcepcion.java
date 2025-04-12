package ar.com.uade.tiendaOnline.tpo.excepciones;

import org.springframework.http.HttpStatus;

import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.BAD_REQUEST, reason ="No se puede iniciar sesion,error")
public class DatosIngresadosExcepcion extends RuntimeException {

}


