package ar.com.uade.tiendaOnline.tpo.controllers;


import ar.com.uade.tiendaOnline.tpo.entidad.Producto;
import ar.com.uade.tiendaOnline.tpo.entidad.Usuario;
import ar.com.uade.tiendaOnline.tpo.entidad.dto.UsuarioDTO;
import ar.com.uade.tiendaOnline.tpo.excepciones.UsuarioDuplicado;
import ar.com.uade.tiendaOnline.tpo.servicios.producto.IProductoServicio;
import ar.com.uade.tiendaOnline.tpo.servicios.usuario.IUsuarioServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin
public class UsuarioController {
    @Autowired
    private IUsuarioServicio usuarioServicio;

    @PostMapping
    public void registrarse(@RequestBody Usuario usuario) throws UsuarioDuplicado {
        usuarioServicio.registrarse(usuario);

    }

    @PostMapping("/login")
    public void logearse(@RequestBody Usuario usuario) {
        usuarioServicio.logearse(usuario);

    }

    @GetMapping("/registrados")
    public List<UsuarioDTO> verUusarios() {
       return usuarioServicio.obtenerTodosLosUsuarios();
    }

}