import { Link, useParams } from 'react-router-dom';
import addedPropertiesData from './addedProperties.json';
import Footer from './components/Footer';
import LocationIcon from '../public/location.svg';
import BedIcon from '../public/bed.svg';
import BathIcon from '../public/bath.svg';
import ParkingIcon from '../public/car.svg';

function Details() {
  const { id } = useParams<{ id?: string }>();

  const property = addedPropertiesData.find(property => property.id === parseInt(id ?? ''));

  if (!property) {
    return <div>Property not found.</div>;
  }

  return (
    <>
      <div className='custom-light-green py-5'>
        <div className="container">
          <div className="row mb-5">
            <div className='col-lg-12'>
              <div className='display-img-container mb-5 position-relative'>
                <img className='img-fluid' src={property.image} alt={property.title} />
                <Link className="d-inline-block text-white more-img-btn" to="/signup">See all 10 Photos</Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <h3 className=''>{property.title}</h3>
              <div className="location mt-3">
                <img src={LocationIcon} alt="Icon" />
                <span>{property.location}</span>
              </div>
              <div className='mt-4'>
                <h4 className='mb-4'>Description</h4>
                <div className='desc-ft-size custom-text-muted'>
                  {property.description}
                </div>
              </div>
            </div>
            <div className="col-lg-4 ms-auto bg-white summary">
              <div className="p-4">
                <h4 className='mb-4'>Brief Summary</h4>
                <div className='mb-4 custom-light-green py-4 px-5 rounded-5 green-txt'>
                  <span className='fw-bold'>Per month</span>
                  <div className="d-flex flex-column">
                    <h3 className='me-2'>UGX. {property.price}</h3>
                  </div>
                </div>
                <div className='mb-4 light-bordered py-2 px-2'>
                  <span className='me-3 icon-container text-center custom-light-green'>
                    <img src={BedIcon} alt="Icon" />
                  </span>
                  <span className='desc-ft-size custom-text-muted'>{property.bedrooms} Bedrooms</span>
                </div>
                <div className='mb-4 light-bordered py-2 px-2'>
                  <span className='me-3 icon-container text-center custom-light-green'>
                    <img src={BathIcon} alt="Icon" />
                  </span>
                  <span className='desc-ft-size custom-text-muted'>{property.baths} Baths</span>
                </div>
                <div className='mb-4 light-bordered py-2 px-2'>
                  <span className='me-3 icon-container text-center custom-light-green'>
                    <img src={ParkingIcon} alt="Icon" />
                  </span>
                  <span className='desc-ft-size custom-text-muted'>Parking {property.parking}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Details;

