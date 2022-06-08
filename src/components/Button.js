import React from "react";
import PropTypes from "prop-types";
import '../styles/PS5App.css';

const Button = ({
 text,
 onClick,
 btnClassName,
 spanClassName,
 btnConfig
})=>{
  const getStyle = ()=>{
   return {
    color: btnConfig?.txtColor,
    fontSize: btnConfig?.txtFont
   }
  }
  return (
   <button className={btnClassName} onClick={onClick}>
     <span className={["span-cls", (spanClassName || "" )].join(" ")} style={getStyle()}>{text}</span>
   </button>
  );
};
Button.propTypes= {
  text: PropTypes.string,
  onClick: PropTypes.func,
  btnClassName: PropTypes.string,
  spanClassName: PropTypes.string,
  btnConfig: PropTypes.object
};

export default Button;
