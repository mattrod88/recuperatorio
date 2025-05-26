package ar.com.uade.tiendaOnline.tpo.controllers.config;


import ar.com.uade.tiendaOnline.tpo.entidad.Roles;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Role;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

        private final JwtAuthenticationFilter jwtAuthFilter;
        private final AuthenticationProvider authenticationProvider;

        @Bean
        public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
                http

                                .csrf(AbstractHttpConfigurer::disable)
                        .cors(cors -> cors.configurationSource(corsConfigurationSource()))
                        //de autenticacion
                                .authorizeHttpRequests(req -> req.requestMatchers("/v1/auth/**").permitAll()
                                                .requestMatchers("/error/**").permitAll()
                                        //de categorias
                                                .requestMatchers(HttpMethod.GET,"/categorias").permitAll()
                                                .requestMatchers(("/categorias/{categoriaId}")).permitAll()
                                                .requestMatchers("/categorias/{id}").permitAll()
                                                .requestMatchers(HttpMethod.POST,"/categorias").hasAnyAuthority(Roles.ADMIN.name())
                                                .requestMatchers(HttpMethod.PUT,"/categorias/{id}").hasAnyAuthority(Roles.ADMIN.name())

                                        //de productos
                                                .requestMatchers(HttpMethod.GET,"/productos").permitAll()
                                                .requestMatchers(HttpMethod.GET,"/productos/{id}").permitAll()
                                                .requestMatchers(HttpMethod.POST,"/productos/").hasAnyAuthority(Roles.ADMIN.name())
                                                .requestMatchers(HttpMethod.DELETE,"/productos/{id}").permitAll()
                                                .requestMatchers(HttpMethod.POST,"/productos/{id}/imagen").hasAnyAuthority(Roles.ADMIN.name())
                                                .requestMatchers(HttpMethod.GET,"/productos/{id}/imagenes").permitAll()
                                                .requestMatchers(HttpMethod.DELETE,"/imagenes/{id}").hasAnyAuthority(Roles.ADMIN.name())
                                                .requestMatchers(HttpMethod.PUT,"/productos/{id}").hasAnyAuthority(Roles.ADMIN.name())



                                        //de usuarios
                                                .requestMatchers("/usuarios/registrados").hasAnyAuthority(Roles.ADMIN.name())

                                        //de pedidos
                                                .requestMatchers("/pedidos/comprar").hasAnyAuthority(Roles.CLIENTE.name())


                                        .anyRequest()
                                                .authenticated())
                                .sessionManagement(session -> session.sessionCreationPolicy(STATELESS))
                                .authenticationProvider(authenticationProvider)
                                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

                return http.build();
        }

        @Bean
        public CorsConfigurationSource corsConfigurationSource() {
                CorsConfiguration config = new CorsConfiguration();
                config.setAllowedOrigins(List.of("http://localhost:5173"));
                config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
                config.setAllowedHeaders(List.of("Authorization", "Content-Type"));
                config.setAllowCredentials(true);

                UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
                source.registerCorsConfiguration("/**", config);
                return source;
        }
}
