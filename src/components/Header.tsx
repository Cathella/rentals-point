import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="py-5 custom-light-green">
      <div className="container text-center header-bg">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1>Let us find a Home that’s perfect for you.</h1>
            <div className="mt-5 letsearch">
              <Link to="/propertylist" className="custom-button custom-dark-green text-white px-5">Start Searching</Link>
              <a href="#" className="custom-button custom-light-green green-txt px-4">Get Recommendations</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;