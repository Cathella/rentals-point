import { Link, useMatch, useNavigate, useLocation } from 'react-router-dom';
import TopLogo from '../assets/logowhite.svg';

const Nav = () => {
  // const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const propertyType = queryParams.get('propertyType') || '';
  // const isActive = useMatch('/propertylist');

  const handlePropertyTypeClick = (propertyType: string) => {
    let url = '/propertylist';

    if (propertyType !== '') {
      url += `?propertyType=${propertyType}`;
    }

    // setSelectedPropertyType(propertyType);
    // navigate(url);
    window.location.href = url;
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
                  <button className={`nav-link me-4 ${propertyType === '' ? 'active' : ''}`} onClick={() => handlePropertyTypeClick('')}>Listings</button>
                </li>
                <li className="nav-item">
                  <button className={`nav-link me-4 ${propertyType === '' ? 'active' : ''}`} onClick={() => handlePropertyTypeClick('')}>Share a Rental</button>
                </li>
                {/* <li className="nav-item">
                  <button className={`nav-link me-4 ${propertyType === 'House' ? 'active' : ''}`} onClick={() => handlePropertyTypeClick('House')}>Houses</button>
                </li> */}
                {/* <li className="nav-item">
                  <button className={`nav-link me-4 ${propertyType === 'Apartment' ? 'active' : ''}`} onClick={() => handlePropertyTypeClick('Apartment')}>Apartments</button>
                </li> */}
                {/* <li className="nav-item">
                  <button className={`nav-link me-4 ${propertyType === 'Rental' ? 'active' : ''}`} onClick={() => handlePropertyTypeClick('Rental')}>Rentals</button>
                </li> */}
                {/* <li className="nav-item">
                  <button className={`nav-link me-4 ${propertyType === 'Shop' ? 'active' : ''}`} onClick={() => handlePropertyTypeClick('Shop')}>Shops</button>
                </li> */}
                {/* <li className="nav-item">
                  <button className={`nav-link me-4 ${propertyType === 'Office' ? 'active' : ''}`} onClick={() => handlePropertyTypeClick('Office')}>Offices</button>
                </li> */}
              </ul>
              <ul className="navbar-nav mb-lg-0">
                {/* <li className="nav-item">
                  <Link className="nav-link me-3" to="/login">Login</Link>
                </li> */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle green-txt text-decoration-underline" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">My Account</a>
                  <ul className="dropdown-menu">
                    <Link className='dropdown-item' to='/login'>Login</Link>
                    <li><hr className="dropdown-divider" /></li>
                    <Link className='dropdown-item' to='/signup'>Create Account</Link>
                    {/* <li><a className="dropdown-item" href="#">New Account</a></li> */}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
