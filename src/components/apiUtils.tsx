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
    let queryParams = '';

    if (location) {
      queryParams = `?location=${encodeURIComponent(location)}`;
    }

    if (bedrooms) {
      queryParams += `&bedrooms=${encodeURIComponent(String(bedrooms))}`;
    }

    if (availability) {
      queryParams += `&property_avail=${encodeURIComponent(availability)}`;
    }

    if (propertyType) {
      queryParams += `&property_type=${encodeURIComponent(propertyType)}`;
    }

    const url = `http://localhost:3000/api/v1/properties${queryParams}`;
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



