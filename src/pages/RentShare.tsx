import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const RentShare = () => {

  return (
    <>
      <div className="pt-4 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-center mx-auto">
              <div className="my-5">
                <h1>Don't have enough money for Rent?</h1>
                <p className="text-muted desc-ft-size mb-5 mt-4">
                  Share a space or home, rent, bills with other interested people.
                </p>
                <Link to="/propertylist" className="custom-button custom-dark-green text-white px-5 py-3">Find Mates</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default RentShare;
