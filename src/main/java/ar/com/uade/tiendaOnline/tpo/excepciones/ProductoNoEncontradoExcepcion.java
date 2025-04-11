package ar.com.uade.tiendaOnline.tpo.excepciones;

public class ProductoNoEncontradoExcepcion extends RuntimeException {
  public ProductoNoEncontradoExcepcion(String message) {
    super(message);
  }
}
