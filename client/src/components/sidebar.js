import React, {useState} from 'react'
import { FaBars, FaBook, FaCalendar, FaChalkboardTeacher, FaFilePdf, FaGraduationCap, FaHome, FaPeopleArrows} from 'react-icons/fa';

function SideBar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-800 text-dark shadow-lg">
      <SideBarLink href="/">
        <SideBarIcon icon={<FaBars size="16" />} tooltipText="Bars" />
      </SideBarLink>
      <SideBarIcon icon={<FaHome size="16" />} tooltipText="Home" />
      <SideBarIcon icon={<FaGraduationCap size="16" />} tooltipText="Graduation" />
      <SideBarIcon icon={<FaChalkboardTeacher size="16" />} tooltipText="Teacher" />
      <SideBarIcon icon={<FaBook size="16" />} tooltipText="Book" />
      <SideBarIcon icon={<FaCalendar size="16" />} tooltipText="Calendar" />
      <SideBarLink href="/connections">
        <SideBarIcon icon={<FaPeopleArrows size="16" />} tooltipText="Connections" />
      </SideBarLink>
      <SideBarIcon icon={<FaFilePdf size="16" />} tooltipText="Reports" />
    </div>
  );
}

const SideBarLink = ({ href, children }) => {
  return (
    <a href={href} className="block">
      {children}
    </a>
  );
};

const SideBarIcon = ({ icon, tooltipText }) => {
  const [hoverTooltip, setHoverTooltip] = useState(false);

  const handleMouseEnter = () => {
    setHoverTooltip(true);
  };

  const handleMouseLeave = () => {
    setHoverTooltip(false);
  };

  return (
    <div
      className="relative flex items-center justify-center h-10 w-10 mt-4 mb-1 mx-auto shadow-lg bg-gray-900 text-green-500 hover:bg-green-600 hover:text-white rounded-3xl hover:rounded-xl transition-all duration-300 cursor-pointer group active:scale-[.98] active:duration-75 hover:scale-[1.02] ease-in-out transition-all"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {icon}
      {hoverTooltip && (
        <span className="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 scale-100">
            {tooltipText}
        </span>
      )}
    </div>
  );
};
export default SideBar;