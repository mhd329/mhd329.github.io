import "./style.css";


interface SidebarProps {
  buttonType: string;
}


function Sidebar(props: SidebarProps):JSX.Element {
  return (
    <div className="Sidebar">
      {props.buttonType}
    </div>
  )
}


export default Sidebar;