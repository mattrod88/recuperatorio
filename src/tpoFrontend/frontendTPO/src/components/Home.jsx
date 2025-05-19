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
            <div className="grid grid-flow-col grid-rows-3 gap-4">
                <div className="row-span-3 ">
                    <img src="/imagenHome.webp"alt="imagen"></img>
                </div>
                <div className="row-span-2">
                    <div className="px-0.5 border-box display-block ">
                        <div className=" px-8 text-center">
                        <h3 className="text-white font-bold text-3xl ">Nuestros productos tienen certificación</h3>
                        <h3 className="text-white font-bold text-3xl ">y son regulados por el ministerio</h3>
                        <div>
                            <button className="mt-40 px- bg-white text-3xl "><p className="px-8 text-lime-900"><b>Comprar<br/>ahora</b></p></button>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}