package ar.com.uade.tiendaOnline.tpo.entidad.dto;


import lombok.Data;

@Data
public class UsuarioRequest {
    String email;
    String contrasena;
}
