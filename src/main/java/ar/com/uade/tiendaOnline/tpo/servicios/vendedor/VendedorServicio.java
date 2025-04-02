package ar.com.uade.tiendaOnline.tpo.servicios.vendedor;
import ar.com.uade.tiendaOnline.tpo.entidad.Pedido;
import ar.com.uade.tiendaOnline.tpo.repositorio.VendedorRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class VendedorServicio implements  IVendedorServicio{
    @Autowired
    private VendedorRepositorio vendedorRepositorio;
    public List<Pedido> obtenerVentas(){
        return vendedorRepositorio.findAll();
    }



}
