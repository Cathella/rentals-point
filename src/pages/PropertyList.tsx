import { useEffect, useState } from 'react';
import Property from '../components/Property';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
import FilterIcon from '../assets/filter.svg';

type Property = {
  id: number;
  title: string;
  description: string;
  img_url1: string;
  price: number;
  bedrooms: number;
  baths: number;
  location: string;
  payment_freq: string;
};

const PropertyList = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const propertyType = queryParams.get('propertyType') || 'all';

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        let url = 'http://localhost:3000/api/v1/properties';

        if (propertyType !== 'all') {
          url += `/${propertyType}`;
        }

        const response = await fetch(url);
        const data = await response.json();
        console.log('Fetched properties:', data);
        setProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, [propertyType]);

  return (
    <>
      <div className="pt-4 pb-5">
        <div className="container">
          <div className='mb-4 search-section'>
            <div>
              <a className="filter-btn" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                <img src={FilterIcon} alt="Filter Property" />
                <span>Filter Property</span>
              </a>
            </div>

            <div className="offcanvas offcanvas-start" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title text-white" id="offcanvasExampleLabel">Filters</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <div>
                  <h4 className='mb-4'>Filters</h4>
                  <form>
                    <div className="mb-4">
                      <label className='mb-2 fw-bold'>Location</label>
                      <select className='form-select bg-light py-2'>
                        <option value="">Select</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className='mb-2 fw-bold'>Bedrooms</label>
                      <select className='form-select bg-light py-2'>
                        <option value="">Select</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className='mb-2 fw-bold'>Property Availabity</label>
                      <select className='form-select bg-light py-2'>
                        <option value="">Select</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className='mb-2 fw-bold'>Property Type</label>
                      <select className='form-select bg-light py-2'>
                        <option value="">Select</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <button className='w-100 border-0 custom-button custom-dark-green text-white'>Apply Filters</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {properties.map((property) => (
              <Property key={property.id} {...property} />
            ))}
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default PropertyList;
