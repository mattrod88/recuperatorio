package ar.com.uade.tiendaOnline.tpo.controllers.auth;

import ar.com.uade.tiendaOnline.tpo.entidad.Usuario;
import ar.com.uade.tiendaOnline.tpo.entidad.dto.UsuarioRequest;
import ar.com.uade.tiendaOnline.tpo.excepciones.UsuarioDuplicado;
import ar.com.uade.tiendaOnline.tpo.servicios.autenticacion.AutenticacionServicio;
import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
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
    public ResponseEntity<?> registrarse(@RequestBody RegistrarseRequest request) { // Usamos ResponseEntity<?> porque el tipo de respuesta puede ser variable
                                                                                    // Si el registro es exitoso, retorna AuthenticationResponse
                                                                                    // Si hay un error, retorna un String con el mensaje de error.
        try {                                                                       
            AuthenticationResponse response = service.registrarse(request);
            return ResponseEntity.ok(response); 
        } catch (UsuarioDuplicado e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                                 .body("El mail que se intenta agregar ya está registrado");
        }
    } 

    @PostMapping("/autenticarse")
    public ResponseEntity<AuthenticationResponse> autenticarse(
            @RequestBody AutenticacionRequest request) {
        return ResponseEntity.ok(service.authenticarse(request));
    }

}