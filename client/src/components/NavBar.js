import React from 'react'
import img from '../assets/images/nirmaan-iitm.14fdf833.svg'
import { FaAppStore, FaDashcube, FaDatabase, FaFacebookMessenger, FaPaperPlane, FaRegBell, FaUserCircle } from 'react-icons/fa';
import profile from '../assets/images/svg.png'
function NavBar() {
  return (
    <div className="navbar">
          <nav className="bg-gray-100 border-gray-200 dark:bg-gray-900 shadow-lg">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
              <a href="https://github.com/prasathnarayanan6/nirmaan-vc-app" className="flex items-center space-x-3 rtl:space-x-reverse">
                  <img src={img} className="h-10" alt="Flowbite Logo" />
                  <span className="self-center text-md font-semibold whitespace-nowrap dark:text-white text-green-500 hover:text-green-500 transition-all eas-in-out active:scale-[.100] active:duration-75">V 1.0.0</span>
              </a>
              <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                  </svg>
              </button>
              <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                     <a href="/" className="block py-2 px-2 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-500 md:p-1 dark:text-white md:dark:text-blue-500 text-2xl hover:text-white hover:bg-green-400 rounded-3xl hover:rounded-2xl transition-all duration-200 ease-linear cursor-pointer group;" ><FaRegBell /></a>
                  </li>
                  <li>
                     <a href="/" className="block py-2 px-2 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-500 md:p-1 dark:text-white md:dark:text-blue-500 text-2xl hover:text-white hover:bg-green-400 rounded-3xl hover:rounded-2xl transition-all duration-200 ease-linear cursor-pointer group;" ><FaPaperPlane /></a>
                  </li>
                  <li>
                      <a href="/" className="block py-2 px-2 text-white bg-blue-700 rounded md:bg-transparent md:text-green-500 md:p-1 dark:text-white md:dark:text-blue-500 text-2xl hover:text-white hover:bg-green-400 rounded-3xl hover:rounded-2xl transition-all duration-300 ease-linear cursor-pointer group;" ><FaUserCircle /></a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    </div>
  )
}

export default NavBar;
