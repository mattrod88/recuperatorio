package ar.com.uade.tiendaOnline.tpo.entidad;

import jakarta.persistence.*;
import lombok.Data;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name = "carritos")
public class Carrito {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "cliente_id", referencedColumnName = "id")
    private Cliente cliente;

    @OneToMany(mappedBy = "carrito", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ItemCarrito> items = new ArrayList<>();

    @Column
    private double total;

    public void calcularTotal() {
        this.total = items.stream()
                .mapToDouble(item -> item.getProducto().getPrecio() * item.getCantidad())
                .sum();
    }


    public Carrito() {}


    public void agregarItem(ItemCarrito item) {
        item.setCarrito(this);
        this.items.add(item);
        this.calcularTotal();
    }

    public void eliminarItem(ItemCarrito item) {
        this.items.remove(item);
        item.setCarrito(null);
        this.calcularTotal();
    }
}