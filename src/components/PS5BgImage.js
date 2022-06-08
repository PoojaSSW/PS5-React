import PropTypes from "prop-types";
import React, {useState} from "react";
import '../styles/PS5App.css';
import PSToggleIcons from './PSToggleIcons';
import SectionHeader from "./SectionHeader";
import Button from "./Button";
import UtilitytIcons from "./UtilitytIcons";
import ProgressBar from "./ProgressBar";
import constant from "../Constants";
import {isEmpty} from "lodash";
const PS5BgImage = ({
 imgObj,
 onChangeSection,
 selectedIcon,
 iconSections
})=>{

  const [sectionSelected, setSectionSelected] = useState("games");
  const onSelectSection = (obj)=> {
    setSectionSelected(obj?.key);
  };
  const onClickPlayBtn =(event) => {
   alert("Play button clicked");
  }
  const onClickDots =(event) => {
   alert("dots button clicked");
  }
  /* this could ideally be a value coming from the api response. For this ex mocking the data */
  const contentData = [{text: "Progress", value: "86%"}, {text: "Earned", value: constant.earned+"/"+constant.total}];

  /* For <ProgressBar> component, for this project I have extracted this as an image, hence adding this to the prop as first condition.
  This string of image value could be skipped if we have data.
  Ideally this could be an array of object holding some data on the progress bar */
  return (
    <div className={["img-cls", imgObj?.imgName].join(" ")}>
        <div className="main-section-wrapper">
          <SectionHeader
            sections={constant.sectionArr}
            selected={sectionSelected}
            onSelectSection={onSelectSection.bind(this)}/>
          <UtilitytIcons icons={constant.utilityIcons}/>
        </div>
        <PSToggleIcons
          iconList={iconSections}
          selectedIcon={selectedIcon}
          onChangeSection={onChangeSection} subText/>
        <div className ={["img-text-cls", imgObj?.imgTextClassName].join(" ")}></div>
        <div className="action-wrapper">
           <div className="button-wrapper">
             <Button
               text="Play Game"
               onClick={onClickPlayBtn.bind(this)}
               btnClassName={["btn-common-cls", "play-btn-cls"].join(" ")}
               btnConfig={{txtColor: "#fff", txtFont: "30px"}}></Button>
             <Button
               text="..."
               onClick={onClickDots.bind(this)}
               btnClassName={["btn-common-cls", "dots-btn-cls"].join(" ")}
               spanClassName={"dots-span-cls"}
               btnConfig={{txtColor: "#fff", txtFont: "40px"}}></Button>
           </div>
           <ProgressBar content={"progress-bar-icon" || (!isEmpty(contentData) && contentData)}/>
        </div>
    </div>
  );
};
PS5BgImage.propTypes= {
  imgObj: PropTypes.object,
  onChangeSection: PropTypes.func,
  selectedIcon: PropTypes.string,
  iconSections: PropTypes.array
};

export default PS5BgImage;
