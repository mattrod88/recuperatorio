package ar.com.uade.tiendaOnline.tpo.repositorio;

import ar.com.uade.tiendaOnline.tpo.entidad.Pedido;
import ar.com.uade.tiendaOnline.tpo.entidad.Producto;
import ar.com.uade.tiendaOnline.tpo.entidad.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UsuarioRepositorio extends JpaRepository<Usuario,Long> {
    @Query(value = "select u from Usuario u where u.email = ?1")
    boolean estaEmail(String email) ;
    @Query(value = "select u from Usuario u where u.contrasena = ?1")
    boolean esMismaContrasena(String contrasena);
}
