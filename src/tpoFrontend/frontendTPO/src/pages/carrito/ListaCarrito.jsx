import React, { useState } from 'react'

export default function ListaCarrito() {
    const lista =[

    ]

  return (

    <>
      <section>
        <p className="text-2xl text-center text-lime-900 font-semibold my-10 underline underline-offset-2">
         Mi carrito
        </p>
      </section>
      
      <section>
      </section>

      <section className="max-w-4xl m-auto">
        <div className="flex flex-col p-2 border-b dark:border-slate-700 text-lg dark:text-slate-100">
          <p className="flex justify-between my-2">
            <span className="font-semibold text-lime-900">Total</span>
            <span>$</span>
          </p>
        </div>
        <div className="text-right my-5">
          <button  type="button" className="text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-lime-600 dark:hover:bg-lime-700 focus:outline-none dark:focus:ring-lime-800">
            PAGAR <i className="ml-2 bi bi-arrow-right"></i>
          </button>
        </div>
      </section>
    </>
  )
}
