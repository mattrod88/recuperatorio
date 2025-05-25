
import { useState } from 'react';
const LoginForm = () => {
 
    
 

    return (
        <form className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    placeholder="Ingresa tu email"
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-900"
                    name=""
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Contraseña</label>
                <input
                    type="password"
                  
                    placeholder="Ingresa tu contraseña"
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-900"
                    
                />
            </div>

            <button
               
                className="bg-lime-900 text-white px-4 py-2 rounded hover:bg-gray-800 transition w-full"
            >
                Ingresar
            </button>
        </form>
    );
};

export default LoginForm;
