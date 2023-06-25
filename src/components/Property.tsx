import { Link } from 'react-router-dom';
import LocationIcon from '../assets/location.svg';

interface PropertyProps {
  id: number;
  title: string;
  description: string;
  img_url1: string;
  price: number;
  bedrooms: number;
  baths: number;
  location: string;
  payment_freq: string
}

const Property: React.FC<PropertyProps> = ({ id, title, price, location, img_url1, bedrooms, baths, payment_freq }) => {
  return (
    <div className="col-md-6 col-lg-4 col-xl-3">
      <div className="house-entry mb-4 bg-white p-3 rounded-5">
        <Link to={`/propertylist/${id}`}>
          <div className="house-image">
            <div className="location">
              <img src={LocationIcon} alt="Icon" />
              <span>{location}</span>
            </div>
            <img src={img_url1} alt={title} className='img-fluid house-one' />
          </div>
        </Link>
        <div className="price">
          <h5 className='fw-bold'>Ugx. {price}</h5>
          <span className="times">/{payment_freq}</span>    
        </div>
        <div className="more mb-2">
          <span>{bedrooms} Bedrooms</span>
          <span>{baths} Baths</span>
        </div>
      </div>
    </div>
  );
};

export default Property;