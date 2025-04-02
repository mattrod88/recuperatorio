package ar.com.uade.tiendaOnline.tpo.entidad;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;
@Data
@Entity
public class Vendedor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String email;

    @Column
    private String nombre;

    @Column
    private String nombreEmprendimiento;
    @Column
    private String apellido;
    @OneToMany(mappedBy= "vendedor")
    private List<Pedido> pedidos;

    @ManyToMany
    @JoinTable(name = "rol_vendedor", joinColumns = @JoinColumn(name = "vendedor_id"), inverseJoinColumns = @JoinColumn(name = "rol_id"))
    private List<Rol> roles;

    public Vendedor(Long id, List<Rol> roles, List<Pedido> pedidos, String apellido, String nombreEmprendimiento, String nombre, String email) {
        this.id = id;
        this.roles = roles;
        this.pedidos = pedidos;
        this.apellido = apellido;
        this.nombreEmprendimiento = nombreEmprendimiento;
        this.nombre = nombre;
        this.email = email;
    }

    public Vendedor() {
    }
}