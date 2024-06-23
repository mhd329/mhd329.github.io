import { Link } from "react-router-dom"
import MainPageCard from "../atoms/MainPageCard"


function MainPageCards() {
  const ThisSiteIs: object = {
    img : "https://dummyimage.com/300x200/000/fff",
    url : "intro/this",
  }
  const intro: Array<Object> = [ThisSiteIs, ]
  const pjt: Array<Object> = []

  return(
    <div className="MainPageCards">
      <MainPageCard url="" img="https://dummyimage.com/300x200/000/fff" />
    </div>
  )
}


export default MainPageCards;