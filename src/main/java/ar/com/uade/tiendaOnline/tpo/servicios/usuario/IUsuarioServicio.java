package ar.com.uade.tiendaOnline.tpo.servicios.usuario;

import ar.com.uade.tiendaOnline.tpo.entidad.Usuario;
import ar.com.uade.tiendaOnline.tpo.entidad.dto.UsuarioDTO;


import java.util.List;

public interface IUsuarioServicio {
    void registrarse(Usuario usuario);

//    void logearse(Usuario usuario);

   List<UsuarioDTO> obtenerTodosLosUsuarios();
}
