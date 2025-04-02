package ar.com.uade.tiendaOnline.tpo.servicios.detalleDeCompra;

import ar.com.uade.tiendaOnline.tpo.entidad.DetalleDeCompra;
import ar.com.uade.tiendaOnline.tpo.entidad.Pedido;
import ar.com.uade.tiendaOnline.tpo.repositorio.DetalleCompraRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class DetalleDeCompraServicio implements IDetalleDeCompraServicio{

    @Autowired
    private DetalleCompraRepositorio detalleRepositorio;


    @Override
    public List<DetalleDeCompra> mostraDetalleCompra(Long id) {
        return detalleRepositorio.findByIdCliente(id);
    }
}
