package ar.com.uade.tiendaOnline.tpo.entidad;


import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Data
public class ProductoComprado {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private int cantidad;
    @Column
    private Double precioUnitario;
    @ManyToOne
    private Pedido pedido;
    @ManyToOne
    private Producto producto;




}
