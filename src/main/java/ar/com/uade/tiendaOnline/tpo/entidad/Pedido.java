package ar.com.uade.tiendaOnline.tpo.entidad;

import jakarta.persistence.*;
import lombok.Data;
import org.apache.catalina.User;

@Entity
@Data
@Table(name = "pedidos")
public class Pedido {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private Long count;
    @ManyToOne
    @JoinColumn(name = "user_id",nullable = false)
    private Usuario usuario;

}