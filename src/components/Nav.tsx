import TopLogo from '../../public/logowhite.svg';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={TopLogo} alt="RentalsPoint" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Rent</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sell</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Buy</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">For Landlords</a>
            </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#" id="greened">Login</a>
            </li>
            <li className="nav-item">
              <a className="px-3 py-2 custom-button custom-dark-green" href="#">Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;