package ar.com.uade.tiendaOnline.tpo.controllers;

import ar.com.uade.tiendaOnline.tpo.entidad.Pedido;
import ar.com.uade.tiendaOnline.tpo.servicios.cliente.IClienteServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("clientes")
public class ClienteController {

    @Autowired
    private IClienteServicio clienteServicio;


    @GetMapping("/{id}/pedidos")
    public List<Pedido> listarPedidosPorCliente(@PathVariable("id") Long id) {
        return clienteServicio.obtenerPedidos(id);
    }
}
