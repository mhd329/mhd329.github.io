import "./style.css";
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';


interface MainPageCardProps {
  img: string;
  url: string;
}


function MainPageCard(props: MainPageCardProps): JSX.Element {
  return (
    <div className="MainPageCard">
      <Link to={props.url}>
        <Card>
          <Card.Img variant="top" src={props.img} />
        </Card>
      </Link>
    </div>
  );
}


export default MainPageCard;