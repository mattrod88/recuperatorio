package ar.com.uade.tiendaOnline.tpo.controllers;

import ar.com.uade.tiendaOnline.tpo.entidad.Pedido;
import ar.com.uade.tiendaOnline.tpo.entidad.dto.ItemPedidoDTO;
import ar.com.uade.tiendaOnline.tpo.entidad.dto.PedidoDTO;
import ar.com.uade.tiendaOnline.tpo.servicios.pedido.IPedidoServicio;

import ar.com.uade.tiendaOnline.tpo.servicios.pedido.PedidoServicio;
import org.springframework.data.domain.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

    @RestController
    @CrossOrigin
    @RequestMapping("/api/pedidos")
    public class PedidoController {

        @Autowired
        private PedidoServicio pedidoServicio;

        @PostMapping("/comprar")
        public void realizarCompra(@RequestBody PedidoDTO pedido) {
           pedidoServicio.realizarComprar(pedido);
        }
}