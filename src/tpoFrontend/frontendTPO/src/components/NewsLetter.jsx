

export default function Page() {
 
  return (
    <>
      <h1>Suscribete a nuestra NewsLetter</h1>
      <form  id="signup-form">
        <label htmlFor="email">Email: </label>
        <input name="email" id="email" placeholder="tuEmail@ejemplo.com" />
        <button>Suscribirse</button>
        
      </form>
    </>
  );
}
