package ar.com.uade.tiendaOnline.tpo.controllers.auth;

import ar.com.uade.tiendaOnline.tpo.entidad.Roles;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegistrarseRequest {
    private String email;
    private String nombre;
    private String apellido;
    private String contrasena;
    private Roles rol;

}
