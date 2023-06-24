import { useState, FormEvent } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import axios from "axios";

function ForLandlords() {
  const [title, setTitle] = useState('');
  const [img_url1, setImgUrl1] = useState('');
  const [img_url2, setImgUrl2] = useState('');
  const [img_url3, setImgUrl3] = useState('');
  const [img_url4, setImgUrl4] = useState('');
  const [img_url5, setImgUrl5] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [baths, setBaths] = useState('');
  const [kitchen, setKitchen] = useState(false);
  const [store, setStore] = useState(false);
  const [water, setWater] = useState(false);
  const [electricity, setElectricity] = useState(false);
  const [security, setSecurity] = useState(false);
  const [property_type, setPropertyType] = useState('');
  const [parking, SetParking] = useState('');
  const [payment_freq, setPaymentFreq] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const data = {
      property: {
        title,
        property_type,
        price,
        payment_freq,
        location,
        description,
        parking,
        bedrooms,
        baths,
        kitchen,
        store,
        water,
        electricity,
        security,
        img_url1,
        img_url2,
        img_url3,
        img_url4,
        img_url5,
      }
    };

    try {
      // Make a POST request to the Rails API endpoint
      const response = await axios.post("http://localhost:3000/api/v1/properties", data);
      console.log(response.data); // Handle the response as needed

      // Reset the form fields after successful submission
      setTitle('');
      setPropertyType('');
      setPrice('');
      setPaymentFreq('');
      setLocation('');
      setDescription('');
      SetParking('');
      setBedrooms('');
      setBaths('');
      setKitchen(false);
      setStore(false);
      setWater(false);
      setElectricity(false);
      setSecurity(false);
      setImgUrl1('');
      setImgUrl2('');
      setImgUrl3('');
      setImgUrl4('');
      setImgUrl5('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Nav />
      <div className="py-5">
        <div className="container">
          <h3 className="text-center mb-5">List your Property</h3>
          <div className="row">
            <div className="col-lg-7 mx-auto">
              <div className="border p-5 rounded-5 shadow-sm">
                <h5 className="green-txt mb-4">Property Information</h5>
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-4">
                    <input
                      name="title"
                      type="text"
                      id="property_title"
                      placeholder=""
                      className="form-control"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <label htmlFor="property_title">Property Title</label>
                  </div>
                  <div className="form-floating mb-4">
                    <select 
                      name="property_type"
                      className="form-select" 
                      id="property_cat_type" 
                      value={property_type}
                      onChange={(e) => setPropertyType(e.target.value)}
                    >
                      <option value="Rental">Rental</option>
                      <option value="House">House</option>
                      <option value="Office">Office</option>
                      <option value="Shop">Shop</option>
                      <option value="Apartment">Apartment</option>
                    </select>
                    <label htmlFor="property_cat_type">Property Type</label>
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      name="price"
                      type="number"
                      className="form-control"
                      id="property_price"
                      placeholder=""
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                    <label htmlFor="property_price">Property Price</label>
                  </div>
                  <div className="form-floating mb-4">
                    <select 
                      name="payment_freq"
                      className="form-select" 
                      id="property_payment_freq" 
                      value={payment_freq}
                      onChange={(e) => setPaymentFreq(e.target.value)}
                    >
                      <option value="month">Per Month</option>
                      <option value="night">Per Night</option>
                      <option value="week">Per Week</option>
                      <option value="3 months">Per 3 Months</option>
                      <option value="6 months">Per 6 Months</option>
                      <option value="year">Per Year</option>
                    </select>
                    <label htmlFor="property_payment_freq">Payment Frequency</label>
                  </div>
                  <div className="form-floating mb-4">
                    <select 
                      name="location"
                      className="form-select" 
                      id="property_location" 
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    >
                      <option value="Kampala">Kampala</option>
                      <option value="Masaka">Masaka</option>
                      <option value="Namugongo">Namugongo</option>
                      <option value="kira">Kira</option>
                    </select>
                    <label htmlFor="property_location">Location</label>
                  </div>
                  <div className="form-floating mb-5">
                    <textarea 
                      name="description"
                      className="form-control"
                      id="property_description" 
                      placeholder=""
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}>
                    </textarea>
                    <label htmlFor="property_description">About Property</label>
                  </div>
                  
                  <h5 className="border-top pt-5 green-txt mb-4">Amenities</h5>
                  <div className="form-floating mb-4">
                    <select 
                      name="parking"
                      className="form-select" 
                      id="property_parking" 
                      value={parking}
                      onChange={(e) => SetParking(e.target.value)}
                    >
                      <option value="Available">Available</option>
                      <option value="Not Available">Not Available</option>
                    </select>
                    <label htmlFor="property_parking">Parking</label>
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      name="bedrooms"
                      type="number"
                      className="form-control"
                      id="property_bedrooms"
                      placeholder=""
                      value={bedrooms}
                      onChange={(e) => setBedrooms(e.target.value)}
                    />
                    <label htmlFor="property_bedrooms">Bedrooms</label>
                  </div>
                  <div className="form-floating mb-5">
                    <input
                      name="baths"
                      type="number"
                      className="form-control"
                      id="property_baths"
                      placeholder=""
                      value={baths}
                      onChange={(e) => setBaths(e.target.value)}
                    />
                    <label htmlFor="property_baths">Baths</label>
                  </div>

                  <h5 className="border-top pt-5 green-txt mb-4">Other Features</h5>
                  <div className="form-check mb-4">
                    <input
                      name="kitchen"
                      className="form-check-input"
                      type="checkbox"
                      id="property_kitchen"
                      checked={kitchen}
                      onChange={(e) => setKitchen(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="property_kitchen">Kitchen</label>
                  </div>
                  <div className="form-check mb-4">
                    <input
                      name="store"
                      className="form-check-input"
                      type="checkbox"
                      id="property_store"
                      checked={store}
                      onChange={(e) => setStore(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="property_store">Store Room</label>
                  </div>
                  <div className="form-check mb-4">
                    <input
                      name="water"
                      className="form-check-input"
                      type="checkbox"
                      id="property_water"
                      checked={water}
                      onChange={(e) => setWater(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="property_water">Water</label>
                  </div>
                  <div className="form-check mb-4">
                    <input
                      name="electricity"
                      className="form-check-input"
                      type="checkbox"
                      id="property_electricity"
                      checked={electricity}
                      onChange={(e) => setElectricity(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="property_electricity">Electricity</label>
                  </div>
                  <div className="form-check mb-5">
                    <input
                      name="security"
                      className="form-check-input"
                      type="checkbox"
                      id="property_security"
                      checked={security}
                      onChange={(e) => setSecurity(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="property_security">Armed Security</label>
                  </div>

                  <h5 className="border-top pt-5 green-txt mb-4">Property Photos</h5>
                  <div className="form-floating mb-4">
                    <input
                      name="img_url1"
                      type="text"
                      id="imgUrl1"
                      placeholder=""
                      className="form-control"
                      value={img_url1}
                      onChange={(e) => setImgUrl1(e.target.value)}
                    />
                    <label htmlFor="imgUrl1">Featured photo URL</label>
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      name="img_url2"
                      type="text"
                      id="imgUrl2"
                      placeholder=""
                      className="form-control"
                      value={img_url2}
                      onChange={(e) => setImgUrl2(e.target.value)}
                    />
                    <label htmlFor="imgUrl2">Property photo 2 URL</label>
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      name="img_url3"
                      type="text"
                      id="imgUrl3"
                      placeholder=""
                      className="form-control"
                      value={img_url3}
                      onChange={(e) => setImgUrl3(e.target.value)}
                    />
                    <label htmlFor="imgUrl3">Property photo 3 URL</label>
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      name="img_url4"
                      type="text"
                      id="imgUrl4"
                      placeholder=""
                      className="form-control"
                      value={img_url4}
                      onChange={(e) => setImgUrl4(e.target.value)}
                    />
                    <label htmlFor="imgUrl4">Property photo 4 URL</label>
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      name="img_url5"
                      type="text"
                      id="imgUrl5"
                      placeholder=""
                      className="form-control"
                      value={img_url5}
                      onChange={(e) => setImgUrl5(e.target.value)}
                    />
                    <label htmlFor="imgUrl5">Property photo 5 URL</label>
                  </div>

                  <button id="login-submit" className="mb-4 custom-button form-control custom-dark-green text-white" type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ForLandlords;
