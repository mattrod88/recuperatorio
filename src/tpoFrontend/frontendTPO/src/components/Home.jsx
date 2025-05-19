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
        </>
    )
}