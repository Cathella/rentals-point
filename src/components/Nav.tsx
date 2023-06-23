import { Link } from 'react-router-dom';
import TopLogo from '../../public/logowhite.svg';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container">
        <Link id='logo' className="navbar-brand" to="/">
          <img src={TopLogo} alt="RentalsPoint" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">RentalsPoint</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body"> 
            <ul className="navbar-nav mx-auto mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link me-4" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-4" to="/properties">Properties</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/landlords">For Landlords</Link>
              </li>
            </ul>
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link me-3" to="/login" id="">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="px-5 custom-button d-inline-block text-white custom-dark-green" to="/signup">Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
