import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../components/store";

function Dashboard() {
  const { username, account } = useSelector((state: RootState) => state.auth);

  return (
    <>
      <div className="pt-4 pb-5">
        <div className="container">
          <h4 className="mb-5">Welcome, {username}! ({account})</h4>
          <div className="row">
            <div className="col-lg-4">
              <div className="text-center custom-light-green py-4 rounded-4">
                <Link to='/myprofile'>My Profile</Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center custom-light-green py-4 rounded-4">
                <Link to='/listingform'>Create a Listing</Link>
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
