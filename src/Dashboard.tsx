import Footer from "./components/Footer";
import ArrowIcon from './assets/arrow-left.svg';
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="pt-4 pb-5">
        <div className="container">
          <h3 className="text-center mb-5">Hello, You're Welcome!</h3>
          <div className="row">
            <div className="col-lg-4">
              <div className="text-center custom-light-green py-4 rounded-4">
                <Link to='/listingform'>List your Property</Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center custom-light-green py-4 rounded-4">
                <Link to='/listingform'>My Properties</Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center custom-light-green py-4 rounded-4">
                <Link to='/listingform'>My Tenants</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
