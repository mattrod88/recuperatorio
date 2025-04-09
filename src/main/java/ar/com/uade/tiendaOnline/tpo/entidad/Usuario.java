package ar.com.uade.tiendaOnline.tpo.entidad;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String email;
    @Column
    private String nombre;
    @Column
    private String apellido;
    @Column
    private String contrasena;
    @Enumerated(EnumType.STRING)
    private Roles rol;

}
