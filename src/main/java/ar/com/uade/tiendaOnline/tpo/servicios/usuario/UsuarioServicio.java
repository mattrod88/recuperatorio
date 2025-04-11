package ar.com.uade.tiendaOnline.tpo.servicios.usuario;
import ar.com.uade.tiendaOnline.tpo.entidad.Roles;
import ar.com.uade.tiendaOnline.tpo.entidad.Usuario;
import ar.com.uade.tiendaOnline.tpo.entidad.dto.UsuarioDTO;
import ar.com.uade.tiendaOnline.tpo.excepciones.UsuarioDuplicado;
import ar.com.uade.tiendaOnline.tpo.repositorio.UsuarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import java.util.LinkedList;
import java.util.List;


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


    //busco usuario por email y si existe el usuario por mail nos fijamos si la contrasena es la misma

//    @Override
//    public void logearse(Usuario usuario) {
//        List<Usuario>usuarios =  usuarioRepositorio.findAll();
//        for(Usuario usuario1: usuarios){
//            if(usuarioRepositorio.estaEmail(usuario1.getEmail())){
//                if(usuarioRepositorio.esMismaContrasena(usuario1.getContrasena()){
//                   // LOGICA PARA DECIR QUE SI SE LOGUEO
//                }
//
//            }}
//
//
//    }

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