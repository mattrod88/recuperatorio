import { NavLink } from 'react-router-dom';

export default function Producto(props) {
    const precio = props.producto.precio.toLocaleString('es-ar', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 2
      });
    return(
        <div className='fondo2 cursor-pointer w-76 h-80 rounded-lg relative border'>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 flex justify-center items-center'>
                    {props.producto.categoriaId}
                </span>
                <img src={props.producto.pictureUrl} alt={`${props.producto.nombre}`} className='w-full h-full object-contain rounded-lg' />
            </figure>
            <p className='flex justify-between px-1'>
                <span className='text-sm font-light'>
                    {props.producto.categoria}
                </span>
                <span className='text-lg font-medium'>{precio}</span>
                <NavLink to={`/producto/${props.producto.id}`} className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 flex justify-center items-center'>Ver Detalle</NavLink>
            </p>
        </div>
    );
}