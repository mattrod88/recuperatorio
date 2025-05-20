

export default function NewsLetter() {
 
  return (
    <>
      <h1 className="text-white mt-5">Suscribete a nuestra NewsLetter</h1>
      <form  id="signup-form">
        <label htmlFor="email ">Email: </label>
        <input name="email" id="email" placeholder=" tuEmail@ejemplo.com" /> <button className="mt-2 rounded-none px-1 bg-stone-400 border-stone text-lime-900 text-white" >Suscribirse</button>
       
        
      </form>
    </>
  );
}
