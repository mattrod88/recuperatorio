import { Link } from "react-router-dom"

export const Banner1 = () => {
  return (
    <section className="flex flex-col lg:flex-row text-lime-900 items-center ">
        <div className="text my-5">
            <h1 className="text-5xl text-lime-900 font-bold">Con tu compra ayudas al medio ambiente</h1>
            <p className="text-2xl my-7 px-1 text-lime-900">Tienda online saludable es la tienda #1 de productos sanos en Argentina.</p>
            <Link to="/productos" type="button" className="text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-lime-600 dark:hover:bg-lime-700 focus:outline-none dark:focus:ring-lime-800">Ver productos</Link>
        </div>
        <div className="visual my-5 lg:max-w-xl">
            <img className="rounded-lg max-h-full" src="/imagenHome.webp" alt="especias" />
        </div>
    </section>
  )
}