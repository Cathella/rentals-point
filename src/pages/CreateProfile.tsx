import { useState } from 'react';
import axios from 'axios';
import Footer from "../components/Footer";

const CreateProfile = () => {
  const [profile, setProfile] = useState({
    name: '',
    phone: '',
    gender: '',
    age: '',
    bio: '',
    housemate_gender: '',
    housemate_age: '',
    lifestyle: '',
    special_notes: '',
    budget: '',
    facebook: '',
    instagram: '',
    twitter: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // Call the login function to obtain the JWT token
      const response = await axios.post('http://localhost:3000/api/v1/login', {
        email: 'your_email', // Replace with the user's email for login
        password: 'your_password', // Replace with the user's password for login
      });

      // Store the JWT token in the browser's local storage
      localStorage.setItem('jwtToken', response.data.token);

      // Send the profile data to the backend API for creating a new profile
      const userToken = response.data.token;
      await axios.post('http://localhost:3000/api/v1/user_profiles', profile, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      alert('Profile created successfully!');
    } catch (error) {
      console.error('Error creating user profile:', error);
    }
  };
  
  return (
    <>
      <div className='pb-5'>
        <div className="container">
          <h3 className="text-center mb-5 mt-5">Complete your Profile</h3>
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <form onSubmit={handleSubmit}>
                <h5 className="green-txt mb-5 text-center">Personal Information</h5>
                <div className='form-floating mb-4'>
                    <input 
                      type="text"
                      className='form-control' 
                      placeholder=''
                      value={profile.name}
                      name='name'
                      onChange={handleChange} />
                      <label>Full Name</label>
                </div>
                <div className='form-floating mb-4'>
                    <input 
                      type="text"
                      className='form-control' 
                      placeholder=''
                      value={profile.phone}
                      name='phone'
                      onChange={handleChange} />
                      <label>Phone Number</label>
                </div>
                <div className="form-floating mb-4">
                  <select 
                    value={profile.gender} 
                    onChange={handleChange}
                    name='gender'
                    className="form-select">
                    <option value="">-- Select Gender --</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <label>Gender</label>
                </div>
                <div className="form-floating mb-4">
                  <input 
                    type="number" 
                    className="form-control"
                    placeholder=""
                    value={profile.age}
                    name='age'
                    onChange={handleChange} />
                    <label>Age</label>
                </div>
                <div className="form-floating mb-5">
                  <textarea 
                    value={profile.bio}
                    name='bio' 
                    onChange={handleChange}
                    className="form-control"
                    placeholder="" />
                  <label>Bio</label>
                </div>

                <h5 className="border-top pt-5 green-txt text-center mb-5">Housemate Preferences</h5>
                <div className="form-floating mb-4">
                  <select 
                    value={profile.housemate_gender}
                    name='housemate_gender'
                    onChange={handleChange} 
                    className="form-select">
                    <option value="">-- Select Gender --</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <label>Housemate Gender</label>
                </div>
                <div className="form-floating mb-4">
                  <input 
                    type="number" 
                    className="form-control"
                    placeholder=""
                    value={profile.housemate_age}
                    name='housemate_age'
                    onChange={handleChange} />
                    <label>Housemate Age</label>
                </div>
                <div className="form-floating mb-4">
                  <select 
                    value={profile.lifestyle}
                    name='lifestyle'
                    onChange={handleChange} 
                    className="form-select">
                    <option value="">-- Select Lifestyle --</option>
                    <option value="outgoing">Outgoing</option>
                    <option value="introvert">Introvert</option>
                  </select>
                  <label>Lifestyle</label>
                </div>
                <div className="form-floating mb-5">
                  <textarea 
                    value={profile.special_notes} 
                    name='special_notes'
                    onChange={handleChange}
                    className="form-control"
                    placeholder="" />
                  <label>Specific Requirements</label>
                </div>

                <h5 className="border-top pt-5 green-txt text-center mb-5">Rent Budget</h5>
                <div className="form-floating mb-5">
                  <input 
                    type="number" 
                    className="form-control"
                    placeholder=""
                    value={profile.budget}
                    name='budget'
                    onChange={handleChange} />
                    <label>Rent Budget</label>
                </div>

                <h5 className="border-top pt-5 green-txt text-center mb-5">Social Media Links</h5>
                <div className="form-floating mb-4">
                  <input 
                    type="text" 
                    className='form-control' 
                    placeholder=''
                    value={profile.facebook}
                    name='facebook'
                    onChange={handleChange} />
                  <label>Facebook</label>
                </div>
                <div className="form-floating mb-4">
                  <input 
                    type="text" 
                    className='form-control' 
                    placeholder=''
                    value={profile.twitter}
                    name='twitter'
                    onChange={handleChange} />
                    <label>Twitter</label>
                </div>
                <div className="form-floating mb-4">
                  <input 
                    type="text"
                    className='form-control' 
                    placeholder='' 
                    value={profile.instagram}
                    name='instagram'
                    onChange={handleChange} />
                    <label>Instagram</label>
                </div>

                <button id='login-submit' className="my-4 custom-button form-control custom-dark-green text-white" type="submit">Create Profile</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateProfile;
