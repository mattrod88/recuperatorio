package ar.com.uade.tiendaOnline.tpo.repositorio;

import ar.com.uade.tiendaOnline.tpo.entidad.Pedido;
import ar.com.uade.tiendaOnline.tpo.entidad.Producto;
import ar.com.uade.tiendaOnline.tpo.entidad.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UsuarioRepositorio extends JpaRepository<Usuario,Long> {
    Optional<Usuario> findByEmail(String mail);

}
