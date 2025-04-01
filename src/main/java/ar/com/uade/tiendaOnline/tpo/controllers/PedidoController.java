package ar.com.uade.tiendaOnline.tpo.controllers;



import ar.com.uade.tiendaOnline.tpo.entidad.Cliente;
import ar.com.uade.tiendaOnline.tpo.entidad.Pedido;

import ar.com.uade.tiendaOnline.tpo.servicios.pedido.IPedidoServicio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("pedidos")
@CrossOrigin
public class PedidoController {
    @Autowired
    private IPedidoServicio pedidoServicio;


}