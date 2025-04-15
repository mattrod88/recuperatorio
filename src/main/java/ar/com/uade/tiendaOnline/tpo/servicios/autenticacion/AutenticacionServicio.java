package ar.com.uade.tiendaOnline.tpo.servicios.autenticacion;
import ar.com.uade.tiendaOnline.tpo.controllers.auth.AuthenticationResponse;
import ar.com.uade.tiendaOnline.tpo.controllers.config.JwtService;
import ar.com.uade.tiendaOnline.tpo.entidad.Roles;
import ar.com.uade.tiendaOnline.tpo.entidad.Usuario;
import ar.com.uade.tiendaOnline.tpo.controllers.auth.AutenticacionRequest;
import ar.com.uade.tiendaOnline.tpo.controllers.auth.RegistrarseRequest;
import ar.com.uade.tiendaOnline.tpo.repositorio.UsuarioRepositorio;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;

    @Service
    @RequiredArgsConstructor
    public class AutenticacionServicio implements IAutenticacion {
        private final UsuarioRepositorio repository;
        private final PasswordEncoder passwordEncoder;
        private final JwtService jwtService;
        private final AuthenticationManager authenticationManager;

        public AuthenticationResponse registrarse(RegistrarseRequest request) {
            var usuario = Usuario.builder()
                    .nombre(request.getNombre())
                    .apellido(request.getApellido())
                    .email(request.getEmail())
                    .contrasena(passwordEncoder.encode(request.getContrasena()))
                    .rol(Roles.CLIENTE)  //por default todos son clientes excepto el admin, el admin va cargado en la base dato por SQL admin.
                    .build();

            repository.save(usuario);
            var jwtToken = jwtService.generateToken(usuario,Roles.CLIENTE);
            return AuthenticationResponse.builder()
                    .accessToken(jwtToken)
                    .build();
        }

        public AuthenticationResponse authenticarse(AutenticacionRequest request) {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getContrasena()));

            var usuario = repository.findByEmail(request.getEmail())
                    .orElseThrow();
            var jwtToken = jwtService.generateToken(usuario,usuario.getRol());
            return AuthenticationResponse.builder()
                    .accessToken(jwtToken)
                    .build();
        }
    }


