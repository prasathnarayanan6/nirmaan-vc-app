import React, {useState} from 'react'
import { FaBars, FaBook, FaCalendar, FaChalkboardTeacher, FaFilePdf, FaGraduationCap, FaHome, FaPeopleArrows} from 'react-icons/fa';

function SideBar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-800 text-dark shadow-lg">
        <a href="/"><SideBarIcon icon={<FaBars size="16" className="active:scale-[.100] active:duration-75 hover:scale-[1.02] ease-in-out transition-all" text="Phone"/>} /></a>
        <SideBarIcon icon={<FaHome size="16" className="active:scale-[.100] active:duration-75 hover:scale-[1.02] ease-in-out transition-all" text="Phone"/>} />
        <SideBarIcon icon={<FaGraduationCap className="active:scale-[.100] active:duration-75 hover:scale-[1.02] ease-in-out transition-all" size="16" />} />
        <SideBarIcon icon={<FaChalkboardTeacher className="active:scale-[.100] active:duration-75 hover:scale-[1.02] ease-in-out transition-all" size="16" />} />
        <SideBarIcon icon={<FaBook className="active:scale-[.100] active:duration-75 hover:scale-[1.02] ease-in-out transition-all" size="16" />} />
        <SideBarIcon icon={<FaCalendar className="active:scale-[.100] active:duration-75 hover:scale-[1.02] ease-in-out transition-all" size="16" />} />
        <a href="/connections"><SideBarIcon icon={<FaPeopleArrows className="active:scale-[.100] active:duration-75 hover:scale-[1.02] ease-in-out transition-all" size="16" />} /></a>
        <SideBarIcon icon={<FaFilePdf className="active:scale-[.100] active:duration-75 hover:scale-[1.02] ease-in-out transition-all" size="16" />} />
    </div>
  );
};
const SideBarIcon = ({ icon, text = "Home" }) => {
  const [hoverTooltip, setHoverTooltip] = useState(false);

  const handleMouseEnter = () => {
    setHoverTooltip(true);
  };

  const handleMouseLeave = () => {
    setHoverTooltip(false);
  };

  return (
    <div
      className="relative flex items-center justify-center h-10 w-10 mt-4 mb-1 mx-auto shadow-lg bg-gray-900 text-green-500 hover:bg-green-600 hover:text-white rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {icon}
      {hoverTooltip && (
        <span className="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 scale-100">
            {text}
        </span>
      )}
    </div>
  );
};
export default SideBar;