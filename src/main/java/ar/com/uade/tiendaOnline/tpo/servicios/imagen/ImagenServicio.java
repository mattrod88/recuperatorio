package ar.com.uade.tiendaOnline.tpo.servicios.imagen;

import ar.com.uade.tiendaOnline.tpo.entidad.Imagen;
import ar.com.uade.tiendaOnline.tpo.repositorio.ImagenRepositorio;
import org.hibernate.annotations.SecondaryRow;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImagenServicio implements  IImagenServicio{
    @Autowired
    private ImagenRepositorio imagenRepositorio;
    @Override
    public void delete(Long id) {
        Imagen i = new Imagen();
        i.setId(id);
        imagenRepositorio.delete(i);

    }
}
