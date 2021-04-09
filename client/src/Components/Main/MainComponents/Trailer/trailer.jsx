import "./style/trailerStyle.css"
import { Link } from 'react-router-dom'

function Trailer() {
  return (
    <div className="trailer_container">
      <div className="trailer_container_cover">
        <div className="trailer_first">
          <span className="trailer_first_date">31 SEPT 2021</span>
          <span className="trailer_first_name">AVENRGERS - INFINITY WAR</span>
          <span className="trailer_first_about">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
            iste accusantium, magni maxime sequi molestiae natus
            eligendi odio consequatur voluptatibus architecto
            deserunt ea similique nihil saepe laudantium
            consequuntur sit, maiores numquam asperiores.
            Id mollitia eveniet quae suscipit vitae, nobis amet.
          </span>
          <Link to="/dashboard" className="trailer_first_watch">
            <img src="./img/play-button.png" alt="play button" width="26px" />
            <span>Watch Trailer</span>
          </Link>
          <button className="trailer_first_button">Book show</button>
        </div>
      </div>
    </div>
  )
}

export default Trailer
