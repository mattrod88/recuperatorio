package ar.com.uade.tiendaOnline.tpo.entidad;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

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


    @Column(name = "total")
    private double total;

    @ManyToMany
    private List<Producto>productosComprados;

    public Pedido(Long id, List<Producto> productosComprados, double total, LocalDate fecha, Usuario usuario, Long count) {
        this.id = id;
        this.productosComprados = productosComprados;
        this.total = total;
        this.fecha = fecha;
        this.usuario = usuario;
        this.count = count;
    }

    public Pedido() {
    }
}