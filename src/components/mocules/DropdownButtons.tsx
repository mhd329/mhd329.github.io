import "./style.css";
import { useState } from 'react';
import { Link } from "react-router-dom";
import OffcanvasButton from "../atoms/OffcanvasButton";


interface ButtonsProps {
  buttonType: string;
}


// const OffcanvasButton: {[key: string]: JSX.Element} = {
//   "intro": <Sidebar ButtonList={<OffcanvasButtons  />} />,
//   "pjt": <Sidebar ButtonList={<OffcanvasButtons  />} />,
// }
// const sidebarPageContent: {[key: string]: JSX.Element} = {
//   "intro": <SidebarContent ContentList={<SidebarPageContent />} />,
//   "pjt": <SidebarContent ContentList={<SidebarPageContent />} />,
// }


function DropdownButtons(props: ButtonsProps): JSX.Element {
  const buttonList: {[key: string]: Array<JSX.Element>} = {
    "outsourcing": [

    ],
    "company": [

    ],
    "personal": [

    ],
    "team": [

    ],
  }
  
  buttonList[props.buttonType]
  return (
    <div className="OffcanvasButtons">
      <OffcanvasButton name="About me" url=""/>
      <OffcanvasButton name="About me" url=""/>
      <OffcanvasButton name="About me" url=""/>
    </div>
  );
}


export default DropdownButtons;