package ar.com.uade.tiendaOnline.tpo.servicios.categoria;


import ar.com.uade.tiendaOnline.tpo.entidad.Categoria;
import ar.com.uade.tiendaOnline.tpo.entidad.dto.CategoriaDTO;
import ar.com.uade.tiendaOnline.tpo.excepciones.CategoriaDuplicateExcepcion;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;


import java.util.Optional;
@Service
public interface ICategoriaServicio  {
    Page<Categoria> getCategorias(PageRequest pageRequest);


    Optional<Categoria> getCategoriaById(Long categoryId);

    Categoria crearCategoria(String description) throws CategoriaDuplicateExcepcion;

    void actualizarCategoria(Long id, CategoriaDTO categoriaDTO);
}

