import { Link } from "react-router-dom"
import MainThumbnailCard from "../mocules/MainThumbnailCard"

function MainThumbnailCardFrame():JSX.Element {
  return (
    <div className="Cards">
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
      <Link to="intro/thispageis">
        <MainThumbnailCard img="https://dummyimage.com/300x200/000/fff" />
      </Link>
      <Link to="intro/thispageis">
        <MainThumbnailCard img="https://dummyimage.com/300x200/000/fff" />
      </Link>
    </div>
  )
}

export default MainThumbnailCardFrame