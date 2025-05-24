export const Filtro = ({setMostrar}) => {
  return (
    <section className="filter">
      <div
        id="drawer-disable-body-scrolling"
        className={`fixed z-40 h-screen p-5 overflow-y-auto bg-white w-72 dark:bg-gray-800 transition-transhtmlForm left-0 top-0 transhtmlForm-none`}
        tabIndex="-1"
        aria-labelledby="drawer-disable-body-scrolling-label"
        aria-modal="true"
        role="dialog"
      >
        <h5
          id="drawer-disable-body-scrolling-label"
          className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          Filtros
        </h5>
        <button onClick={()=>setMostrar(false)}
          type="button"
          data-drawer-dismiss="drawer-disable-body-scrolling"
          aria-controls="drawer-disable-body-scrolling"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Cerrar Filtros</span>
        </button>
        <div className="border-b pb-3"></div>
        <div className="py-4 overflow-y-auto">
          <ul className="text-slate-700 dark:text-slate-100">
            <li className="mt-1 mb-5">
              <p className="font-semibold my-1">Filtrar por:</p>
              <div className="flex items-center my-1">
                <input
                  
                  id="precio"
                  type="radio"
                  value=""
                  name="precio"
                  className="w-4 h-4 text-lime-900 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="precio"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                 Precio ascendente
                </label>
              </div>
              <div className="flex items-center my-1">
                <input
            
                 
                  id="precio1"
                  type="radio"
                  value=""
                  name="price-sort"
                  className="w-4 h-4 text-lime-900 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="precio1"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                 Precio descendente
                </label>
              </div>

            </li>
              <div className="flex items-center my-1">
                
                <select
                  id="categoria"
                  value=""
                  name="categoria"
                  className="w-4 h-4 text-lime-900 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="categoria"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                 Productos por categoria
                </label>
              </div>
              <div className="flex items-center my-1">
                <input
                 
                  id="only-instock"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-lime-900 bg-gray-100 rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="only-instock"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Productos con stock
                </label>
              </div>
            
            <li className="mt-1 mb-5 px-1">
              <button
               
                type="button"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-10 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Borrar filtros
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};