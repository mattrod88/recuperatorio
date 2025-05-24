import { useState } from "react";
import "tailwind.css";

export default function Cargando() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="App">
      <h1 className="text-lime-900 font-bold">Cargando...</h1>
    </div>
  );
}