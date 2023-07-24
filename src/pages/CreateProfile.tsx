import { useState } from 'react';
import axios from 'axios';
import Footer from "../components/Footer";

const CreateProfile = () => {
  const [profile, setProfile] = useState({
    name: '',
    bio: '',
    preferences: '',
    budget: '',
    // Add additional profile fields here
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the profile data to the backend API for creating a new profile
    axios.post('/api/v1/user_profiles', profile)
      .then(() => {
        alert('Profile created successfully!');
      })
      .catch((error) => {
        console.error('Error creating user profile:', error);
      });
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
                      value='' />
                      <label>Full Name</label>
                </div>
                <div className='form-floating mb-4'>
                    <input 
                      type="text"
                      className='form-control' 
                      placeholder=''
                      value='' />
                      <label>Phone Number</label>
                </div>
                <div className="form-floating mb-4">
                  <select 
                    value='' 
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
                    value='' />
                    <label>Age</label>
                </div>
                <div className="form-floating mb-5">
                  <textarea 
                    value='' 
                    className="form-control"
                    placeholder="" />
                  <label>Bio</label>
                </div>

                <h5 className="border-top pt-5 green-txt text-center mb-5">Housemate Preferences</h5>
                <div className="form-floating mb-4">
                  <select 
                    value='' 
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
                    value='' />
                    <label>Housemate Age</label>
                </div>
                <div className="form-floating mb-5">
                  <select 
                    value='' 
                    className="form-select">
                    <option value="">-- Select Lifestyle --</option>
                    <option value="outgoing">Outgoing</option>
                    <option value="introvert">Introvert</option>
                  </select>
                  <label>Lifestyle</label>
                </div>

                <h5 className="border-top pt-5 green-txt text-center mb-5">Rent Budget</h5>
                <div className="form-floating mb-5">
                  <input 
                    type="number" 
                    className="form-control"
                    placeholder=""
                    value='' />
                    <label>Rent Budget</label>
                </div>

                <h5 className="border-top pt-5 green-txt text-center mb-5">Social Media Links</h5>
                <div className="form-floating mb-4">
                  <input 
                    type="text" 
                    className='form-control' 
                    placeholder=''
                    value='' />
                  <label>Facebook</label>
                </div>
                <div className="form-floating mb-4">
                  <input 
                    type="text" 
                    className='form-control' 
                    placeholder=''
                    value='' />
                    <label>Twitter</label>
                </div>
                <div className="form-floating mb-4">
                  <input 
                    type="text"
                    className='form-control' 
                    placeholder='' 
                    value='' />
                    <label>Instagram</label>
                </div>

                <button id='login-submit' className="my-4 custom-button form-control custom-dark-green text-white" type="submit">Update Profile</button>
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
