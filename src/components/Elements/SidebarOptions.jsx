import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SidebarOptions = (props) => {
  const Navigate = useNavigate();
  const location = useLocation();

  // Check if path contains navigate path
  const activePage = location.pathname.includes(props.navigate);

  return (
    <div
      className={`${props.padding ? props.padding : "px-4 py-5"} cursor-pointer transition-all flex items-center gap-3 whitespace-nowrap ${(activePage && props.navigate != '/') ? '!bg-[#F33F41] !text-white rounded-lg' : ''}`}
      onClick={() => {
        props.setShowMenuOnMobile(false)
        Navigate(props.navigate); // Navigate to the path
      }}
    >
      <div className="">
        {
          props.children
        }
      </div>
      <p className="text-sm"> {props.text}</p>
    </div>
  );
};
SidebarOptions.defaultProps = {
  children: "Add SVG as Children",
  text: "Add Title as text prop",
};
export default SidebarOptions;
