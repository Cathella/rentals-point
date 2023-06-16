import LocationIcon from '../../public/location.svg';

interface PropertyProps {
  title: string;
  price: number;
  location: string;
  description: string;
  image: string;
  bedrooms: number;
  baths?: number;
  parking?: string;
}

const Property: React.FC<PropertyProps> = ({ title, price, location, image }) => {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="house-entry bg-white p-3 border-3 rounded-5">
        <div className="">
          <img src={image} alt={title} className='img-fluid house-one' />
        </div>
        <div className="price">
          <h4>UGX. {price}</h4>
          <span className="times">(per month)</span>    
        </div>
        <div className="location">
          <img src={LocationIcon} alt="Icon" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
};

export default Property;