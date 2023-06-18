import { useParams } from 'react-router-dom';
import addedPropertiesData from './addedProperties.json';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
          <h3 className='text-center'>{property.title}</h3>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Details;

