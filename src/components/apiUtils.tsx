import { Property } from '../pages/PropertyList';

export const fetchProperties = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/v1/properties');
    if (!response.ok) {
      throw new Error('Failed to fetch properties');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchFilteredProperties = async (
  location: string,
  bedrooms: number,
  availability: string,
  propertyType: string
): Promise<Property[]> => {
  try {
    const queryParams = new URLSearchParams({
      location: location,
      bedrooms: String(bedrooms),
      property_avail: availability,
      property_type: propertyType
    });
    const url = `http://localhost:3000/api/v1/properties?${queryParams}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch filtered properties');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching filtered properties:', error);
    return []; // Return an empty array in case of an error
  }
};



