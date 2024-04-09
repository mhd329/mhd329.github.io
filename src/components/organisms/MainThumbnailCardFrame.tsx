import MainThumbnailCard from "../mocules/MainThumbnailCard"
import ThisPageIs from "../../pages/introduce/ThisPageIs"

function MainThumbnailCards():JSX.Element {
  return (
    <div className="Container">
      <div className="Card">
        <MainThumbnailCard img="" path="intro/thispageis" element={<ThisPageIs />}/>
      </div>
    </div>
  )
}

export default MainThumbnailCards