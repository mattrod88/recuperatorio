package ar.com.uade.tiendaOnline.tpo.servicios.usuario;
import ar.com.uade.tiendaOnline.tpo.entidad.Roles;
import ar.com.uade.tiendaOnline.tpo.entidad.Usuario;
import ar.com.uade.tiendaOnline.tpo.entidad.dto.UsuarioDTO;
import ar.com.uade.tiendaOnline.tpo.entidad.dto.UsuarioRequest;
import ar.com.uade.tiendaOnline.tpo.excepciones.CategoriaDuplicateExcepcion;
import ar.com.uade.tiendaOnline.tpo.excepciones.DatosIngresadosExcepcion;
import ar.com.uade.tiendaOnline.tpo.excepciones.SinStockExcepcion;
import ar.com.uade.tiendaOnline.tpo.excepciones.UsuarioDuplicado;
import ar.com.uade.tiendaOnline.tpo.repositorio.UsuarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;


@Service
public class UsuarioServicio implements IUsuarioServicio{
    @Autowired
    private UsuarioRepositorio usuarioRepositorio;

    public void registrarse(Usuario usuario){
        try {
            usuario.setRol(Roles.CLIENTE);
            usuarioRepositorio.save(usuario);
        }catch (DataIntegrityViolationException e) {
            throw new UsuarioDuplicado();
        }

    }


    @Override
    public boolean logearse(UsuarioRequest loginRequest)   {
        Optional<Usuario> optionalUsuario = usuarioRepositorio.findByEmail(loginRequest.getEmail());
            if (optionalUsuario.isPresent()) {
                Usuario usuario = optionalUsuario.get();
                if (usuario.getContrasena().equals(loginRequest.getContrasena())) {
                    return true;
                } else {
                    throw new DatosIngresadosExcepcion();
                }
            }else {
                throw new DatosIngresadosExcepcion();
            }

    }


    @Override
    public List<UsuarioDTO> obtenerTodosLosUsuarios() {
        List<Usuario>usuarios =  usuarioRepositorio.findAll();
        List<UsuarioDTO>usuariosDto=  new LinkedList<>();
        for(Usuario usuario :usuarios){
            UsuarioDTO udto = new UsuarioDTO();
            udto.setNombre(usuario.getNombre());
            udto.setEmail(usuario.getEmail());
            udto.setApellido(usuario.getApellido());
            udto.setId(usuario.getId());
            udto.setRol(usuario.getRol().name());
            usuariosDto.add(udto);
        }
        return usuariosDto;
    }
    }






