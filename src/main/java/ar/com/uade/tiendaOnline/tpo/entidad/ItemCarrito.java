package ar.com.uade.tiendaOnline.tpo.entidad;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "items_carrito")
public class ItemCarrito {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "producto_id", nullable = false)
    private Producto producto;

    @ManyToOne
    @JoinColumn(name = "carrito_id", nullable = false)  // Relación explícita con Carrito
    private Carrito carrito;  // Campo añadido

    @Column(nullable = false)
    private int cantidad;

    public ItemCarrito() {}
}