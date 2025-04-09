package ar.com.uade.tiendaOnline.tpo.excepciones;

public class UsuarioDuplicado extends RuntimeException {
  public UsuarioDuplicado(String message) {
    super(message);
  }
}
