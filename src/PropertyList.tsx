import { useEffect, useState } from 'react';
import Property from './components/Property';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TopAlert from './components/TopAlert';

type Property = {
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

const PropertyList = () => {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/properties');
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <>
      <TopAlert />
      <Nav />
      <div className='pt-4 pb-5'>
        <div className="container">
          <div className='row'>
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
