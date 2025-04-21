package ar.com.uade.tiendaOnline.tpo.servicios.categoria;
import ar.com.uade.tiendaOnline.tpo.entidad.Categoria;
import ar.com.uade.tiendaOnline.tpo.entidad.Producto;
import ar.com.uade.tiendaOnline.tpo.entidad.dto.CategoriaDTO;
import ar.com.uade.tiendaOnline.tpo.entidad.dto.ProductoDTO;
import ar.com.uade.tiendaOnline.tpo.excepciones.CategoriaDuplicateExcepcion;
import ar.com.uade.tiendaOnline.tpo.excepciones.CategoriaInexistenteExcepcion;
import ar.com.uade.tiendaOnline.tpo.excepciones.ProductoInexistenteExcepcion;
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

    @Override
    @Transactional(rollbackFor = Throwable.class)
    public void actualizarCategoria(Long id, CategoriaDTO categoriaDTO) throws CategoriaInexistenteExcepcion {

        if (id == null || categoriaDTO == null) {
            throw new IllegalArgumentException("Parámetros inválidos para actualizar categoria");
        }

        Categoria categoriaExistente = categoriaRepositorio.findById(id)
                .orElseThrow(CategoriaInexistenteExcepcion::new);


        if (categoriaDTO.getDescripcion() != null && !categoriaDTO.getDescripcion().trim().isEmpty()
                && !categoriaDTO.getDescripcion().equals(categoriaExistente.getDescripcion())) {

            if (existeCategoriaConNombre(categoriaDTO.getDescripcion())) {
                throw new IllegalArgumentException("Ya existe una categoria con el nombre: " + categoriaDTO.getDescripcion());
            }
            categoriaExistente.setDescripcion(categoriaDTO.getDescripcion());
        }

    }

    private boolean existeCategoriaConNombre(String nombre) {
        return !categoriaRepositorio.findByDescripcion(nombre).isEmpty();
    }

}