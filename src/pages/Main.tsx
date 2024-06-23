import MainTemplate from "../components/templates/MainTemplate";


type MainProps = {
  contentType: string;
};


function Main(props: MainProps): JSX.Element {
  return (
    <MainTemplate contentType={props.contentType}/>
  );
}

export default Main;