package ar.com.uade.tiendaOnline.tpo.controllers.auth;

import ar.com.uade.tiendaOnline.tpo.entidad.Roles;
import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class RegistrarseRequest {
    private String email;
    private String nombre;
    private String apellido;
    private String contrasena;
    private Roles rol;

}
