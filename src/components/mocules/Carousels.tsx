import "./style.css";
import MainCarousel from "../atoms/MainCarousel";


type CarouselsProps = {
  carouselType: string;
};


function Carousels(props: CarouselsProps): JSX.Element {
  const contentList: {[key: string]: Array<JSX.Element>} = {
    "intro": [],
    "pjt": [],
  }
  return (
    <div className="Carousels">
    </div>
  );
}


export default Carousels;