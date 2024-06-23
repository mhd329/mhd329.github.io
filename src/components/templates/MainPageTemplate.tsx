import "./style.css";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import MainPageContent from "../organisms/MainPageContent";


interface PageContent{
  contentType: string;
}


function MainPageTemplate(props: PageContent): JSX.Element {
  return (
    <>
      <SimpleBar style={{height: "78vh", width: "100vw"}}>
        <MainPageContent />
      </SimpleBar>
    </>
  );
}


export default MainPageTemplate;