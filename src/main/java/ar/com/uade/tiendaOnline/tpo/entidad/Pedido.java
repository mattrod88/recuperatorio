package ar.com.uade.tiendaOnline.tpo.entidad;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;
import lombok.Data;
@Entity
@Data
@Table(name = "pedidos")
public class Pedido {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @ManyToOne
    @JoinColumn(name = "usuario_id",nullable = false)
    private Usuario usuario;


    @Column(name = "fecha")
    private LocalDate fecha;



}