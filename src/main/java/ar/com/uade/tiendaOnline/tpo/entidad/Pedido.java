package ar.com.uade.tiendaOnline.tpo.entidad;

import java.time.LocalDate;

import jakarta.persistence.*;
import lombok.Data;
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
    @JoinColumn(name = "usuario_id",nullable = false)
    private Usuario usuario;


    @Column(name = "fecha")
    private LocalDate fecha;

    @Column(name = "estado")
    private String estado;

    @Column(name = "total")
    private double total;


    public Pedido(Long id, Long count,Usuario usuario) {
        this.id = id;
        this.count = count;
        this.usuario=usuario;
    }

    public Pedido() {
    }
}