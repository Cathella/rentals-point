import Property from "./Property";

interface PropertyData {
  title: string;
  price: number;
  location: string;
  description: string;
  image: string;
  bedrooms: number;
  baths: number;
  parking: string;
}

function Recents() {
  const recentlyAddedProperties: PropertyData[] = [
    {
      title: 'Cozy Apartment',
      price: 2000000,
      location: 'Kampala',
      description: 'A cozy apartment in the heart of the city.',
      image: 'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2531&q=80',
      bedrooms: 2,
      baths: 1,
      parking: 'Available',
    },
    {
      title: 'Luxury Villa',
      price: 5000000,
      location: 'Entebbe',
      description: 'A stunning luxury villa with a beautiful waterfront view.',
      image: 'https://images.unsplash.com/photo-1543071293-d91175a68672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      bedrooms: 4,
      baths: 3,
      parking: 'Available',
    },
    {
      title: 'Cosy Cottage',
      price: 1500000,
      location: 'Jinja',
      description: 'A charming cottage surrounded by nature and scenic views.',
      image: 'https://images.unsplash.com/photo-1600566753104-685f4f24cb4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      bedrooms: 2,
      baths: 1,
      parking: 'Not available',
    },
    {
      title: 'Modern Apartment',
      price: 3000000,
      location: 'Kampala',
      description: 'A stylish and contemporary apartment in a prime location.',
      image: 'https://images.unsplash.com/photo-1598392612881-6bbc5522a54c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      bedrooms: 3,
      baths: 2,
      parking: 'Available',
    },
  ];

  return (
    <div className="custom-light-green py-5">
      <div className="container">
        <h3 className="text-center pb-5">Recently Added Properties</h3>
        <div className="row">
          {recentlyAddedProperties.map((property, index) => (
            <Property key={index} {...property} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Recents;