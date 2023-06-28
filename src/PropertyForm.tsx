import { useState } from 'react';
import axios from 'axios';
import Footer from './components/Footer';
import TopAlert from './components/TopAlert';

const PropertyForm = () => {
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
  const [parking, setParking] = useState('');
  const [location, setLocation] = useState('');
  const [paymentFreq, setPaymentFreq] = useState('');
  const [propertyType, setPropertyType] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const propertyData = {
      title,
      img_url1: imgUrl1,
      img_url2: imgUrl2,
      img_url3: imgUrl3,
      img_url4: imgUrl4,
      img_url5: imgUrl5,
      description,
      price,
      bedrooms,
      baths,
      kitchen,
      store,
      water,
      electricity,
      security,
      parking,
      location,
      payment_freq: paymentFreq,
      property_type: propertyType,
    };

    try {
      const response = await axios.post('http://localhost:3000/api/v1/properties', propertyData); // Replace with your API endpoint
      console.log(response.data); // Handle the successful submission, e.g., show a success message or redirect

      // Reset the form fields after successful submission
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
      setParking('');
      setLocation('');
      setPaymentFreq('');
      setPropertyType('');
    } catch (error) {
      console.error(error); // Handle the error, e.g., display an error message
    }
  };

  return (
    <>
      <TopAlert />
      {/* <Nav /> */}
      <div className='py-5'>
        <div className="container">
          <h3 className="text-center mb-5">List your Property</h3>
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <form onSubmit={handleSubmit}>
                <h5 className="green-txt mb-5 text-center">Property Information</h5>
                <div className='form-floating mb-4'>
                    <input 
                      type="text"
                      className='form-control' 
                      placeholder=''
                      value={title} 
                      onChange={(e) => setTitle(e.target.value)} />
                      <label>Property Title</label>
                </div>
                <div className="form-floating mb-4">
                  <select 
                    value={propertyType} 
                    className="form-select"
                    onChange={(e) => setPropertyType(e.target.value)}>
                    <option value="">-- Select Property Type --</option>
                    <option value="Apartment">Apartment</option>
                    <option value="House">House</option>
                    <option value="Rental">Rental</option>
                    <option value="Office">Office</option>
                    <option value="Shop">Shop</option>
                  </select>
                  <label>Property Type</label>
                </div>
                <div className="form-floating mb-4">
                  <select 
                    value={location} 
                    className="form-select"
                    onChange={(e) => setLocation(e.target.value)}>
                    <option value="">-- Select Location --</option>
                    <option value="kampala">Kampala</option>
                    <option value="namugongo">Namugongo</option>
                    <option value="kira">Kira</option>
                    <option value="masaka">Masaka</option>
                  </select>
                  <label>Location</label>
                </div>
                <div className="form-floating mb-4">
                  <input 
                    type="number" 
                    className="form-control"
                    placeholder=""
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)} />
                    <label>Property Price</label>
                </div>
                <div className="form-floating mb-4">
                  <select 
                    value={paymentFreq} 
                    className="form-select"
                    onChange={(e) => setPaymentFreq(e.target.value)}>
                    <option value="">-- Select Payment Frequency --</option>
                    <option value="night">Daily</option>
                    <option value="week">Weekly</option>
                    <option value="month">Monthly</option>
                    <option value="year">Yearly</option>
                  </select>
                  <label>Payment Frequency</label>
                </div>
                <div className="form-floating mb-5">
                  <textarea 
                    value={description} 
                    className="form-control"
                    placeholder=""
                    onChange={(e) => setDescription(e.target.value)} />
                  <label>About Property</label>
                </div>

                <h5 className="border-top pt-5 green-txt text-center mb-5">Property Photos</h5>
                <div className="form-floating mb-4">
                  <input 
                    type="text" 
                    className='form-control' 
                    placeholder=''
                    value={imgUrl1} 
                    onChange={(e) => setImgUrl1(e.target.value)} />
                  <label>Image URL 1:</label>
                </div>
                <div className="form-floating mb-4">
                  <input 
                    type="text" 
                    className='form-control' 
                    placeholder=''
                    value={imgUrl2} 
                    onChange={(e) => setImgUrl2(e.target.value)} />
                    <label>Image URL 2</label>
                </div>
                <div className="form-floating mb-4">
                  <input 
                    type="text"
                    className='form-control' 
                    placeholder='' 
                    value={imgUrl3} 
                    onChange={(e) => setImgUrl3(e.target.value)} />
                    <label>Image URL 3</label>
                </div>
                <div className="form-floating mb-4">
                  <input 
                    type="text"
                    className='form-control' 
                    placeholder='' 
                    value={imgUrl4} 
                    onChange={(e) => setImgUrl4(e.target.value)} />
                    <label>Image URL 4</label>
                </div>
                <div className="form-floating mb-5">
                  <input 
                    type="text" 
                    className='form-control' 
                    placeholder=''
                    value={imgUrl5} 
                    onChange={(e) => setImgUrl5(e.target.value)} />
                    <label>Image URL 5</label>
                </div>

                <h5 className="border-top pt-5 green-txt text-center mb-5">Amenities</h5>
                <div className="form-floating mb-4">
                  <input 
                    type="number" 
                    className="form-control"
                    placeholder=""
                    value={bedrooms} 
                    onChange={(e) => setBedrooms(e.target.value)} />
                    <label>Bedrooms</label>
                </div>
                <div className="form-floating mb-4">
                  <input 
                    type="number" 
                    className="form-control"
                    placeholder=""
                    value={baths} 
                    onChange={(e) => setBaths(e.target.value)} />
                    <label>Baths</label>
                </div>
                <div className="form-floating mb-5">
                  <select 
                    value={parking} 
                    className="form-select" 
                    onChange={(e) => setParking(e.target.value)}>
                    <option value="">-- Select Parking --</option>
                    <option value="Available">Available</option>
                    <option value="Not Available">Not Available</option>
                  </select>
                  <label>Parking</label>
                </div>

                <h5 className="border-top pt-5 green-txt text-center mb-5">Other Features</h5>
                <div className='other-amenities'>
                  <div className="form-check mb-3">
                    <input 
                      type="checkbox" 
                      className="form-check-input"
                      checked={kitchen} 
                      onChange={(e) => setKitchen(e.target.checked)} />
                      <label>Kitchen</label>
                  </div>
                  <div className="form-check mb-3">
                    <input 
                      type="checkbox"
                      className="form-check-input" 
                      checked={store} 
                      onChange={(e) => setStore(e.target.checked)} />
                      <label>Store Room</label>
                  </div>
                  <div className="form-check mb-3">
                    <input 
                      type="checkbox" 
                      className="form-check-input" 
                      checked={water} 
                      onChange={(e) => setWater(e.target.checked)} />
                    <label>Water</label>
                  </div>
                  <div className="form-check mb-3">
                    <input
                      type="checkbox"
                      checked={electricity}
                      className="form-check-input" 
                      onChange={(e) => setElectricity(e.target.checked)}
                    />
                    <label>Electricity</label>
                  </div>
                  <div className="form-check mb-3">
                    <input 
                      type="checkbox"
                      className="form-check-input" 
                      checked={security} 
                      onChange={(e) => setSecurity(e.target.checked)} />
                      <label>Security</label>
                  </div>
                </div>

                <button id='login-submit' className="my-4 custom-button form-control custom-dark-green text-white" type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PropertyForm;
