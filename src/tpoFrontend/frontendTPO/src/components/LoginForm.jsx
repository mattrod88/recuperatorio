import { useState } from 'react';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = () => {
        if (email.trim() === "" || password.trim() === "") {
            alert("Los campos no pueden estar vacíos");
            return;
        }
    };

    return (
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ingresa tu email"
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-900"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Contraseña</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Ingresa tu contraseña"
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-900"
                    
                />
            </div>

            <button
                onClick={handleClick}
                className="bg-lime-900 text-white px-4 py-2 rounded hover:bg-gray-800 transition w-full"
            >
                Ingresar
            </button>
        </form>
    );
};

export default LoginForm;
