import "./style/recommendedStyle.css"
import SimpleSlider from '../../../Slider/slider'

function Recommended() {
  return (
    <div className="recommended_container">
      <div className="recommended_header">
        <span className="recommended_header_span">TOP ACTIONS</span>
        <p className="recommended_header_p">RECOMMENDED MOVIES</p>
      </div>
      <div className="recommended_slider">
        <h2 className="slider_headers">New movies</h2>
        <SimpleSlider />
        <h2 className="slider_headers">More watched</h2>
        <SimpleSlider />
        <h2 className="slider_headers">Classic</h2>
        <SimpleSlider />
        <h2 className="slider_headers">For you</h2>
        <SimpleSlider />
      </div>
      <div className="recommended_ad"></div>
    </div>
  )
}

export default Recommended