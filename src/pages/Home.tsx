import { Link } from "react-router-dom";
import Choose from "../components/Choose";
import Categories from "../components/Categories";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <header className="py-5 custom-light-green">
        <div className="container text-center header-bg">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h1>Find the Perfect Place.</h1>
              <p className="mt-4 text-muted desc-ft-size">Post your requirements and get highly relevant matches.</p>
              <div className="mt-4 letsearch">
                <Link to="/propertylist" className="custom-button custom-dark-green text-white px-5">Start Searching</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Choose />
      <Categories />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
