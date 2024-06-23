import "./style.css";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import MainContent from "../organisms/MainContent";


type TemplateProps = {
  contentType: string;
};


function MainTemplate(props: TemplateProps): JSX.Element {
  return (
    <div className="MainTemplate">
      <SimpleBar style={{height: "78vh", width: "100vw"}}>
        <MainContent contentType={props.contentType}/>
      </SimpleBar>
    </div>
  );
}


export default MainTemplate;