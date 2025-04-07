package ar.com.uade.tiendaOnline.tpo.excepciones;

public class APIExceptionHandler extends RuntimeException {
  public APIExceptionHandler(String message) {
    super(message);
  }
}
