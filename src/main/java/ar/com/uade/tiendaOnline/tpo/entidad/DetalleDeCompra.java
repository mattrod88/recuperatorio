package ar.com.uade.tiendaOnline.tpo.entidad;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Data
@Entity
public class DetalleDeCompra {
    @Column
    private Date fecha;
    @Column
    private double montoTotal;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(name = "cliente_id", referencedColumnName = "id")
    private Cliente cliente;


    public DetalleDeCompra(double montoTotal, long id, Cliente cliente) {
        this.montoTotal = montoTotal;
        this.id = id;
        this.cliente = cliente;

    }

    public DetalleDeCompra() {
    }
}
