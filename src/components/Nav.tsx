import { Link, useMatch, useNavigate } from 'react-router-dom';
import TopLogo from '../assets/logowhite.svg';


function Nav() {
  const navigate = useNavigate();
  const isActive = useMatch('/propertylist');

  const handlePropertyTypeClick = (propertyType: string) => {
    navigate(`/propertylist/${propertyType}`);
  };

  return (
    <>
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
                  <Link className={`nav-link me-4 ${isActive ? 'active' : ''}`} to="/propertylist">All</Link>
                </li>
                <li className="nav-item">
                  <button className="nav-link me-4" onClick={() => handlePropertyTypeClick('houses')}>Houses</button>
                </li>
                <li className="nav-item">
                  {/* <Link className="nav-link me-4" to="/">Apartments</Link> */}
                  <button className="nav-link me-4" onClick={() => handlePropertyTypeClick('apartments')}>Apartments</button>
                </li>
                <li className="nav-item">
                  {/* <Link className="nav-link me-4" to="/">Rentals</Link> */}
                  <button className="nav-link me-4" onClick={() => handlePropertyTypeClick('rentals')}>Rentals</button>
                </li>
                <li className="nav-item">
                  {/* <Link className="nav-link me-4" to="/">Shops</Link> */}
                  <button className="nav-link me-4" onClick={() => handlePropertyTypeClick('shops')}>Shops</button>
                </li>
                <li className="nav-item">
                  {/* <Link className="nav-link me-4" to="/">Offices</Link> */}
                  <button className="nav-link me-4" onClick={() => handlePropertyTypeClick('offices')}>Offices</button>
                </li>
              </ul>
              <ul className="navbar-nav mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link me-3" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link green-txt text-decoration-underline" to="/signup">Sign Up</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav;
