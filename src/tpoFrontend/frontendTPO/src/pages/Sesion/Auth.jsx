import LoginForm from "./components/LoginForm";

const Auth = ({ callbackLogin }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 mt-2">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-lime-900">Iniciar Sesión</h1>
          <p className="text-lime-900 mt-2">Ingresá a tu cuenta para continuar</p>
        </div>

        <LoginForm callbackLogin={callbackLogin} />
      </div>
    </div>
  );
};

export default Auth;

