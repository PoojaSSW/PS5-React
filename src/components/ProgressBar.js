import React from "react";
import PropTypes from "prop-types";
import '../styles/PS5App.css';
import {isString} from "lodash";

const ProgressBar = ({
 content
})=>{
  return (
   <div className="progress-wrapper">
       {isString(content) && <div className={["icon-wrapper", content].join(" ")}/>}
       {!isString(content) && <div>{content}</div>}
   </div>
  );
};
ProgressBar.propTypes= {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};
export default ProgressBar;
