import { Link } from 'react-router-dom';
import LocationIcon from '../../public/location.svg';

interface PropertyProps {
  id: number,
  title: string;
  price: number;
  location: string;
  description: string;
  image: string;
  bedrooms: number;
  baths?: number;
  parking?: string;
}

const Property: React.FC<PropertyProps> = ({ id, title, price, location, image, bedrooms, baths }) => {
  return (
    <div className="col-md-6 col-lg-4 col-xl-3">
      <div className="house-entry mb-4 bg-white p-3 border-3 rounded-5">
        <div className="house-image">
          <div className="location">
            <img src={LocationIcon} alt="Icon" />
            <span>{location}</span>
          </div>
          <img src={image} alt={title} className='img-fluid house-one' />
        </div>
        <div className="price">
          <h5 className='fw-bold green-txt'>UGX. {price}</h5>
          <span className="times">| per month</span>    
        </div>
        <div className="more mb-3">
          <span>{bedrooms} Bedrooms</span>
          <span>{baths} Baths</span>
        </div>
        <Link to={`/properties/${id}`} className='mt-4 custom-button d-block' id='seeDetails'>See Details</Link>
      </div>
    </div>
  );
};

export default Property;