import "./style.css";
import { Link } from "react-router-dom"
import SidebarButton from "../atoms/SidebarButton";


interface ButtonsProps {
  buttonType: string;
}


// const sidebarButton: {[key: string]: JSX.Element} = {
//   "intro": <Sidebar ButtonList={<SidebarButtons  />} />,
//   "pjt": <Sidebar ButtonList={<SidebarButtons  />} />,
// }
// const sidebarPageContent: {[key: string]: JSX.Element} = {
//   "intro": <SidebarContent ContentList={<SidebarPageContent />} />,
//   "pjt": <SidebarContent ContentList={<SidebarPageContent />} />,
// }


function SidebarButtons(props: ButtonsProps): JSX.Element {
  let buttonList: Array<JSX.Element>;
  const button: {[key: string]: Array<JSX.Element>} = {
    "intro": [
      <SidebarButton name="" url="" />,
      <SidebarButton name="" url="" />,
      <SidebarButton name="" url="" />,
      <SidebarButton name="" url="" />,
    ],
    "pjt": [],
  }
  
  button[props.buttonType]
  return (
    <div className="SidebarButtons">
      <SidebarButton name="About me" url=""/>
      <SidebarButton name="About me" url=""/>
      <SidebarButton name="About me" url=""/>
    </div>
  );
}


export default SidebarButtons;