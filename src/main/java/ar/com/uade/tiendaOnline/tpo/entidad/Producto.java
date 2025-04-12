package ar.com.uade.tiendaOnline.tpo.entidad;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Producto {
    @Column
    private int cantidad;
    @Column
    private String nombre;
    @Column
    private double precio;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column
    private String imagenNombre;

    @Lob
    private byte[] imagenData;

    @Column
    private String descripcion;

    @ManyToOne
    @JoinColumn(name = "categoria_id", referencedColumnName = "id")
    private Categoria categoria;
}