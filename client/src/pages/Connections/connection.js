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
            Dashboard
        </section>

    </div>
  )
}

export default Connections;