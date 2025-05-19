import { Link } from 'react-router-dom';
import Tiktok from "../assets/Tiktok.svg"
import Instagram from "../assets/Instagram.svg"
export default function ElFooter() {

  return (
    <>
      <footer className="mt-8 ">
        <div className=" mx-4">
          <div className="lg:flex">
            <div className="w-full -mx-6 lg:w-2/5">
              <div className="px-60">
                
                <div className="max-w-sm mt-2 text-white dark:text-white-400 font-lg">
                  Descubre los mejores productos naturales!
                </div>
              </div>
            </div>
            <div className="mt-6 lg:mt-0 lg:flex-1">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                <div>
                    <>
                      <Link
                        to="/"
                        className="block mt-2 text-sm text-white dark:text-gray-400 hover:underline"
                      >
                        <i className="fa-fw  fas fa-home"></i> Inicio
                      </Link>
                      <Link
                        to="/carrito"
                        className="block mt-2 text-sm text-white dark:text-gray-400 hover:underline"
                      >
                        <i className="fa-fw  fas fa-shopping-cart"></i> tu carrito de compras
                      </Link>
                      <Link
                        to="/categorias"
                        className="block mt-2 text-sm text-white dark:text-gray-400 hover:underline"
                      >
                        <i className="fa-fw  fas fa-list"></i> Categorias
                      </Link>
                    </>
                    <>
                      <Link
                        to="login"
                        className="block mt-2 text-sm text-white dark:text-gray-400 hover:underline"
                      >
                        <i className="fas fa-sign-in-alt"></i> Iniciar Sesión
                      </Link>
                      <Link
                        to="registrarse"
                        className="block mt-2 text-sm text-white dark:text-gray-400 hover:underline"
                      >
                        <i className="fas fa-user-plus fa-fw"></i> Registrase
                      </Link>
                    </>
                </div>
                <div>
                  <h3 className="text-white uppercase dark:text-white">
                    contáctanos
                  </h3>
                  <span className="block mt-2 text-sm text-white dark:text-gray-400 hover:underline">
                    <a href="tiendaOnlineSaludable@gmail.com">
                      tiendaOnlineSaludable@gmail.com
                    </a>
                  </span>
                </div>
                <div>
                  <h3 className="text-white uppercase dark:text-white">
                    follow @TiendaOnline
                  </h3>
                  <div className="col-md-12">
                  <span className="h-25 w-25">
                    <a href="https://www.tiktok.com/">
                      <img className="h-8 w-8"  src ={Tiktok}></img>
                    </a>
                  </span>
                  <span >
                    <a href="https://www.instagram.com/">
                      <img className="h-8 w-8" src={Instagram}></img>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="font-light text-white bg-stone-400 text-lg ">
            <div className="container">
              <div className="row">
                <p>@2025 Tienda online saludable. Todos los derechos reservados</p>
                </div>
              </div>
            </div>
            </div>
      </footer>
    </>
  );
}