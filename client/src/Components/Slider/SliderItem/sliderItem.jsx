// import ReactPlayer from 'react-player'
import "./style/sliderItemStyle.css"

function SliderItem (props) {

  return (
    <div className="slider_item flex_center">
      <div className="slider_item_cover">
        {/* <div className="slider_item_cover_video">
          <ReactPlayer url="./img/bg_image_1.jpg" width="100%" height="100%" />
        </div> */}
        <div className="slider_item_cover_video">
          <img src="./img/bg_image_1.jpg" width="100%" height="100%" alt="Just for example"/>
        </div>
        <div className="slider_item_cover_title">
          <span>AQUAMAN</span>
          <p> { props.title ? props.title : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere quaerat fugiat accusantium dicta quidem, rerum similique hic dignissimos, excepturi officia libero? Placeat hic esse inventore!" } </p>
        </div>
        <div className="slider_item_cover_button">
          <button>DOWNLOAD</button>
        </div>
      </div>
    </div>
  )
}

export default SliderItem