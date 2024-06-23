import "./style.css";
import { useState } from 'react';
import { Link } from "react-router-dom";
import DropdownButtons from "./DropdownButtons";
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


function Buttons(props: ButtonsProps): JSX.Element {
  const buttonList: {[key: string]: Array<JSX.Element>} = {
    "intro": [
      <OffcanvasButton name="About me" url="" />,
      <OffcanvasButton name="Skills" url="" />,
      <OffcanvasButton name="This site is..." url="" />,
    ],
    "pjt": [
      <DropdownButtons buttonType="outsourcing" />,
      <DropdownButtons buttonType="company" />,
      <DropdownButtons buttonType="personal" />,
      <DropdownButtons buttonType="team" />,
    ],
  }
  return (
    <div className="OffcanvasButtons">
      {buttonList[props.buttonType]}
    </div>
  );
}


export default Buttons;