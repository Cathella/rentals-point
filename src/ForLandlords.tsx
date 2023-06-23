import { useState } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function ForLandlords() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [baths, setBaths] = useState('');
  const [kitchen, setKitchen] = useState(false);
  const [store, setStore] = useState(false);
  const [water, setWater] = useState(false);
  const [electricity, setElectricity] = useState(false);
  const [security, setSecurity] = useState(false);

  const handleSubmit = () => {
    setTitle('');
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
                    <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                      <option selected value="Rental">Rental</option>
                      <option value="House">House</option>
                      <option value="Office">Office</option>
                      <option value="Shop">Shop</option>
                      <option value="Apartment">Apartment</option>
                    </select>
                    <label htmlFor="floatingSelect">Property Type</label>
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
                    <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                      <option value="night">Per Night</option>
                      <option selected value="month">Per Month</option>
                      <option value="week">Per Week</option>
                      <option value="3 months">Per 3 Months</option>
                      <option value="6 months">Per 6 Months</option>
                      <option value="year">Per Year</option>
                    </select>
                    <label htmlFor="floatingSelect">Payment Frequency</label>
                  </div>
                  <div className="form-floating mb-4">
                    <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                      <option selected value="Kampala">Kampala</option>
                      <option value="Masaka">Masaka</option>
                      <option value="Namugongo">Namugongo</option>
                      <option value="kira">Kira</option>
                    </select>
                    <label htmlFor="floatingSelect">Location</label>
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
                    <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                      <option selected value="Available">Available</option>
                      <option value="Not Available">Not Available</option>
                    </select>
                    <label htmlFor="floatingSelect">Parking</label>
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
                      id="title"
                      placeholder=""
                      className="form-control"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <label htmlFor="title">Featured photo URL</label>
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      type="text"
                      id="title"
                      placeholder=""
                      className="form-control"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <label htmlFor="title">Property photo 2 URL</label>
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      type="text"
                      id="title"
                      placeholder=""
                      className="form-control"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <label htmlFor="title">Property photo 3 URL</label>
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      type="text"
                      id="title"
                      placeholder=""
                      className="form-control"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <label htmlFor="title">Property photo 4 URL</label>
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      type="text"
                      id="title"
                      placeholder=""
                      className="form-control"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <label htmlFor="title">Property photo 5 URL</label>
                  </div>

                  <button id="login-submit" className="custom-button form-control custom-dark-green text-white" type="submit">Submit</button>
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
