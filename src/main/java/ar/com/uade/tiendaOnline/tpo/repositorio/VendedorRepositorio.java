package ar.com.uade.tiendaOnline.tpo.repositorio;

import ar.com.uade.tiendaOnline.tpo.entidad.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface VendedorRepositorio extends JpaRepository<Pedido,Long> {

}
