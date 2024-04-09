// import NavBarButton from "../atoms/NavBarButton";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import ThisPageIs from "../../pages/introduce/ThisPageIs";

function NavBarMenus():JSX.Element {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>Go to main</Route>
          <Route path="intro/thispageis/" element={<ThisPageIs />}>Introduce</Route>
          <Route path="webpjts/" element={<Main />}>Web Projects</Route>
          <Route path="otherpjts/" element={<Main />}>Other Projects</Route>
        </Routes>
      </BrowserRouter>
      <a href="https://mhd329.tistory.com/" target="_blank">Tistory</a>
      <a href="https://github.com/mhd329" target="_blank">Github</a> */}
    </div>
  )
}

export default NavBarMenus;