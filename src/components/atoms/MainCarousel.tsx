import "./style.css";
import { Carousel } from "react-bootstrap";


interface ContentProps {
  content: JSX.Element;
}


function MainCarousel(props: ContentProps): JSX.Element {
  return (
    <Carousel>
      <div className="MainpageContent">
        {props.content}
      </div>
    </Carousel>
  );
}


export default MainCarousel;