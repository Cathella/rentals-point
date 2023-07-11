import { useState } from 'react';
import axios from 'axios';
import Footer from './components/Footer';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createListing } from './components/actions';

const PropertyForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
  const [ownerName, setOwnerName] = useState('');
  const [ownerContact, setOwnerContact] = useState('');
  const [ownerGender, setOwnerGender] = useState('');
  const [propertyAvail, setPropertyAvail] = useState('');
  const [lives, setLives] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

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
      owner_name: ownerName,
      owner_contact: ownerContact,
      owner_gender: ownerGender,
      property_avail: propertyAvail,
      lives,
      video_url: videoUrl,
    };

    try {
      // Dispatch the create listing action.
      dispatch(createListing(propertyData));
      const response = await axios.post('http://localhost:3000/api/v1/properties', propertyData); // Replace with your API endpoint
      navigate('/propertylist');
      console.log(response.data); // Handle the successful submission, e.g., show a success message or redirect  
    } catch (error) {
      console.error('Error creating a listing', error); // Handle the error, e.g., display an error message
    }
  };

  return (
    <>
      <div className='pb-5'>
        <div className="container">
          <h3 className="text-center mb-5 mt-5">List your Property</h3>
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
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="rental">Rental</option>
                    <option value="office">Office</option>
                    <option value="shop">Shop</option>
                  </select>
                  <label>Property Type</label>
                </div>
                <div className="form-floating mb-4">
                  <select 
                    value={location} 
                    className="form-select"
                    onChange={(e) => setLocation(e.target.value)}>
                    <option value="">-- Select Location --</option>
                    <option value="kyaliwajjala">Kyaliwajjala</option>
                    <option value="namugongo">Namugongo</option>
                    <option value="kira">Kira</option>
                    <option value="mukono">Mukono</option>
                    <option value="kireka">Kireka</option>
                    <option value="nalya">Nalya</option>
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
                <div className='other-amenities mb-4'>
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

                <h5 className="border-top pt-5 green-txt text-center mb-5">Owner/Caretaker Details</h5>
                <div className="form-floating mb-4">
                  <input 
                    type="text" 
                    className='form-control' 
                    placeholder=''
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)} />
                    <label>Landlord's Name</label>
                </div>
                <div className="form-floating mb-4">
                  <input 
                    type="phone" 
                    className='form-control' 
                    placeholder=''
                    value={ownerContact}
                    onChange={(e) => setOwnerContact(e.target.value)} />
                    <label>Landlord's Contact</label>
                </div>
                <div className="form-floating mb-4">
                  <select 
                    value={propertyAvail} 
                    onChange={(e) => setPropertyAvail(e.target.value)}
                    className="form-select">
                    <option value="">-- Choose Availability --</option>
                    <option value="Available">Available</option>
                    <option value="Not Available">Not Available</option>
                  </select>
                  <label>Availability</label>
                </div>
                <div className="form-floating mb-4">
                  <select 
                    value={lives}
                    onChange={(e) => setLives(e.target.value)} 
                    className="form-select">
                    <option value="">-- Choose where Landlord stays --</option>
                    <option value="On-premises">On Premises</option>
                    <option value="Off-premises">Off Premises</option>
                  </select>
                  <label>Landlord Stays</label>
                </div>
                <div className="form-floating mb-5">
                  <select 
                    value={ownerGender} 
                    onChange={(e) => setOwnerGender(e.target.value)}
                    className="form-select">
                    <option value="">-- Choose Gender --</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <label>Gender</label>
                </div>

                <h5 className="border-top pt-5 green-txt text-center mb-5">Property Video</h5>
                <div className="form-floating mb-4">
                  <input 
                    type="text"
                    className='form-control' 
                    placeholder='' 
                    value={videoUrl} 
                    onChange={(e) => setVideoUrl(e.target.value)} />
                    <label>Video URL</label>
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
