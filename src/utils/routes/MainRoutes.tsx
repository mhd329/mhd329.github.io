import MainPage from "../../pages/MainPage";
import { Route, Routes } from 'react-router-dom';


function MainRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  )
}


export default MainRoutes;