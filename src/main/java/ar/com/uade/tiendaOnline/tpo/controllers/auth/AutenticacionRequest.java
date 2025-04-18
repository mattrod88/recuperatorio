package ar.com.uade.tiendaOnline.tpo.controllers.auth;

import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

public class AutenticacionRequest {


        private String email;
        String contrasena;
    }


