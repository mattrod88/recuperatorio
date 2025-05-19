import React, { useState } from 'react';
import { PRODUCTOS } from '../assets/PRODUCTOS';


function Buscador( ) {

  const [buscar, setBuscar] = useState('');
  const [resultado, setResultado] = useState(PRODUCTOS);
  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    setBuscar(searchTerm);
    const newFilteredItems = PRODUCTOS.filter(item =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
  };

  return (
   <div >

   <input className='rounded-md bg-white pl-2 py-2 text-sm font-semibold text-gray-90 shadow-lg ring-1 ring-black/5 ' 
        type="texto"
        placeholder="Buscar..."
        value={buscar}
        onChange={handleInputChange}
        
      />
  
    </div>

  );
}

export default Buscador;