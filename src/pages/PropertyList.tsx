import { useEffect, useState } from 'react';
import Property from '../components/Property';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FilterIcon from '../assets/filter.svg';
import { fetchFilteredProperties } from '../components/apiUtils';
import SadFace from '../assets/sad.svg';
import Info from '../assets/info.svg';

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
    resetFilters();
  };

  const handleReloadProperties = () => {
    window.location.reload();
  };

  const resetFilters = () => {
    setLocationFilter('');
    setBedroomsFilter('');
    setAvailabilityFilter('');
    setPropertyTypeFilter('');
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
            <h3>Dream Place: <span className='green-txt'>Find Yours.</span></h3>
            <form onSubmit={handleFiltersSubmit}>
              <div className="form-floating mb-4">
                <select className='form-select' value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)}>
                  <option value="">-- Choose location --</option>
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
                  <option value="">-- Choose Bedrooms --</option>
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
                  <option value="">-- Choose Availability --</option>
                  <option value="Available">Available</option>
                  <option value="Not Available">Not Available</option>
                </select>
                <label className='mb-2 fw-bold'>Availabity</label>
              </div>
              <div className="form-floating mb-4">
                <select className='form-select' value={propertyTypeFilter} onChange={(e) => setPropertyTypeFilter(e.target.value)}>
                  <option value="">-- Choose Category --</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="rental">Rental</option>
                  <option value="office">Office</option>
                  <option value="shop">Shop</option>
                </select>
                <label className='mb-2 fw-bold'>Category</label>
              </div>
              <div className="mb-3">
                <button className='filter-btn'>
                  <img src={FilterIcon} alt="Search Property" /> 
                  <span>Search</span>
                </button>
              </div>
            </form>
          </div>
          <div className="row">
            {properties.length === 0 ? (
              <div className='text-center pb-5'>
                <img src={SadFace} alt=":(" />
                <p className='custom-text-muted mt-4 mb-5'>Sorry! No properties match your search.</p>
                <button className='btn green-txt custom-light-green ' onClick={handleReloadProperties}><img src={Info} alt="" /> Reload Properties</button>
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
