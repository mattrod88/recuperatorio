package ar.com.uade.tiendaOnline.tpo.controllers;

import ar.com.uade.tiendaOnline.tpo.entidad.Categoria;
import ar.com.uade.tiendaOnline.tpo.entidad.dto.CategoriaDTO;
import ar.com.uade.tiendaOnline.tpo.excepciones.CategoriaDuplicateExcepcion;
import ar.com.uade.tiendaOnline.tpo.servicios.categoria.CategoriaServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.Optional;


@RestController
@RequestMapping("categorias")
public class CategoriaController {

        @Autowired
        private CategoriaServicio categoriaServicio;

        @GetMapping
        public ResponseEntity<Page<Categoria>> getCategorias(
                @RequestParam(required = false) Integer page,
                @RequestParam(required = false) Integer size) {
            if (page == null || size == null)
                return ResponseEntity.ok(categoriaServicio.getCategorias(PageRequest.of(0, Integer.MAX_VALUE)));
            return ResponseEntity.ok(categoriaServicio.getCategorias(PageRequest.of(page, size)));
        }


        @GetMapping("/{categoriaId}")
        public ResponseEntity<Categoria> getCategoriaById(@PathVariable Long categoriaId) {
            Optional<Categoria> result = categoriaServicio.getCategoriaById(categoriaId);
            return result.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.noContent().build());

        }


        @PostMapping
        public ResponseEntity<Object> crearCategoria(@RequestBody CategoriaDTO categoriaRequest)
                throws CategoriaDuplicateExcepcion {
            Categoria result = categoriaServicio.crearCategoria(categoriaRequest.getDescripcion());
            return ResponseEntity.created(URI.create("/categorias/" + result.getId())).body(result);
        }


    }




