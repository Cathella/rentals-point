import Property from "./Property";
import addedPropertiesData from '../addedProperties.json';

function Recents() {
  addedPropertiesData.sort((a, b) => b.id - a.id);
  const recentlyAddedProperties =addedPropertiesData.slice(0, 8);

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