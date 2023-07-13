import { useEffect, useState } from 'react';
import Property from '../components/Property';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FilterIcon from '../assets/filter.svg';
import { fetchFilteredProperties } from '../components/apiUtils';
import { Link } from 'react-router-dom';

export type Property = {
  id: number;
  title: string;
  description: string;
  img_url1: string;
  price: number;
  bedrooms: number;
  baths: number;
  location: string;
  payment_freq: string;
  property_avail: string;
  property_type: string;
};

const PropertyList = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [locationFilter, setLocationFilter] = useState('');
  const [bedroomsFilter, setBedroomsFilter] = useState('');
  const [availabilityFilter, setAvailabilityFilter] = useState('');
  const [propertyTypeFilter, setPropertyTypeFilter] = useState('');

  const handleFiltersSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const filteredProperties = await fetchFilteredProperties(
      locationFilter,
      parseInt(bedroomsFilter),
      availabilityFilter,
      propertyTypeFilter
    );
  
    setProperties(filteredProperties);
  };
  

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const url = 'http://localhost:3000/api/v1/properties';
        const response = await fetch(url);
        const data = await response.json();
        console.log('Fetched properties:', data);
        setProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

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
                  <form onSubmit={handleFiltersSubmit}>
                    <div className="form-floating mb-4">
                      <select className='form-select' value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)}>
                        <option value="">-- Select location --</option>
                        <option value="kyaliwajjala">Kyaliwajjala</option>
                        <option value="namugongo">Namugongo</option>
                        <option value="kira">Kira</option>
                        <option value="mukono">Mukono</option>
                        <option value="kireka">Kireka</option>
                        <option value="nalya">Nalya</option>
                      </select>
                      <label className='mb-2 fw-bold'>Location</label>
                    </div>
                    <div className="form-floating mb-4">
                      <select className='form-select' value={bedroomsFilter} onChange={(e) => setBedroomsFilter(e.target.value)}>
                        <option value="">-- Select Bedrooms --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6 and more</option>
                      </select>
                      <label className='mb-2 fw-bold'>Bedrooms</label>
                    </div>
                    <div className="form-floating mb-4">
                      <select className='form-select' value={availabilityFilter} onChange={(e) => setAvailabilityFilter(e.target.value)}>
                        <option value="">-- Select Availability --</option>
                        <option value="Available">Available</option>
                        <option value="Not Available">Not Available</option>
                      </select>
                      <label className='mb-2 fw-bold'>Property Availabity</label>
                    </div>
                    <div className="form-floating mb-4">
                      <select className='form-select' value={propertyTypeFilter} onChange={(e) => setPropertyTypeFilter(e.target.value)}>
                        <option value="">-- Select Type of property --</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="rental">Rental</option>
                        <option value="office">Office</option>
                        <option value="shop">Shop</option>
                      </select>
                      <label className='mb-2 fw-bold'>Property Type</label>
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
            {properties.length === 0 ? (
              <div className='text-center pb-5'>
                <p>Sorry! No properties match your search.</p>
                <Link className='green-txt' to='/propertylist'>Reload Listings to search again</Link>
              </div>
            ) : (
              properties.map((property) => (
                <Property key={property.id} {...property} />
              ))
            )}
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default PropertyList;
