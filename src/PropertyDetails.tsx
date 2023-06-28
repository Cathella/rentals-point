import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from './components/Footer';
import LocationIcon from './assets/location.svg';
import TopAlert from './components/TopAlert';

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
}

const PropertyDetails = () => {
  const { propertyId } = useParams();
  const [property, setProperty] = useState<Property | null>(null);

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
      <TopAlert />
      <div className='pb-5'>
        <div className="container">
          <div className='border-bottom mb-4 py-3'>
            <Link to='/propertylist' className='custom-button bg-black text-white px-4 py-2'>Back to Listings</Link>
          </div>
          <h3 className='mb-3'>{property.title}</h3>
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
                  {property.kitchen && <span>Kitchen</span>}
                  {property.store && <span>Store Room</span>}
                  {property.water && <span>Water</span>}
                  {property.electricity && <span>Electricity</span>}
                  {property.security && <span>Armed Security</span>}
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
};

export default PropertyDetails;
