import { useEffect, useState } from 'react';
import Property from './components/Property';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useLocation } from 'react-router-dom';

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

  console.log('Properties:', properties); // Add this logging statement

  return (
    <>
      <div className="pt-4 pb-5">
        <div className="container">
          <h3 className='mb-5'>I want to find a nice <span className='green-txt h3-select'>Rental</span> in <span className='green-txt h3-select'>Namugongo</span></h3>
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
