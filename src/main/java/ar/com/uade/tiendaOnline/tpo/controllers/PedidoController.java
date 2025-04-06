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


}