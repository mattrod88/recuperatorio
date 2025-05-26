import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";


const Auth = ({callbackLogin}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 mt-2 "> 
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-5xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-lime-900">Mi cuenta</h1>
          <p className="text-lime-900 mt-2">
            Inicia sesión en tu cuenta actual o regístrate si eres nuevo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border-r border-gray-300 pr-4">
            <LoginForm callbackLogin = {callbackLogin}/>
          </div>
          <div className="pl-4">
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
