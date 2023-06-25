import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';

type RouteParams = {
  propertyId: string;
};

interface Property {
  id: number;
  title: string;
  description: string;
}

type PropertyDetailsProps = RouteComponentProps<RouteParams>;

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ match }) => {
  const {propertyId} = match.params;
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
    <div>
      <h2>Property Details</h2>
      <h3>{property.title}</h3>
      <p>{property.description}</p>
    </div>
  );
};

export default PropertyDetails;
