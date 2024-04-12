import BaseTemplate from "../components/templates/BaseTemplate";
import MainThumbnailCardsFrame from "../components/organisms/MainThumbnailCardsFrame";

function Main():JSX.Element {
  return (
    <BaseTemplate FrameElement={<MainThumbnailCardsFrame />}/>
  );
}

export default Main;