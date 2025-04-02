package ar.com.uade.tiendaOnline.tpo.entidad;

import jakarta.persistence.*;
import lombok.Data;
//puede tener una lista con producto ,su cantidad y precio unitario
//pedido va con vendedor y cliente
//1 pedido 1 cliente
//1 pedido 1 vendedor
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
    @JoinColumn(name = "cliente_id",nullable = false)
    private Cliente cliente;

}