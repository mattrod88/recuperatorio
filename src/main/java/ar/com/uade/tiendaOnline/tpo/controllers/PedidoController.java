package ar.com.uade.tiendaOnline.tpo.controllers;



import ar.com.uade.tiendaOnline.tpo.entidad.Cliente;
import ar.com.uade.tiendaOnline.tpo.entidad.Pedido;

import ar.com.uade.tiendaOnline.tpo.servicios.pedido.IPedidoServicio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("pedidos")
@CrossOrigin
public class PedidoController {

    @Autowired
    private IPedidoServicio pedidoServicio;

    @GetMapping
    public ResponseEntity<Page<Pedido>> getPedidos(
            @RequestParam(required = false) Integer page,
            @RequestParam(required = false) Integer size) {
        if (page == null || size == null)
            return ResponseEntity.ok(pedidoServicio.getPedidos(PageRequest.of(0, Integer.MAX_VALUE)));
        return ResponseEntity.ok(pedidoServicio.getPedidos(PageRequest.of(page, size)));
    }

    @GetMapping("/{pedidoId}")
    public ResponseEntity<Pedido> getPedidoById(@PathVariable Long pedidoId) {
        Optional<Pedido> result = pedidoServicio.getPedidoById(pedidoId);
            if (result.isPresent())
                return ResponseEntity.ok(result.get());
            return ResponseEntity.noContent().build();
    }

    @GetMapping("/cliente/{clienteId}")
    public ResponseEntity<List<Pedido>> getPedidosPorCliente(@PathVariable Long clienteId) {
        List<Pedido> pedidos = pedidoServicio.getPedidoPorCliente(clienteId);

        if (pedidos.isEmpty()) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.ok(pedidos);
    }


}