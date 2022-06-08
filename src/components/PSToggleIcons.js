import React from "react";
import '../styles/PS5App.css';
import PropTypes from "prop-types";

const PSToggleIcons = ({
 iconList,
 selectedIcon,
 onChangeSection,
 subText
})=>{
  return (
   <div className="icon-section-wrapper">
     <div className="icon-wrapper">
        {iconList.map((icon) => {
         const selectedSec = selectedIcon===icon ?  "highlighted-icon": "";
         return (<div onClick={onChangeSection && onChangeSection.bind(this, icon)} key={icon} className={["img-icon-cls", icon, selectedSec].join(" ")}/>)
        })}
      </div>
      {subText && <div className={["subtext-title", selectedIcon+"-subtext"].join(" ")}/>}
   </div>
  );
};
PSToggleIcons.propTypes= {
  iconList: PropTypes.array,
  onChangeSection: PropTypes.func,
  selectedIcon: PropTypes.string,
  subText: PropTypes.bool
};
export default PSToggleIcons;
