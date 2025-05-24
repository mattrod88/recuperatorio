import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignUpForm";

const Auth = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 mt-24">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-5xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-lime-900">Mi cuenta</h1>
          <p className="text-lime-900 mt-2">
            Inicia sesión en tu cuenta actual o regístrate si eres nuevo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border-r border-gray-300 pr-4">
            <h2 className="text-xl font-semibold mb-4 text-center text-lime-900">
              Login
            </h2>
            <LoginForm />
          </div>

         
          <div className="pl-4">
            <h2 className="text-xl font-semibold mb-4 text-center text-lime-900">
              Registrate
            </h2>
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
