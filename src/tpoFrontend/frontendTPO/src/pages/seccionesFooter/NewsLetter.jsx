import React from 'react'

export default function NewsLetter() {
  return (
   <form
  className="text-neutral-800 py-6 relative mb-10 flex flex-col justify-around w-auto h-auto border border-neutral-500 rounded-lg bg-neutral-50 p-3 px-6"
>
  <div
    className="before:absolute before:w-32 before:h-20 before:right-2 before:bg-lime-600 before:-z-10 before:rounded-full before:blur-xl before:-top-12 z-10 after:absolute after:w-24 after:h-24 after:bg-lime-300 after:-z-10 after:rounded-full after:blur after:-top-12 after:-right-6"
  >
    <span className="font-extrabold text-2xl text-lime-600"
      >Mantente actualizado con novedades...</span>
    <p className="text-neutral-700">
     Regístrate y serás el primero en enterarte .
    </p>
  </div>
  <div className="flex gap-1">
    <div
      className="relative rounded-lg w-64 overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-lime-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-lime-300 after:right-12 after:top-3 after:rounded-full after:blur-lg"
    >
      <input
        type="text"
        className="relative bg-transparent ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-lime-700 text-sm rounded-lg focus:ring-lime-500 placeholder-opacity-60 focus:border-lime-500 block w-full p-2.5 checked:bg-emerald-500"
        placeholder="Mail..."
      />
    </div>
    <button
      className="bg-lime-500 text-neutral-50 p-2 rounded-lg hover:bg-lime-400"
    >
      Subscribete
    </button>
  </div>
</form>

  )
}
