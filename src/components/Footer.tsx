import BotLogo from '../assets/logoblack.svg';
import Instagram from '../assets/instagram.svg';
import Youtube from '../assets/youtube.svg';
import Tiktok from '../assets/tiktok.svg';
import Facebook from '../assets/facebook.svg'

function Footer() {
  return (
    <footer className="bg-black text-white py-3">
      <div className="container">
        <div className="footer-content">
          <a id='logo' className="navbar-brand" href="#">
            <img src={BotLogo} alt="RentalsPoint" />
          </a>
          <div className="d-flex footer-links">
            <a href="https://www.instagram.com/nakittodesignshop/"><img src={Instagram} alt="Instagram" /></a>
            <a href="https://www.youtube.com/channel/UC8lTfKYRkob6K9qA6ii0zSw"><img src={Youtube} alt="Youtube" /></a>
            <a href="#"><img src={Tiktok} alt="Tiktok" /></a>
            <a href="https://www.facebook.com/aabelstudio"><img src={Facebook} alt="Facebook" /></a>
          </div>
          <div className="rights">
            &copy; 2023 Rentals Point.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;