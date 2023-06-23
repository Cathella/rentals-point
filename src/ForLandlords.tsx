import { useState, ChangeEvent, FormEvent } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function ForLandlords() {
  const [selectedOption, setSelectedOption] = useState('');
  const [title, setTitle] = useState('');
  const [imgUrl1, setImgUrl1] = useState('');
  const [imgUrl2, setImgUrl2] = useState('');
  const [imgUrl3, setImgUrl3] = useState('');
  const [imgUrl4, setImgUrl4] = useState('');
  const [imgUrl5, setImgUrl5] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [baths, setBaths] = useState('');
  const [kitchen, setKitchen] = useState(false);
  const [store, setStore] = useState(false);
  const [water, setWater] = useState(false);
  const [electricity, setElectricity] = useState(false);
  const [security, setSecurity] = useState(false);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    setTitle('');
    setImgUrl1('');
    setImgUrl2('');
    setImgUrl3('');
    setImgUrl4('');
    setImgUrl5('');
    setDescription('');
    setPrice('');
    setBedrooms('');
    setBaths('');
    setKitchen(false);
    setStore(false);
    setWater(false);
    setElectricity(false);
    setSecurity(false);
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
                      type="text"
                      id="title"
                      placeholder=""
                      className="form-control"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <label htmlFor="title">Property Title</label>
                  </div>
                  <div className="form-floating mb-4">
                    <select 
                      className="form-select" 
                      id="propertyType" 
                      value={selectedOption}
                      onChange={handleSelectChange}
                    >
                      <option selected value="Rental">Rental</option>
                      <option value="House">House</option>
                      <option value="Office">Office</option>
                      <option value="Shop">Shop</option>
                      <option value="Apartment">Apartment</option>
                    </select>
                    <label htmlFor="propertyType">Property Type</label>
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      type="number"
                      className="form-control"
                      id="price"
                      placeholder=""
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                    <label htmlFor="price">Property Price</label>
                  </div>
                  <div className="form-floating mb-4">
                    <select 
                      className="form-select" 
                      id="paymentFreq" 
                      value={selectedOption}
                      onChange={handleSelectChange}
                    >
                      <option value="night">Per Night</option>
                      <option selected value="month">Per Month</option>
                      <option value="week">Per Week</option>
                      <option value="3 months">Per 3 Months</option>
                      <option value="6 months">Per 6 Months</option>
                      <option value="year">Per Year</option>
                    </select>
                    <label htmlFor="paymentFreq">Payment Frequency</label>
                  </div>
                  <div className="form-floating mb-4">
                    <select 
                      className="form-select" 
                      id="location" 
                      value={selectedOption}
                      onChange={handleSelectChange}
                    >
                      <option selected value="Kampala">Kampala</option>
                      <option value="Masaka">Masaka</option>
                      <option value="Namugongo">Namugongo</option>
                      <option value="kira">Kira</option>
                    </select>
                    <label htmlFor="location">Location</label>
                  </div>
                  <div className="form-floating mb-5">
                    <textarea 
                      className="form-control" 
                      name="description" 
                      id="description" 
                      placeholder=""
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}>
                    </textarea>
                    <label htmlFor="description">About Property</label>
                  </div>
                  
                  <h5 className="border-top pt-5 green-txt mb-4">Amenities</h5>
                  <div className="form-floating mb-4">
                    <select 
                      className="form-select" 
                      id="parking" 
                      value={selectedOption}
                      onChange={handleSelectChange}
                    >
                      <option selected value="Available">Available</option>
                      <option value="Not Available">Not Available</option>
                    </select>
                    <label htmlFor="parking">Parking</label>
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      type="number"
                      className="form-control"
                      id="bedrooms"
                      placeholder=""
                      value={bedrooms}
                      onChange={(e) => setBedrooms(e.target.value)}
                    />
                    <label htmlFor="bedrooms">Bedrooms</label>
                  </div>
                  <div className="form-floating mb-5">
                    <input
                      type="number"
                      className="form-control"
                      id="baths"
                      placeholder=""
                      value={baths}
                      onChange={(e) => setBaths(e.target.value)}
                    />
                    <label htmlFor="baths">Baths</label>
                  </div>

                  <h5 className="border-top pt-5 green-txt mb-4">Other Features</h5>
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="kitchen"
                      checked={kitchen}
                      onChange={(e) => setKitchen(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="kitchen">Kitchen</label>
                  </div>
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="store"
                      checked={store}
                      onChange={(e) => setStore(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="store">Store Room</label>
                  </div>
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="water"
                      checked={water}
                      onChange={(e) => setStore(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="water">Water</label>
                  </div>
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="electricity"
                      checked={electricity}
                      onChange={(e) => setElectricity(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="electricity">Electricity</label>
                  </div>
                  <div className="form-check mb-5">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="security"
                      checked={security}
                      onChange={(e) => setSecurity(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="security">Armed Security</label>
                  </div>

                  <h5 className="border-top pt-5 green-txt mb-4">Property Photos</h5>
                  <div className="form-floating mb-4">
                    <input
                      type="text"
                      id="imgUrl1"
                      placeholder=""
                      className="form-control"
                      value={imgUrl1}
                      onChange={(e) => setImgUrl1(e.target.value)}
                    />
                    <label htmlFor="title">Featured photo URL</label>
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      type="text"
                      id="imgUrl2"
                      placeholder=""
                      className="form-control"
                      value={imgUrl2}
                      onChange={(e) => setImgUrl2(e.target.value)}
                    />
                    <label htmlFor="title">Property photo 2 URL</label>
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      type="text"
                      id="imgUrl3"
                      placeholder=""
                      className="form-control"
                      value={imgUrl3}
                      onChange={(e) => setImgUrl3(e.target.value)}
                    />
                    <label htmlFor="title">Property photo 3 URL</label>
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      type="text"
                      id="imgUrl4"
                      placeholder=""
                      className="form-control"
                      value={imgUrl4}
                      onChange={(e) => setImgUrl4(e.target.value)}
                    />
                    <label htmlFor="title">Property photo 4 URL</label>
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      type="text"
                      id="imgUrl5"
                      placeholder=""
                      className="form-control"
                      value={imgUrl5}
                      onChange={(e) => setImgUrl5(e.target.value)}
                    />
                    <label htmlFor="title">Property photo 5 URL</label>
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
