package ar.com.uade.tiendaOnline.tpo.servicios.autenticacion;

import ar.com.uade.tiendaOnline.tpo.controllers.auth.AutenticacionRequest;
import ar.com.uade.tiendaOnline.tpo.controllers.auth.AuthenticationResponse;
import ar.com.uade.tiendaOnline.tpo.controllers.auth.RegistrarseRequest;

public interface IAutenticacion {

    AuthenticationResponse registrarse(RegistrarseRequest request);

    AuthenticationResponse authenticarse(AutenticacionRequest request);
}