package ar.com.uade.tiendaOnline.tpo.controllers;

import ar.com.uade.tiendaOnline.tpo.entidad.dto.PedidoDTO;

import ar.com.uade.tiendaOnline.tpo.servicios.pedido.PedidoServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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