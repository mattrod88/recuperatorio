import { useState } from "react";


export default function NewsLetter() {
      const [email, setEmail] = useState('');
    
      const handleClick = () => {
          if (email.trim() === "") {
              alert("Los campos no pueden estar vacíos")
          }}

      return (
         <>
      <h1 className="text-lime-900 mt-5 w-full ">Suscribete a nuestra NewsLetter</h1>
      <form onSubmit={(e) => e.preventDefault()}  id="signup-form">
        <label htmlFor="email ">Email: </label>
        <input 
        name="email" 
        id="email" 
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Ingresa tu email">

        </input>
        <button 
         onClick={handleClick} className="mt-2 rounded-none px-1 bg-stone-400 border-stone text-lime-900" >Suscribirse</button>
       
      </form>
    </>
  );
}
