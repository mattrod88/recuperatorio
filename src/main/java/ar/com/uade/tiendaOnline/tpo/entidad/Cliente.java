package ar.com.uade.tiendaOnline.tpo.entidad;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;


@Entity
@Data
public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String email;

    @Column
    private String nombre;


    @Column
    private String apellido;
    @OneToMany(mappedBy= "cliente")
    private List<Pedido> pedidos;

    @ManyToMany
    @JoinTable(name = "rol_cliente", joinColumns = @JoinColumn(name = "cliente_id"), inverseJoinColumns = @JoinColumn(name = "rol_id"))
    private List<Rol> roles;

    public Cliente(Long id, List<Rol> roles, List<Pedido> pedidos, String apellido, String nombre, String email) {
        this.id = id;
        this.roles = roles;
        this.pedidos = pedidos;
        this.apellido = apellido;
        this.nombre = nombre;
        this.email = email;
    }
}