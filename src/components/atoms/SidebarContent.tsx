import "./style.css";


interface ContentProps {
  content: JSX.Element;
}


function SidebarContent(props: ContentProps): JSX.Element {
  return (
    <div className="Content">
      {props.content}
    </div>
  );
}


export default SidebarContent;