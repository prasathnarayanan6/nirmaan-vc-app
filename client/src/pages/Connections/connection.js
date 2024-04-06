import React, {useState} from 'react'
import SideBar from '../../components/sidebar';
import NavBar from '../../components/NavBar';
import { FaUserTag } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
import { GrConnect } from "react-icons/gr";
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
                      <div className="mt-4 font-semibold text-slate-600">CONNECTIONS</div> 
                      {/* GRID */}
                      <div className="pt-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                    <div className="rounded-sm shadow-md border border-blue-200 rounded-xl col-span-full">
                                          <div className="p-3 flex flex-col">
                                                <div className="rounded-sm ">
                                                      <div className="fles flex-row">
                                                            <button type="button" className="active:scale-[.90] active:duration-70 hover:scale-[1.02] border border-green-300 rounded-md bg-green-500 transition-all ease-in-out md:text-sm font-semibold p-2 text-white"><span><IoMdPersonAdd /></span></button>
                                                            <button type="button" className="active:scale-[.90] active:duration-70 hover:scale-[1.02] border border-blue-300 rounded-md bg-purple-600 transition-all ease-in-out md:text-sm font-semibold p-2 text-white ms-4"><span><FaUserTag /></span></button>
                                                            <button type="button" className="active:scale-[.90] active:duration-70 hover:scale-[1.02] border border-blue-300 rounded-md bg-yellow-500 transition-all ease-in-out md:text-sm font-semibold p-2 text-white ms-4"><GrConnect /></button>
                                                            <input type="text" className="border border-blue-300 rounded-md bg-white-500 ms-4 md:h-[34px] w-[70%;]" placeholder="Search Tagged connections"></input>
                                                      </div>
                                                </div>
                                                <div className="m-7">

                                                </div>
                                          </div>
                                    </div>
                            </div>  
                      </div>
                      {/* END */}
            </div>
        </section>

    </div>
  )
}

export default Connections;