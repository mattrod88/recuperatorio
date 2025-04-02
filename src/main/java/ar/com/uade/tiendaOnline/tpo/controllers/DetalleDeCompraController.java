package ar.com.uade.tiendaOnline.tpo.controllers;

import ar.com.uade.tiendaOnline.tpo.entidad.DetalleDeCompra;
import ar.com.uade.tiendaOnline.tpo.servicios.detalleDeCompra.IDetalleDeCompraServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/detalle")
@CrossOrigin
public class DetalleDeCompraController {
    @Autowired
    private IDetalleDeCompraServicio detalleDeCompraServicio;
    @GetMapping("/{id}")
    public List<DetalleDeCompra> mostraDetalleCompra(@RequestParam(required = false) Long id) {
            return detalleDeCompraServicio.mostraDetalleCompra(id);

    }

}