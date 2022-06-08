import React from "react";
import PropTypes from "prop-types";
import '../styles/PS5App.css';

const SectionHeader = ({
 sections,
 selected,
 onSelectSection
})=>{
  return (
    <div className="section-wrapper">
       {sections.map((sec) => {
          const selectedCls = sec?.key === selected ? "bold" : "";
          return (
           <div key={sec?.key} className={["sec-name", selectedCls].join(" ")}>{sec?.name}</div>
          );
       })}
   </div>
  );
};
SectionHeader.propTypes= {
  sections: PropTypes.array,
  onChangeSection: PropTypes.func,
  selected: PropTypes.string
};

export default SectionHeader;
