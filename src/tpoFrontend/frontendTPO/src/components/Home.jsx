import { useParams, useSearchParams } from "react-router-dom";
import Carrusel from "./Carrusel";
import ListaDeProductos from "./ListaDeProductos";

export default function Home() {
    const [searchParams] = useSearchParams()
    console.log(searchParams.get('q'))
    return(
        <>
           <Carrusel></Carrusel>
           <div>
            <h2 className="text-white text-center font-semibold text-6xl font-sans  ">Todos nuestros productos:</h2>
           </div>
            <ListaDeProductos
                filtro={searchParams.get('q')}></ListaDeProductos>
            <div className="grid grid-flow-col grid-rows-2 gap-0  bg-stone-300">
                <div className="row-span-3 ">
                    <img className="pe-0 "src="/imagenHome.webp"alt="imagen"></img>
                </div>
                <div className="row-span-3">
                    <div className="px-0.5 border-box display-block ">
                        <div className=" px-8 text-center my-20">
                        <h3 className="text-lime-900 font-bold text-3xl  ">Ayuda al planeta</h3>
                        <h3 className="text-lime-900 font-bold text-3xl mt-6">compra alimentos saludables!</h3>
                        <div>
                            <button className="mt-40 px- bg-lime-900 text-3xl "><p className="px-8 text-white mt-2 mb-4"><b>Comprar<br/>ahora</b></p></button>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}