import MainPage from "../../pages/MainPage";
import { Route, Routes } from 'react-router-dom';


function SidebarRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/intro/this" element={<MainPage pageType="intro" />} />
    </Routes>
  )
}


export default SidebarRoutes;