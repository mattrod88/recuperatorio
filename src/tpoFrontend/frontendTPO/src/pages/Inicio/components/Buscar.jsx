import React from 'react'

export default function Buscar ()  {
  return (
    <div className="mx-auto max-w-screen-xl p-2 my-5">
        <form className="flex items-center">   
            <div className="relative w-full">
                <span className="bi bi-search flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></span>
                <input name="search" type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-lime-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-lime-900 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500" placeholder="Search" autoComplete="off" required="" />
            </div>
            <button type="submit" className="bi bi-search py-2.5 px-3 ml-2 text-sm font-medium text-white bg-lime-700 rounded-lg border border-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800">
            </button>
        </form>
    </div>
  )
}