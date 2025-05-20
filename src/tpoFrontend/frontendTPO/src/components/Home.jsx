import { useParams, useSearchParams } from "react-router-dom";
import Carrusel from "./Carrusel";
import ListaDeProductos from "./ListaDeProductos";

export default function Home() {
    const [searchParams] = useSearchParams()
    console.log(searchParams.get('q'))
    return(
        <>
           <Carrusel></Carrusel>
            <ListaDeProductos
                filtro={searchParams.get('q')}></ListaDeProductos>
            <div className="grid grid-flow-col grid-rows-2 gap-0  bg-stone-300">
                <div className="row-span-3 ">
                    <img className="pe-0 "src="/imagenHome.webp"alt="imagen"></img>
                </div>
                <div className="row-span-3">
                    <div className="px-0.5 border-box display-block ">
                        <div className=" px-8 text-center my-20">
                        <h3 className="text-lime-900 font-bold text-3xl  ">Nuestros productos tienen certificación</h3>
                        <h3 className="text-lime-900 font-bold text-3xl ">y son regulados por el ministerio</h3>
                        <div>
                            <button className="mt-40 px- bg-lime-900 text-3xl "><p className="px-8 text-white"><b>Comprar<br/>ahora</b></p></button>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}