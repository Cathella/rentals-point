import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import LocationIcon from '../assets/location.svg';

interface Property {
  id: number;
  title: string;
  description: string;
  location: string;
  img_url1: string;
  img_url2: string;
  img_url3: string;
  img_url4: string;
  img_url5: string;
  bedrooms: number;
  baths: number;
  parking: string;
  price: number;
  kitchen: boolean;
  store: boolean;
  water: boolean;
  electricity: boolean;
  security: boolean;
  owner_contact: string;
  owner_gender: string;
  lives: string;
  owner_name: string;
  property_avail: string;
  video_url: string;
  property_type: string;
}

const PropertyDetails = () => {
  const { propertyId } = useParams();
  const [property, setProperty] = useState<Property | null>(null);
  const navigate = useNavigate();

  const handleEditListing = (propertyId: string | undefined) => {
    navigate(`/propertylist/update/${propertyId}`);
  }

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/v1/properties/${propertyId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch property details');
        }
        const data = await response.json();
        setProperty(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPropertyDetails();
  }, [propertyId]);

  if (!property) {
    return <div>Loading property details...</div>;
  }

  return (
    <>
      <div className='pb-5'>
        <div className="container">
          <h3 className='mt-5 mb-3'>{property.title}</h3>
          <div className="location mb-4">
            <img src={LocationIcon} alt="Icon" />
            <span>{property.location}</span>
          </div>
          <div className="row mb-5">
            <div className='col-lg-6'>
              <div id='img1' className='display-img-container mb-4 position-relative'>
                <img className='img-fluid' src={property.img_url1} alt={property.title} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className='col-md-6 col-lg-6'>
                  <div id='img2' className='display-img-container-2 mb-4 position-relative'>
                    <img className='img-fluid' src={property.img_url2} alt={property.title} />
                  </div>
                </div>
                <div className='col-md-6 col-lg-6'>
                  <div id='img3' className='display-img-container-2 mb-4 position-relative'>
                    <img className='img-fluid' src={property.img_url3} alt={property.title} />
                  </div>
                </div>
                <div className='col-md-6 col-lg-6'>
                  <div id='img4' className='display-img-container-2 mb-4 position-relative'>
                    <img className='img-fluid' src={property.img_url4} alt={property.title} />
                  </div>
                </div>
                <div className='col-md-6 col-lg-6'>
                  <div id='img5' className='display-img-container-2 mb-4 position-relative'>
                    <img className='img-fluid' src={property.img_url5} alt={property.title} />
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
                  <span>Type: {property.property_type}</span>
                </div>
                <div className='mb-3 green-txt fw-bold text-decoration-underline'>Ugx. {property.price} / month</div>
                <div className='desc-ft-size custom-text-muted mb-5'>
                  {property.description}
                </div>
                <div className='updatelinks mb-4'>
                  <button onClick={() => handleEditListing(propertyId)} className='green-txt border-0 custom-button custom-light-green px-4'>Update Listing</button>
                  <button className='bg-danger border-0 text-white custom-button px-4'>Delete Listing</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ms-auto bg-white summary">
              <div className="border rounded-5 p-4 shadow-sm">
                <h5 className='fw-bold mb-4 mt-3'>What this property Offers</h5>
                <div className='details-amenities'>
                  {property.kitchen && <span>Kitchen</span>}
                  {property.store && <span>Store Room</span>}
                  {property.water && <span>Water</span>}
                  {property.electricity && <span>Electricity</span>}
                  {property.security && <span>Armed Security</span>}
                </div>
                <div className="border-top mt-4 pt-4">
                  <a href="#offcanvasExample" role="button" aria-controls="offcanvasExample" className='custom-button d-block custom-dark-green text-white' data-bs-toggle="offcanvas">Visit Property</a>
                  <div className='mt-3'>
                    <Link to={property.video_url} className='custom-button d-block green-txt custom-light-green'>Request Property Video</Link>
                  </div>
                  <div className="offcanvas offcanvas-start" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                      <h5 className="offcanvas-title text-white" id="offcanvasExampleLabel">Visiting Property</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                      
                    <div className="offcanvas-body">
                      <div className='pb-3'>
                        <h4>Availability</h4>
                        <div className="custom-light-green rounded-3 p-4">
                          {property.property_avail}
                        </div>
                      </div>
                      <div className='py-3'>
                        <h4 className='pb-3'>Owner Details</h4>
                        <div className="custom-light-green rounded-3 p-4">
                          <p>
                            <span className='fw-bold'>Name: </span>
                            <span>{property.owner_name}</span>
                          </p>
                          <p>
                            <span className='fw-bold'>Gender: </span>
                            <span>{property.owner_gender}</span>
                          </p>
                          <p>
                            <span className='fw-bold'>Lives: </span>
                            <span>{property.lives}</span>
                          </p>
                          <p>
                            <span className='fw-bold'>Contact: </span>
                            <span>{property.owner_contact}</span>
                          </p>
                        </div>
                      </div>
                      <div className='py-3'>
                        <h4 className='pb-3'>Broker Fees</h4>
                        <div className="custom-light-green rounded-3 p-4">
                          <span className='fw-bold'>Ugx. 50,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PropertyDetails;
