package ar.com.uade.tiendaOnline.tpo.servicios.categoria;
import ar.com.uade.tiendaOnline.tpo.entidad.Categoria;
import ar.com.uade.tiendaOnline.tpo.excepciones.CategoriaDuplicateExcepcion;
import ar.com.uade.tiendaOnline.tpo.repositorio.CategoriaRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class CategoriaServicio implements ICategoriaServicio {
        @Autowired
        private CategoriaRepositorio categoriaRepositorio;

        public Page<Categoria> getCategorias(PageRequest pageable) {

            return categoriaRepositorio.findAll(pageable);
        }

        public Optional<Categoria> getCategoriaById(Long categoryId) {
            return categoriaRepositorio.findById(categoryId);
        }
        
        @Transactional(rollbackFor = Throwable.class)
        public Categoria crearCategoria(String descripcion) throws CategoriaDuplicateExcepcion {
            List<Categoria> categorias = categoriaRepositorio.findByDescripcion(descripcion);
            if (categorias.isEmpty())
                return categoriaRepositorio.save(new Categoria(descripcion));
            throw new CategoriaDuplicateExcepcion();
        }

}