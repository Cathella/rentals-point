import { Link } from "react-router-dom";

function TopAlert() {
  return(
    <div id='list-alert' className="alert custom-dark-green alert-dismissible fade show rounded-0 text-center text-white" role="alert">
      Do you own property? <Link className="alert-link" id='top-link' to="/listingform">List it here</Link>
      <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
}

export default TopAlert;
