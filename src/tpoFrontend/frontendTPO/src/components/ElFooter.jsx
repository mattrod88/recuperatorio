import { Link } from 'react-router-dom';
export default function ElFooter() {

  return (
    <>
      <footer className="mt-auto bg-white border  dark:bg-white-900 ">
        <div className=" mx-auto">
          <div className="lg:flex">
            <div className="w-full -mx-6 lg:w-2/5">
              <div className="px-60">
                
                <div className="max-w-sm mt-2 text-green-500 dark:text-white-400">
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
                        className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                      >
                        <i className="fa-fw  fas fa-home"></i> Inicio
                      </Link>
                      <Link
                        to="/carrito"
                        className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                      >
                        <i className="fa-fw  fas fa-shopping-cart"></i> tu carrito de compras
                      </Link>
                      <Link
                        to="/categorias"
                        className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                      >
                        <i className="fa-fw  fas fa-list"></i> Categorias
                      </Link>
                    </>
                    <>
                      <Link
                        to="login"
                        className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                      >
                        <i className="fas fa-sign-in-alt"></i> Iniciar Sesión
                      </Link>
                      <Link
                        to="registrarse"
                        className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                      >
                        <i className="fas fa-user-plus fa-fw"></i> Registrase
                      </Link>
                    </>
                </div>
                <div>
                  <h3 className="text-gray-700 uppercase dark:text-white">
                    contáctanos
                  </h3>
                  <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    <a href="mailto:mohamed.ahmed.emary@gmail.com">
                      tiendaOnlineSaludable@gmail.com
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          </div>
      </footer>
    </>
  );
}