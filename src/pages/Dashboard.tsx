import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../components/store";
import ProfileIcon from '../assets/profile.svg';
import PropertyIcon from '../assets/house.svg';

function Dashboard() {
  const { username, account } = useSelector((state: RootState) => state.auth);

  return (
    <>
      <div className="pt-4 pb-5">
        <div className="container">
          <h5 className="my-5 text-muted">Welcome, {username} ({account})</h5>
          <div className="row">
            <div className="col-lg-4">
              <div className="text-center custom-light-green py-5 rounded-4">
                <Link className="green-txt text-decoration-none" to='/profile/new'>
                  <img className="mb-2" src={ProfileIcon} alt="" />
                  <br />
                  Rentshare Profile
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center custom-light-green py-5 rounded-4">
                <Link className="green-txt text-decoration-none" to='/listingform'>
                  <img className="mb-2" src={PropertyIcon} alt="" />
                  <br />
                  Create a Listing
                </Link>
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
