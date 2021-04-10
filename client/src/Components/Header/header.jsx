import "./style/headerStyle.css"
import { Link } from 'react-router-dom'

function Header(){
  return (
    <div className="header_container">
      <div className="header_container_cover">
        <div className="header_brand_container flex_center">
          <Link to={"/"} className="header_brand_container_a">
            <img className="header_brand_container_a_img" src="./img/UMovies.svg" alt="Brand of web site" height={"41px"} width={"166px"}/>
          </Link>
        </div>
        <div className="header_navigator_container">
          <Link to={"/recommended"} className="flex_center header_navigator_container_a">MOVIES</Link>
          <Link to={"/dashboard"} className="flex_center header_navigator_container_a">TRAILER</Link>
          <Link to={"/"} className="flex_center header_navigator_container_a">ACTORS</Link>
          <Link to={"/"} className="flex_center header_navigator_container_a">NEWS</Link>
          <Link to={"/"} className="flex_center header_navigator_container_a">COMMUNITY</Link>
        </div>
        <div className="header_form_container flex_center">
          <button className="header_form_container_login header_form_container_button">LOG IN</button>
          <button className="header_form_container_signup header_form_container_button">SIGN UP</button>
        </div>
      </div>
    </div>
  );
}

export default Header;