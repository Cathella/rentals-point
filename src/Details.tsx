import { useParams } from 'react-router-dom';
import addedPropertiesData from './addedProperties.json';
import Footer from './components/Footer';
import LocationIcon from '../public/location.svg';
import Nav from './components/Nav';

function Details() {
  const { id } = useParams<{ id?: string }>();
  const property = addedPropertiesData.find(property => property.id === parseInt(id ?? ''));

  if (!property) {
    return <div>Property not found.</div>;
  }

  return (
    <>
      <Nav />
      <div className='pt-4 pb-5'>
        <div className="container">
          <h3 className='mb-3'>{property.title}</h3>
          <div className="location mb-4">
            <img src={LocationIcon} alt="Icon" />
            <span>{property.location}</span>
          </div>
          <div className="row mb-5">
            <div className='col-lg-6'>
              <div className='display-img-container mb-4 position-relative'>
                <img className='img-fluid' src={property.image} alt={property.title} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className='col-md-6 col-lg-6'>
                  <div className='display-img-container-2 mb-4 position-relative'>
                    <img className='img-fluid' src={property.image} alt={property.title} />
                  </div>
                </div>
                <div className='col-md-6 col-lg-6'>
                  <div className='display-img-container-2 mb-4 position-relative'>
                    <img className='img-fluid' src={property.image} alt={property.title} />
                  </div>
                </div>
                <div className='col-md-6 col-lg-6'>
                  <div className='display-img-container-2 mb-4 position-relative'>
                    <img className='img-fluid' src={property.image} alt={property.title} />
                  </div>
                </div>
                <div className='col-md-6 col-lg-6'>
                  <div className='display-img-container-2 mb-4 position-relative'>
                    <img className='img-fluid' src={property.image} alt={property.title} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <div className='mt-4'>
                <h5 className='fw-bold mb-4'>More About the Property</h5>
                <div className="more mb-4">
                  <span>{property.bedrooms} Bedrooms</span>
                  <span>{property.baths} Baths</span>
                  <span>Parking: {property.parking}</span>
                </div>
                <div className='mb-3 green-txt fw-bold text-decoration-underline'>Ugx. {property.price} / month</div>
                <div className='desc-ft-size custom-text-muted mb-5'>
                  {property.description}
                </div>
              </div>
            </div>
            <div className="col-lg-4 ms-auto bg-white summary">
              <div className="border rounded-5 p-4 shadow-sm">
                <h5 className='fw-bold mb-4 mt-3'>What this property Offers</h5>
                <div className='details-amenities'>
                  <span>Kitchen</span>
                  <span>Store room</span>
                  <span>Water</span>
                  <span>Electricity</span>
                  <span>Security</span>
                </div>
                <div className="border-top mt-4 pt-4">
                  <a href="#" className='custom-button d-block custom-dark-green text-white'>Book to Visit</a>
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

