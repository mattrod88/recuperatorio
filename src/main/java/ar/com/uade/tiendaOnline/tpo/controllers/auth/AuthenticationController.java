package ar.com.uade.tiendaOnline.tpo.controllers.auth;

import ar.com.uade.tiendaOnline.tpo.entidad.Usuario;
import ar.com.uade.tiendaOnline.tpo.entidad.dto.UsuarioRequest;
import ar.com.uade.tiendaOnline.tpo.excepciones.UsuarioDuplicado;
import ar.com.uade.tiendaOnline.tpo.servicios.autenticacion.AutenticacionServicio;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AutenticacionServicio service;

    @PostMapping("/registrarse")
    public ResponseEntity<AuthenticationResponse> registrarse(
            @RequestBody RegistrarseRequest request) {
        return ResponseEntity.ok(service.registrarse(request));
    }

    @PostMapping("/autenticarse")
    public ResponseEntity<AuthenticationResponse> autenticarse(
            @RequestBody AutenticacionRequest request) {
        return ResponseEntity.ok(service.authenticarse(request));
    }

}