<h1>Trabajo práctico obligatorio </h1>
<h2>Grupo-8</h2>
<ul>
<li>Daniela Gangotena:	1185437</li>
<li>Keila Checa:	1177842</li>
<li>Mathias Rodriguez:	1141510</li>
<li>Pedro Berrotaran:	1176890</li>
</ul>

<h1>Desarrollo de una Plataforma de E-commerce</h1>
<p>Nos han contratado para desarrollar una plataforma de e-commerce para una empresa local que busca expandir su presencia en el mercado digital. El objetivo es proporcionar una experiencia de compra intuitiva y segura para los usuarios finales, permitiéndoles explorar, seleccionar y comprar productos de manera eficiente. La empresa desea disponer de un sistema que permita a los usuarios vendedores realizar la publicación de su producto, así como también gestionar la misma (eliminar o modificar).</p>
<p>Debajo encontrarán detallados los requerimientos de la empresa.</p>

<div class="section">
  <h2>Requisitos Funcionales:</h2>

  <h3>Gestión de Usuarios:</h3>
  <ul>
      <li>Registro de usuarios como compradores y vendedores (debe solicitar un nombre de usuario, mail, contraseña, nombre y apellido).</li>
      <li>Autenticación de usuarios mediante usuario y contraseña (login).</li>
      <li>Administración de cuentas de usuario, incluyendo la asignación de permisos.</li>
  </ul>

  <h3>Catálogo de Productos:</h3>
  <ul>
      <li>Visualización de productos disponibles con fotografía y precio.</li>
      <li>Búsqueda y filtrado de productos por categoría, precio, etc.</li>
      <li>Al seleccionar algunos de los productos, dirigirá al detalle del mismo donde se visualizará la imagen del producto junto a su descripción.</li>
      <li>Opción para añadir productos al carrito de compras.</li>
      <li>En caso de que el producto no tenga stock, deberá estar indicado y no se podrá agregarlo al carrito.</li>
  </ul>

  <h3>Carrito de Compras:</h3>
  <ul>
      <li>Gestión del carrito de compras, con la posibilidad de agregar, eliminar o modificar productos.</li>
      <li>Realizar el checkout del carrito con el correspondiente cálculo automático del total de la compra.</li>
      <li>Una vez realizado el checkout (sin procesamiento de pago), se descontará el stock de dicho producto. Se deberá validar si cuenta con el stock correspondiente.</li>
  </ul>

  <h3>Gestión de Productos:</h3>
  <ul>
      <li>Los usuarios registrados como vendedores podrán realizar el alta de una publicación de un producto adjuntando una o más fotos del producto.</li>
      <li>En dicha publicación deberá adjuntar la descripción del producto, junto con la categoría a la cual pertenece y el precio.</li>
      <li>El usuario que crea dicho producto, podrá manejar el stock del mismo.</li>
      <li>El usuario podrá eliminar dicho producto.</li>
  </ul>
</div>

<div class="section">
  <h2>Requisitos de entrega</h2>
  <p>El trabajo por realizar es el siguiente:</p>
  <ul>
      <li>A partir del negocio entregado, agregar la capa de persistencia.</li>
      <li>Construir una API Rest para acceder a la información mencionada en su totalidad (completa o filtrada).</li>
      <li>Desarrollar una aplicación web que permita cumplir con los requerimientos enumerados.</li>
  </ul>

  <h3>Primera entrega:</h3>
  <ul>
      <li>Implementación de WebServices, con todas las funcionalidades requeridas.</li>
      <li>Implementación de mecanismos de persistencia.</li>
      <li>Implementación de la no visualización de productos sin stock.</li>
      <li>Registro y login de usuarios.</li>
  </ul>

  <h3>Segunda entrega:</h3>
  <ul>
      <li>Implementación del frontend de la página web utilizando JavaScript.</li>
      <li>Carga de productos, modificaciones y eliminación de los mismos.</li>
      <li>Gestión del carrito de compras: agregar, modificar y eliminar productos.</li>
      <li>Realización del checkout.</li>
      <li>Visualización, búsqueda y filtrado de productos disponibles.</li>
      <li>Gestión de descuentos de productos.</li>
  </ul>

  <h3>Entrega final:</h3>
  <ul>
      <li>Aplicación web adaptativa que cumpla con todos los requerimientos del TPO, integrando frontend y backend a través de Redux.</li>
  </ul>
</div>

