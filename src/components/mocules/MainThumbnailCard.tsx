import { Route } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import "./style.css";

type MainThumbnailCardProps = {
  img: string;
  path: string;
  element: JSX.Element;
}

function MainThumbnailCard(props: MainThumbnailCardProps):JSX.Element {
  return (
    <Card>
      <Card.Img variant="top" src={props.img} />
    </Card>
  );
}

export default MainThumbnailCard;