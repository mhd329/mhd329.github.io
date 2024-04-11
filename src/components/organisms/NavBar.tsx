import "./style.css";
import { Link } from "react-router-dom";

function NavBar():JSX.Element {
  return (
    <div className="NavBar">
      <div className="GoToMainLink">
        <Link to='/'>Go to main</Link>
      </div>
      <div className="IntroLink">
        <Link to="/intro/thispageis/">Introduce</Link>
      </div>
      <div className="WebPjtLink">
        <Link to="/webpjts/">Web Projects</Link>
      </div>
      <div className="OtherPjtLink">
        <Link to="/otherpjts/">Other Projects</Link>
      </div>
      <div className="TistoryLink">
        <a href="https://mhd329.tistory.com/" target="_blank">Tistory</a>
      </div>
      <div className="GithubLink">
        <a href="https://github.com/mhd329" target="_blank">Github</a>
      </div>
    </div>
  )
}

export default NavBar;