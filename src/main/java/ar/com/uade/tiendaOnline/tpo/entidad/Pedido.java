package ar.com.uade.tiendaOnline.tpo.entidad;

import java.time.LocalDate;

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

    @ManyToOne
    @JoinColumn(name = "vendedor_id",nullable = false)
    private Vendedor vendedor;

    @Column(name = "fecha")
    private LocalDate fecha;

    @Column(name = "estado")
    private String estado;

    @Column(name = "total")
    private double total;


    public Pedido(Long id, Long count, Cliente cliente, Vendedor vendedor) {
        this.id = id;
        this.count = count;
        this.cliente = cliente;
        this.vendedor = vendedor;
    }

    public Pedido() {
    }
}