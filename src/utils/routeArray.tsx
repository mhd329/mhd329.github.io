import Main from "../pages/Main";
import ThisPageIs from "../pages/introduce/ThisPageIs";

interface routeObject {
  path: string
  element: () => JSX.Element
}

const routeArray:Array<routeObject> = [
  {
    path: '/',
    element: Main
  },
  {
    path: "/intro/thispageis/",
    element: ThisPageIs
  },
  {
    path: "/webpjts/",
    element: Main
  },
  {
    path: "/otherpjts/",
    element: Main
  }
]

export default routeArray