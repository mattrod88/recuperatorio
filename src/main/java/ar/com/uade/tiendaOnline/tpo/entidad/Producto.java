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
    private String imagenURL;

    @Column
    private String descripcion;

    @OneToOne
    @JoinColumn(name = "categoria_id", referencedColumnName = "id")
    private Categoria categoria;

    public Producto() {
    }

    public Producto(int cantidad, Categoria categoria, String descripcion, String imagen, long id, double precio, String nombre) {
        this.cantidad = cantidad;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.imagenURL = imagen;
        this.id = id;
        this.precio = precio;
        this.nombre = nombre;
    }


}