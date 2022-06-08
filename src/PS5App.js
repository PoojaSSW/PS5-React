import React, {Fragment,useState} from "react";
import PS5BgImage from './components/PS5BgImage';
import constant from "./Constants";

const PS5App = ()=>{
  const [selectedIconSection, setSelectedIconSection] = useState("deathloops");
  const [selectedIconObj,setSelectedIconObj]  = useState({imgName: "deathloops-bg", imgTextClassName: "deathloops-text"});
  const onChangeSection = (icon)=> {
    const imgObj = Object.assign({}, {imgName: icon+"-bg", imgTextClassName: icon+"-text"});
    setSelectedIconSection(icon);
    setSelectedIconObj(imgObj);
  };
  return (
   <Fragment>
     <PS5BgImage
       iconSections= {constant.list}
       imgObj={selectedIconObj}
       selectedIcon = {selectedIconSection}
       onChangeSection={onChangeSection.bind(this)} />
   </Fragment>
  );
};

export default PS5App;
