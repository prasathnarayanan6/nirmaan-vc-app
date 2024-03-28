import React from "react";
import SideBar from "../../components/sidebar";
import NavBar from "../../components/NavBar";
function Home() {
    return (
            <div className="flex">
                <section id="SideBar" className="w-[65px]">
                        <SideBar />
                </section>
                <section id="" className="flex-grow">
                        <NavBar /> 
                        <h1>Hejlsa</h1>
                </section>
            </div>
    );
}
export default Home;