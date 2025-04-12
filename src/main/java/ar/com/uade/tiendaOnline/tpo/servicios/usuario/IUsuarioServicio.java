package ar.com.uade.tiendaOnline.tpo.servicios.usuario;

import ar.com.uade.tiendaOnline.tpo.entidad.Usuario;
import ar.com.uade.tiendaOnline.tpo.entidad.dto.UsuarioDTO;
import ar.com.uade.tiendaOnline.tpo.entidad.dto.UsuarioRequest;
import ar.com.uade.tiendaOnline.tpo.excepciones.DatosIngresadosExcepcion;


import java.util.List;

public interface IUsuarioServicio {
    void registrarse(Usuario usuario);

    boolean logearse(UsuarioRequest usuario) ;

   List<UsuarioDTO> obtenerTodosLosUsuarios();
}
