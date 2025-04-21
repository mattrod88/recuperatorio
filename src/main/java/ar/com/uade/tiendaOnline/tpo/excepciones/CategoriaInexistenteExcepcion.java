package ar.com.uade.tiendaOnline.tpo.excepciones;

public class CategoriaInexistenteExcepcion extends RuntimeException {
  public CategoriaInexistenteExcepcion(String message) {
    super(message);
  }
}
