package ar.com.uade.tiendaOnline.tpo.controllers.auth;

import ar.com.uade.tiendaOnline.tpo.controllers.auth.AutenticacionRequest;
import ar.com.uade.tiendaOnline.tpo.controllers.auth.AuthenticationResponse;
import ar.com.uade.tiendaOnline.tpo.controllers.auth.RegistrarseRequest;
import ar.com.uade.tiendaOnline.tpo.servicios.autenticacion.AutenticacionServicio;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/auth")
@RequiredArgsConstructor
@CrossOrigin
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