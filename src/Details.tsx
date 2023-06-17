import { useParams } from 'react-router-dom';

function Details() {
  const { propertyIndex } = useParams();

  // Fetch the property details using the propertyIndex from an API or data source
  // You can use the propertyIndex to retrieve the specific property's information

  return (
    <div>
      <h2>Property Details</h2>
      <p>Property Index: {propertyIndex}</p>
      {/* Display the rest of the property details */}
    </div>
  );
}

export default Details;

