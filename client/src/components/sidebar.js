import React from 'react'
import { FaBook, FaCreditCard, FaGraduationCap, FaHandSparkles, FaInfo, FaLock, FaPaw, FaPhone, FaReact, FaRegAddressBook, FaSchool, FaSuitcase, FaTrafficLight, FaTrophy } from 'react-icons/fa';

function SideBar() {
  return (
    <div className="fixed top-0 lef-0 h-screen w-16 m-0 flex flex-col bg-gray-800 text-white shadow-lg">
        <SideBarIcon icon={<FaPhone size="17" />} />
        <SideBarIcon icon={<FaSuitcase size="17" />} />
        <SideBarIcon icon={<FaInfo size="17" />} />
        <SideBarIcon icon={<FaBook size="17" />} />
        <SideBarIcon icon={<FaPaw size="17" />} />
        <SideBarIcon icon={<FaGraduationCap size="17" />} />
        <SideBarIcon icon={<FaSchool size="17" />} />
        <SideBarIcon icon={<FaTrafficLight size="17" />} />
        <SideBarIcon icon={<FaHandSparkles size="17" />} />
        <SideBarIcon icon={<FaCreditCard size="17" />} />
        <SideBarIcon icon={<FaTrophy size="17" />} />
        <SideBarIcon icon={<FaLock size="17" />} />
    </div>
  );
};

const SideBarIcon = ({icon, text='tooltip'}) => {
    return(
        <div className="relative flex items-center justify-center h-12 w-12 mt-2 mb-0 mx-auto shadow-lg bg-gray-900 text-green-500 hover:bg-green-600 hover:text-white rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer group;">
                {icon}
                <span className="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 origin-left group:scale-100">
                    {text}
                </span>
        </div>
    );
};
export default SideBar;