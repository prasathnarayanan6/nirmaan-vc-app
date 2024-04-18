import React, { useState } from "react";
import SideBar from "../../components/sidebar";
import NavBar from "../../components/NavBar";
function AddStartup() {
const [tabOpen, setTabOpen] = useState(false);
const [formsOpen, setFormsOpen] = useState(false);
const open = () => {
  setTabOpen(!tabOpen);
};
const openit = () => {
  setFormsOpen(!formsOpen);
};
  return (
    <div className="flex">
      <section id="sidebar" className="w-[66px;]">
        <SideBar />
      </section>
      <section className="flex-grow">
        <NavBar />
        <div className="items-center px-4 py-4 m-auto mt-2 sm:mt-10 md:mt-1">
          <span className="text-slate-500 text-sm">
            Startups / Add new Startup
          </span>
          <div className="grid grid-cols-6 mt-10 gap-10">
            <div className="mt-4 col-start-1 col-end-3 font-semibold text-slate-600 text-lg">
              Add new Startup
            </div>
            <div className="col-end-10 col-span-2 relative inline-block text-left">
              <div>
                <button
                  type="button"
                  onClick={() => open()}
                  className="inline-flex mt-4 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  Select the program
                  <svg
                    className="-mr-1 h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {tabOpen && (
                <div
                  className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                >
                  <div className="py-1" role="none">
                    <a
                      href=".."
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                    >
                      Nirmaan
                    </a>
                    <a
                      href=".."
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-1"
                    >
                      UGFIR
                    </a>
                    <a
                      href=".."
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-2"
                    >
                      KGMG
                    </a>
                    <a
                      href=".."
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-2"
                    >
                      SIP
                    </a>
                    <a
                      href=".."
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-2"
                    >
                      Disciplined Entrepreneurship
                    </a>
                    <a
                      href=".."
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-2"
                    >
                      Add new +
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <input type="text" id="fname" className="ms-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name of the startup" required />
              <input type="text" id="fname" className="ms-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Sector" required />
              <input type="text" id="fname" className="ms-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Startup type" required />
        </div>
      </section>
    </div>
  );
}
export default AddStartup;