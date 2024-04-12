import "./style.css";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

interface BaseTemplateProps {
  FrameElement: JSX.Element
}

function BaseTemplate(props: BaseTemplateProps):JSX.Element {
  return (
    <div className="Main">
      <SimpleBar style={{height: "78vh", width: "100vw"}}>
        {props.FrameElement}
      </SimpleBar>
    </div>
  );
}

export default BaseTemplate;