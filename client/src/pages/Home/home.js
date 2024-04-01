import React from "react";
import SideBar from "../../components/sidebar";
import NavBar from "../../components/NavBar";
import { FaBookOpen, FaGraduationCap } from "react-icons/fa";
function Home() {
    return (
            <div className="flex">
                <section id="SideBar" className="w-[65px]">
                        <SideBar />
                </section>
                <section id="" className="flex-grow">
                <NavBar /> 
                    <div className="container items-center px-4 py-3 m-auto mt-2 sm:mt-10 md:mt-10">
                            <div className="flex flex-wrap -mx-6">
                                <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/4 sm:mt-0">
                                    <div class="flex items-center px-5 py-6 shadow-lg rounded-md">
                                            <div class="p-3 rounded-full bg-gray-900 bg-opacity-75">
                                                <FaBookOpen  size="28" className="text-green-400"/>
                                            </div>
                                        <div class="mx-4">
                                            <h4 class="text-2xl font-bold text-green-400">3453</h4>
                                            <div class="text-green-400">Total Startups</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/4 sm:mt-0">
                                    <div class="flex items-center px-5 py-6 shadow-lg rounded-md bg-gray-800">
                                        <div class="p-3 rounded-full bg-gray-900 bg-opacity-75">
                                            <FaBookOpen  size="28" className="text-green-100"/>
                                        </div>
                                        <div class="mx-4">
                                            <h4 class="text-2xl font-bold text-green-400">3453</h4>
                                            <div class="text-green-400">Active Startups</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/4 sm:mt-0">
                                    <div class="flex items-center px-5 py-6 shadow-lg rounded-md bg-gray-800">
                                        <div class="p-3 rounded-full bg-gray-900 bg-opacity-75">
                                            <FaGraduationCap  size="28" className="text-green-400"/>
                                        </div>
                                        <div class="mx-4">
                                            <h4 class="text-2xl font-bold text-green-400">3453</h4>
                                            <div class="text-green-400">Graduated Startups</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/4 sm:mt-0">
                                    <div class="flex items-center px-5 py-6 shadow-lg rounded-md bg-gray-800">
                                        <div class="p-3 rounded-full bg-gray-900 bg-opacity-75">
                                            <FaBookOpen  size="28" className="text-green-100"/>
                                        </div>
                                        <div class="mx-4">
                                            <h4 class="text-2xl font-bold text-green-400">3453</h4>
                                            <div class="text-green-400">Dropped Out</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </section>
            </div>
    );
}
export default Home;