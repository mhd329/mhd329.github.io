import MainCard from "../atoms/MainCard";
import projectCards from "./projectCards";


function Cards(): JSX.Element {
  const cardList: Array<JSX.Element> = [];
  projectCards.map(cards => {
    cards.map(card => {
      cardList.push(<MainCard url={card["url"]} img={card["img"]} />)
    })
  })
  return(
    <div className="Cards">
      {cardList}
    </div>
  )
}


export default Cards;