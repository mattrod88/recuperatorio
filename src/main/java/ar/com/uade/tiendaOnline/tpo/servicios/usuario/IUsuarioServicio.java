package ar.com.uade.tiendaOnline.tpo.servicios.usuario;


import ar.com.uade.tiendaOnline.tpo.controllers.auth.AuthenticationResponse;
import ar.com.uade.tiendaOnline.tpo.entidad.Usuario;
import ar.com.uade.tiendaOnline.tpo.entidad.dto.UsuarioDTO;
import ar.com.uade.tiendaOnline.tpo.entidad.dto.UsuarioRequest;
import ar.com.uade.tiendaOnline.tpo.excepciones.DatosIngresadosExcepcion;


import java.util.List;

public interface IUsuarioServicio {


   List<UsuarioDTO> obtenerTodosLosUsuarios();
}
