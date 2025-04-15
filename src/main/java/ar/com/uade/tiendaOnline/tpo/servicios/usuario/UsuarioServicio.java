package ar.com.uade.tiendaOnline.tpo.servicios.usuario;
import ar.com.uade.tiendaOnline.tpo.controllers.auth.AuthenticationResponse;
import ar.com.uade.tiendaOnline.tpo.controllers.config.JwtService;
import ar.com.uade.tiendaOnline.tpo.entidad.Roles;
import ar.com.uade.tiendaOnline.tpo.entidad.Usuario;
import ar.com.uade.tiendaOnline.tpo.entidad.dto.UsuarioDTO;
import ar.com.uade.tiendaOnline.tpo.entidad.dto.UsuarioRequest;
import ar.com.uade.tiendaOnline.tpo.excepciones.DatosIngresadosExcepcion;

import ar.com.uade.tiendaOnline.tpo.excepciones.UsuarioDuplicado;
import ar.com.uade.tiendaOnline.tpo.repositorio.UsuarioRepositorio;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import java.util.LinkedList;
import java.util.List;


@Service
@RequiredArgsConstructor
public class UsuarioServicio implements IUsuarioServicio{
    @Autowired
    private UsuarioRepositorio usuarioRepositorio;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

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






