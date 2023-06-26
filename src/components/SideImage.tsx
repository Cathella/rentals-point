import { Link } from "react-router-dom";

function SideImage() {
  return (
    <div className='col-lg-6 hero-bg-img'>
      <div className='entry-search'>
        <Link className="shadow" to="/properties">Continue to Search properties</Link>
      </div>
    </div>
  );
}

export default SideImage;
