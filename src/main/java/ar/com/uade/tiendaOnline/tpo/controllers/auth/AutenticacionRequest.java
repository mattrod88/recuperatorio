package ar.com.uade.tiendaOnline.tpo.controllers.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class AutenticacionRequest {


        private String email;
        String contrasena;
    }


