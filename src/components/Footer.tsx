import BotLogo from '../../public/logoblack.svg';

function Footer() {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container">
        <div className="footer-content">
          <a className="navbar-brand" href="#">
            <img src={BotLogo} alt="RentalsPoint" />
          </a>
          <div className="d-flex footer-links">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div className="rights">
            &copy; 2023 Rentals Point. A product of <a href="#">AABEL group</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;