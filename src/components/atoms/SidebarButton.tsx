import "./style.css";
import { Link } from "react-router-dom"


interface ButtonProps {
  name: string;
  url: string;
}


function SidebarButton(props: ButtonProps): JSX.Element {
  return (
    <Link to={props.url}>
      <div className="Button">
        {props.name}
      </div>
    </Link>
  );
}


export default SidebarButton;