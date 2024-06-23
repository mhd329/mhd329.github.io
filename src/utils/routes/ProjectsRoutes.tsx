import MainPage from "../../pages/MainPage";
import { Route, Routes } from 'react-router-dom';


function SidebarRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/projects/outsourcing" element={<MainPage pageType="pjt" />} />
    </Routes>
  )
}


export default SidebarRoutes;