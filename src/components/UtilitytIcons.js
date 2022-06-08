import React from "react";
import PropTypes from "prop-types";
import '../styles/PS5App.css';

const UtilitytIcons = ({
 icons,
 onClickIcon
})=>{
  return (
   <div className="misc-section-wrapper">
      <div className="utility-wrapper">
         {icons.map((icon) => {
          return (<div onClick={onClickIcon && onClickIcon.bind(this, icon)} key={icon} className={["utility-icon-cls", icon].join(" ")}/>);
         })}
       </div>
       <div className="time-icon"/>
   </div>
  );
};
UtilitytIcons.propTypes= {
  icons: PropTypes.array,
  onClickIcon: PropTypes.func
};

export default UtilitytIcons;
