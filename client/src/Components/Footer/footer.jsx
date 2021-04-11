import "./style/footerStyle.css"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_container_brand">
        <img src="./img/UMovies.svg" alt="UMovies Brand" width="166px" height="41px" />
        <p>Designed and Copyrights By <span>Jayprakash Kachare</span></p>
        <div className="footer_container_brand_social">
          <Link to={ "#" } className="fa fa-facebook"></Link>
          <Link to={ "#" } className="fa fa-twitter"></Link>
          <Link to={ "#" } className="fa fa-instagram"></Link>
          <Link to={ "#" } className="fa fa-linkedin"></Link>
        </div>
      </div>
      <div className="footer_container_quick">
        <span>QUICK LINKS</span>
        <Link className="footer_container_quick_link" to={ "#" }>Movies</Link>
        <Link className="footer_container_quick_link" to={ "#" }>Actors</Link>
        <Link className="footer_container_quick_link" to={ "#" }>Trailers</Link>
        <Link className="footer_container_quick_link" to={ "#" }>About</Link>
        <Link className="footer_container_quick_link" to={ "#" }>Privacy and Policy</Link>
      </div>
      <div className="footer_container_newsletter">
        <span className="footer_container_newsletter_title">NEWSLETTER</span>
        <div className="footer_container_newsletter_div">
          <input className="footer_container_newsletter_div_input" placeholder="Newsletter signup" type="text"/>
          <button className="footer_container_newsletter_div_button">SIGN UP</button>
        </div>
      </div>
    </div>
  )
}

export default Footer
