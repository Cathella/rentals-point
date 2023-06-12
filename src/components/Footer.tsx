function Footer() {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <a className="navbar-brand" href="#">Navbar</a>
          </div>
          <div className="col-lg-5">
            <div className="d-flex mx-auto footer-links">
              <a href="#">For Landlords</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
          <div className="col-lg-5 text-end">
            <div className="rights">&copy; 2023 Rentals Point. A product of <a href="#">AABEL Group</a></div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;