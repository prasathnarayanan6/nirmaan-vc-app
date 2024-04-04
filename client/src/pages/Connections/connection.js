import React from 'react'
import SideBar from '../../components/sidebar';
import NavBar from '../../components/NavBar';

function Connections() {
  return (
    <div className="flex">
        <section id='sidebar' className="w-[65px;]">
                <SideBar />
        </section>
        <section className="flex-grow">
            <NavBar />
            <div className="items-center px-4 py-4 m-auto mt-2 sm:mt-10 md:mt-1">
                <span className="text-slate-500 text-sm">Dashboard / Connections</span>

                      <div className="md:flex md:flex-wrap lg:flex lg:flex-wrap max-w-screen-3xl mt-3">
                        <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/4 sm:mt-0">
                              <div className="flex items-center px-5 py-6 shadow-xl rounded-md bg-white-800 border border-blue-300">
                              <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 transition-all duration-300 ease-linear cursor-pointer"><span className="text-xs">Establish Connections</span></button>
                                      {/* <div className="mx-4">
                                          <h4 className="text-2xl font-bold text-gray-700">159</h4>
                                          <div className="text-slate-400 font-semibold">Total Startups</div>
                                      </div> */}
                              </div>
                          </div>
                      </div>
            </div>
        </section>

    </div>
  )
}

export default Connections;