package ar.com.uade.tiendaOnline.tpo.excepciones;

public class SinStockExcepcion extends RuntimeException {
  public SinStockExcepcion(String message) {
    super(message);
  }
}
