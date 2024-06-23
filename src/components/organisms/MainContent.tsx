import Cards from "../mocules/Cards";
import Carousels from "../mocules/Carousels";


type ContentPrpos = {
  contentType: string;
};


function MainContent(props: ContentPrpos): JSX.Element {
  const contentType: {[key: string]: JSX.Element} = {
    "main": <Cards />,
    "intro": <Carousels carouselType="intro" />,
    "pjt": <Carousels carouselType="pjt" />,
  };
  return (
    <div className="MainContent">
      {contentType[props.contentType]}
    </div>
  );
}


export default MainContent;