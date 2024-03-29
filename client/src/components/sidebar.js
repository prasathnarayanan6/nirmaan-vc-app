import React from 'react'
import { FaArrowAltCircleRight, FaBell, FaBook, FaCalendar, FaChalkboardTeacher, FaFilePdf, FaGraduationCap, FaHome, FaPeopleArrows} from 'react-icons/fa';

function SideBar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-800 text-dark shadow-lg">
        <SideBarIcon icon={<FaBell size="17" className="active:scale-[.100] active:duration-75 hover:scale-[1.02] ease-in-out transition-all" text="Phone"/>} />
        <SideBarIcon icon={<FaHome size="17" className="active:scale-[.100] active:duration-75 hover:scale-[1.02] ease-in-out transition-all" text="Phone"/>} />
        <SideBarIcon icon={<FaGraduationCap className="active:scale-[.100] active:duration-75 hover:scale-[1.02] ease-in-out transition-all" size="17" />} />
        <SideBarIcon icon={<FaChalkboardTeacher className="active:scale-[.100] active:duration-75 hover:scale-[1.02] ease-in-out transition-all" size="17" />} />
        <SideBarIcon icon={<FaBook className="active:scale-[.100] active:duration-75 hover:scale-[1.02] ease-in-out transition-all" size="17" />} />
        <SideBarIcon icon={<FaCalendar className="active:scale-[.100] active:duration-75 hover:scale-[1.02] ease-in-out transition-all" size="17" />} />
        <SideBarIcon icon={<FaPeopleArrows className="active:scale-[.100] active:duration-75 hover:scale-[1.02] ease-in-out transition-all" size="17" />} />
        <SideBarIcon icon={<FaFilePdf className="active:scale-[.100] active:duration-75 hover:scale-[1.02] ease-in-out transition-all" size="17" />} />
    </div>
  );
};

const SideBarIcon = ({icon, text='tooltip'}) => {
    return(
        <div className="relative flex items-center justify-center h-12 w-12 mt-4 mb-1 mx-auto shadow-lg bg-gray-900 text-green-500 hover:bg-green-600 hover:text-white rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer group;">
                {icon}
                <span className="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 origin-left group:scale-100">
                    {text}
                </span>
        </div>
    );
};
export default SideBar;