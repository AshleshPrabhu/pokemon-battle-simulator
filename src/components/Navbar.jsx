import React from 'react'

function Navbar() {
  return (
    

    <nav className="bg-white border-gray-200 dark:bg-gray-900 mt-0
    ">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://imgs.search.brave.com/acqsGtMSVJ7xT01cTlRYKeTaWebn6DVnF0q2dSUEEfg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/cG5naW1nLmNvbS90/aHVtYi9jYXRlZ29y/aWVzLzQ5My5wbmc" className="h-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PokeGame</span>
        </a>
        <div className="  block w-auto" >
        <ul className="font-medium flex   p-0  border-0 border-gray-100 rounded-lg  flex-row md:space-x-8  mt-0  ">
            <li>
            <a href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
            </li>
            <li>
            <a href="battle" className=" py-2 px-3 text-white rounded hover:bg-transparent border-0 hover:text-blue-700 p-0 ">Battle</a>
            </li>
            
        </ul>
        </div>
    </div>
    </nav>

  )
}

export default Navbar