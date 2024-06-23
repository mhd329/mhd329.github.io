import MainRoutes from "./routes/MainRoutes"
import IntroRoutes from "./routes/IntroRoutes"
import ProjectsRoutes from "./routes/ProjectsRoutes"


interface routeObject {
  path: string
  element: () => JSX.Element
}


const routeArray: Array<routeObject> = [
  {
    path: '/',
    element: MainRoutes
  },
  {
    path: "/intro/this",
    element: IntroRoutes
  },
  {
    path: "/projects/outsourcing",
    element: ProjectsRoutes
  },
]


export default routeArray