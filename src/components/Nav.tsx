import { Link } from 'react-router-dom';
import TopLogo from '../assets/logowhite.svg';
import { connect } from 'react-redux';
import { logoutSuccess } from './authReducer';
import { Dispatch } from 'redux';
import { RootState } from '../components/store';


interface NavProps {
  isAuthenticated: boolean;
  logout: () => void;
}

const Nav = ({ isAuthenticated, logout }: NavProps) => {

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
                  <Link className='nav-link me-4' to='/propertylist'>Browse Listings</Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link me-4' to='/rentshare'>Rent Share</Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link me-4' to='/propertylist'>Hire Movers</Link>
                </li>
                {isAuthenticated && (
                  <li className="nav-item">
                    <Link className='nav-link' to='/dashboard'>Dashboard</Link>
                  </li>
                )}
              </ul>
              <ul className="navbar-nav mb-lg-0">
                {!isAuthenticated ? (
                  <>
                    <li className="nav-item">
                      <Link className='nav-link me-4 green-txt' to='/login'>Login</Link>
                    </li>
                    <li>
                      <Link className='nav-link rounded-5 custom-light-green green-txt py-2 px-4' to='/signup'>Sign up</Link>
                    </li>
                  </>
                ) : (
                  <li className="nav-item">
                    <button className='nav-link green-txt' onClick={logout}>Logout</button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* <div id='list-alert' className="alert custom-dark-green alert-dismissible fade show rounded-0 text-center text-white" role="alert">
        Do you own property? <Link className="text-white rounded px-3 py-2 text-decoration-none border ms-2" id='' to="/listingform">Create a Listing</Link>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
      </div> */}
      <div id='list-alert' className="alert custom-dark-green alert-dismissible fade show rounded-0 text-center text-white" role="alert">
        Do you own property? 
        {/* <Link className="text-white rounded px-3 py-2 text-decoration-none border ms-2" id='' to="/listingform">Create a Listing</Link> */}
        <a className="text-white rounded px-3 py-2 text-decoration-none border ms-2" href="https://api.whatsapp.com/send?phone=256782016535">Contact us</a>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </>
  );
}

const mapStateToProps = (state: RootState) => {
  console.log('loggedIn:', state.auth.loggedIn); // Add a console log statement // Access isAuthenticated from the auth slice of the state

  return {
    isAuthenticated: state.auth.loggedIn,
  };
};



const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    logout: () => dispatch(logoutSuccess()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);