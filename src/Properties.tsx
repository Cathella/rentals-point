import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Property from "./components/Property";
import addedPropertiesData from './addedProperties.json';
import Nav from "./components/Nav";

function Properties() {   
  return (
    <>
      <Nav />
      <div className="pt-4 pb-5">
        <div className="container">
          <div className="row">
            {addedPropertiesData.map((property) => (
              <Property key={property.id} {...property} />
            ))}
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default Properties;
