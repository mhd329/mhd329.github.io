import "./App.css";
import NavBar from './components/templates/NavBar'
import Main from './components/templates/Main'
import Footer from './components/templates/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThisPageIs from "./pages/introduce/ThisPageIs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>Go to main</Route>
          <Route path="intro/thispageis/" element={<ThisPageIs />}>Introduce</Route>
          <Route path="webpjts/" element={<Main />}>Web Projects</Route>
          <Route path="otherpjts/" element={<Main />}>Other Projects</Route>
        </Routes>
      </BrowserRouter>
      <a href="https://mhd329.tistory.com/" target="_blank">Tistory</a>
      <a href="https://github.com/mhd329" target="_blank">Github</a>
      <Footer />
    </div>
  );
}

export default App;
