import MainRoutes from "./routes/MainRoutes"
import SidebarRoutes from "./routes/SidebarRoutes"


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
    element: SidebarRoutes
  },
  {
    path: "/projects/outsourcing",
    element: SidebarRoutes
  },
]


export default routeArray