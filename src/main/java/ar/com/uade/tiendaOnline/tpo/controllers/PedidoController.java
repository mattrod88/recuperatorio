package ar.com.uade.tiendaOnline.tpo.controllers;

import ar.com.uade.tiendaOnline.tpo.entidad.Usuario;
import ar.com.uade.tiendaOnline.tpo.entidad.dto.PedidoDTO;

import ar.com.uade.tiendaOnline.tpo.servicios.pedido.IPedidoServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
    @CrossOrigin
    @RequestMapping("/pedidos")
    public class PedidoController {

        @Autowired
        private IPedidoServicio pedidoServicio;

        @PostMapping("/comprar")
        public void realizarCompra(@RequestBody PedidoDTO pedido, @AuthenticationPrincipal Usuario usuarioLogueado) {
            pedidoServicio.realizarComprar(pedido, usuarioLogueado);
        }


    }