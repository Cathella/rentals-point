import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../components/store";

function Dashboard() {
  const { username, accountType } = useSelector((state: RootState) => state.auth);

  return (
    <>
      <div className="pt-4 pb-5">
        <div className="container">
          <h4 className="mb-5">Hello, {username}!</h4>
          <p>Account Type: {accountType}</p>
          <div className="row">
            <div className="col-lg-4">
              <div className="text-center custom-light-green py-4 rounded-4">
                <Link to='/listingform'>List your Property</Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center custom-light-green py-4 rounded-4">
                <a href="#">My Properties</a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center custom-light-green py-4 rounded-4">
                <a href="#">My Tenants</a>
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
