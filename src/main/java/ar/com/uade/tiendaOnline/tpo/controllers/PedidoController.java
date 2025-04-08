package ar.com.uade.tiendaOnline.tpo.controllers;

import ar.com.uade.tiendaOnline.tpo.entidad.Categoria;
import ar.com.uade.tiendaOnline.tpo.entidad.Cliente;
import ar.com.uade.tiendaOnline.tpo.entidad.Pedido;
import ar.com.uade.tiendaOnline.tpo.entidad.Producto;
import ar.com.uade.tiendaOnline.tpo.entidad.dto.CategoriaRequest;
import ar.com.uade.tiendaOnline.tpo.excepciones.CategoriaDuplicateExcepcion;
import ar.com.uade.tiendaOnline.tpo.servicios.pedido.IPedidoServicio;

import org.springframework.data.domain.Page; 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

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
        return result.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.noContent().build());
    }

    @GetMapping("/cliente/{clienteId}")
    public ResponseEntity<List<Pedido>> getPedidosPorCliente(@PathVariable Long clienteId) {
        List<Pedido> pedidos = pedidoServicio.getPedidoPorCliente(clienteId);

        if (pedidos.isEmpty()) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.ok(pedidos);
    }

    @PostMapping
    public ResponseEntity<Object> crearPedido(@RequestBody PedidoRequest pedidoRequest) {
        Pedido result = pedidoServicio.crearPedido(pedidoRequest.getProductosIds());
        return ResponseEntity.created(URI.create("/pedidos/" + result.getId())).body(result);
    }
    

}