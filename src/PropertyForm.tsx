import { useState } from 'react';
import axios from 'axios';

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
    } catch (error) {
      console.error(error); // Handle the error, e.g., display an error message
    }
  };

  return (
    <div>
      <h2>Add Property</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Title:
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Image URL 1:
            <input type="text" value={imgUrl1} onChange={(e) => setImgUrl1(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Image URL 2:
            <input type="text" value={imgUrl2} onChange={(e) => setImgUrl2(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Image URL 3:
            <input type="text" value={imgUrl3} onChange={(e) => setImgUrl3(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Image URL 4:
            <input type="text" value={imgUrl4} onChange={(e) => setImgUrl4(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Image URL 5:
            <input type="text" value={imgUrl5} onChange={(e) => setImgUrl5(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Description:
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Price:
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Bedrooms:
            <input type="text" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Baths:
            <input type="text" value={baths} onChange={(e) => setBaths(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Kitchen:
            <input type="checkbox" checked={kitchen} onChange={(e) => setKitchen(e.target.checked)} />
          </label>
          <label>
            Store:
            <input type="checkbox" checked={store} onChange={(e) => setStore(e.target.checked)} />
          </label>
          <label>
            Water:
            <input type="checkbox" checked={water} onChange={(e) => setWater(e.target.checked)} />
          </label>
          <label>
            Electricity:
            <input
              type="checkbox"
              checked={electricity}
              onChange={(e) => setElectricity(e.target.checked)}
            />
          </label>
          <label>
            Security:
            <input type="checkbox" checked={security} onChange={(e) => setSecurity(e.target.checked)} />
          </label>
        </div>

        <div>
          <label>
            Parking:
            <select value={parking} onChange={(e) => setParking(e.target.value)}>
              <option value="">-- Select Parking --</option>
              <option value="Available">Available</option>
              <option value="Not Available">Not Available</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Location:
            <select value={location} onChange={(e) => setLocation(e.target.value)}>
              <option value="">-- Select Location --</option>
              <option value="kampala">Kampala</option>
              <option value="namugongo">Namugongo</option>
              <option value="kira">Kira</option>
              <option value="masaka">Masaka</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Payment Frequency:
            <select value={paymentFreq} onChange={(e) => setPaymentFreq(e.target.value)}>
              <option value="">-- Select Payment Frequency --</option>
              <option value="night">Daily</option>
              <option value="week">Weekly</option>
              <option value="month">Monthly</option>
              <option value="year">Yearly</option>
              {/* Add more options as needed */}
            </select>
          </label>
        </div>
        <div>
          <label>
            Property Type:
            <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
              <option value="">-- Select Property Type --</option>
              <option value="Apartment">Apartment</option>
              <option value="House">House</option>
              <option value="Rental">Rental</option>
              <option value="Office">Office</option>
              <option value="Shop">Shop</option>
            </select>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PropertyForm;
