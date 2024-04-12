import { Link } from "react-router-dom"
import MainThumbnailCard from "../atoms/MainThumbnailCard"

interface SideMenu {
  img : string
  link : string
}

enum ImgLinkArrayIndex {
  intro = 0,
  webpjt = 1,
  otherpjt = 2,
}

enum IntroIndex {
  ThisPageIs = 0,
  AboutMe = 1,
  Skills = 2,
}

function MainThumbnailCardsFrame():JSX.Element {
  const ThisPageIs:SideMenu = {
    img : "https://dummyimage.com/300x200/000/fff",
    link : "intro/thispageis",
  }
  const intro:Array<Object> = [ThisPageIs, ]
  const webpjt:Array<Object> = []
  const otherpjt:Array<Object> = []
  const ImgLinkArray:Array<Array<Object>> = [intro, webpjt, otherpjt, ]

  return (
    <div className="CardsFrame">
      <Link to={ImgLinkArray[ImgLinkArrayIndex.intro][IntroIndex.ThisPageIs]}>
        <MainThumbnailCard img="https://dummyimage.com/300x200/000/fff" />
      </Link>
      <Link to="intro/thispageis">
        <MainThumbnailCard img="https://dummyimage.com/300x200/000/fff" />
      </Link>
      <Link to="intro/thispageis">
        <MainThumbnailCard img="https://dummyimage.com/300x200/000/fff" />
      </Link>
      <Link to="intro/thispageis">
        <MainThumbnailCard img="https://dummyimage.com/300x200/000/fff" />
      </Link>
      <Link to="intro/thispageis">
        <MainThumbnailCard img="https://dummyimage.com/300x200/000/fff" />
      </Link>
      <Link to="intro/thispageis">
        <MainThumbnailCard img="https://dummyimage.com/300x200/000/fff" />
      </Link>
      <Link to="intro/thispageis">
        <MainThumbnailCard img="https://dummyimage.com/300x200/000/fff" />
      </Link>
      <Link to="intro/thispageis">
        <MainThumbnailCard img="https://dummyimage.com/300x200/000/fff" />
      </Link>
    </div>
  );
}

export default MainThumbnailCardsFrame