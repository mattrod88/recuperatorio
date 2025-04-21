package ar.com.uade.tiendaOnline.tpo.entidad;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "imagenes")
public class Imagen {

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
    private Producto producto;
}
