import { useEffect, useState } from 'react';
import axios from 'axios';

interface UserProfile {
  name: string;
  phone: string;
  gender: string;
  age: number;
  bio: string;
  housemate_gender: string;
  housemate_age: number;
  lifestyle: string;
  special_notes: string;
  budget: number;
  facebook: string;
  instagram: string;
  twitter: string;
}

const EditProfile = () => {
  const [profile, setProfile] = useState<UserProfile>({
    name: '',
    phone: '',
    gender: '',
    age: 0,
    bio: '',
    housemate_gender: '',
    housemate_age: 0,
    lifestyle: '',
    special_notes: '',
    budget: 0,
    facebook: '',
    instagram: '',
    twitter: '',
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the user profile data from the backend API
    axios.get('/api/v1/user_profile')
      .then((response) => {
        setProfile(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user profile:', error);
        setLoading(false);
      });
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Send the updated profile data to the backend API
    axios.put('/api/v1/user_profile', profile)
      .then(() => {
        alert('Profile updated successfully!');
      })
      .catch((error) => {
        console.error('Error updating user profile:', error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>Update your Profile</h3>
      <form onSubmit={handleSubmit}>
        <h5 className="green-txt mb-5 text-center">Personal Information</h5>
        <div className='form-floating mb-4'>
            <input 
              type="text"
              className='form-control' 
              placeholder=''
              value={profile.name || ''}
              onChange={handleChange} />
              <label>Full Name</label>
        </div>
        <div className='form-floating mb-4'>
            <input 
              type="text"
              className='form-control' 
              placeholder=''
              value={profile.phone || ''}
              onChange={handleChange} />
              <label>Phone Number</label>
        </div>
        <div className="form-floating mb-4">
          <select 
            value={profile.gender || ''} 
            onChange={handleChange}
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
            value={profile.age || ''}
            onChange={handleChange} />
            <label>Age</label>
        </div>
        <div className="form-floating mb-5">
          <textarea 
            value={profile.bio || ''} 
            onChange={handleChange}
            className="form-control"
            placeholder="" />
          <label>Bio</label>
        </div>

        <h5 className="border-top pt-5 green-txt text-center mb-5">Housemate Preferences</h5>
        <div className="form-floating mb-4">
          <select 
            value={profile.housemate_gender || ''}
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
            value={profile.housemate_age || ''}
            onChange={handleChange} />
            <label>Housemate Age</label>
        </div>
        <div className="form-floating mb-4">
          <select 
            value={profile.lifestyle || ''}
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
            value={profile.special_notes || ''} 
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
            value={profile.budget || ''}
            onChange={handleChange} />
            <label>Rent Budget</label>
        </div>

        <h5 className="border-top pt-5 green-txt text-center mb-5">Social Media Links</h5>
        <div className="form-floating mb-4">
          <input 
            type="text" 
            className='form-control' 
            placeholder=''
            value={profile.facebook || ''}
            onChange={handleChange} />
          <label>Facebook</label>
        </div>
        <div className="form-floating mb-4">
          <input 
            type="text" 
            className='form-control' 
            placeholder=''
            value={profile.twitter || ''}
            onChange={handleChange} />
            <label>Twitter</label>
        </div>
        <div className="form-floating mb-4">
          <input 
            type="text"
            className='form-control' 
            placeholder='' 
            value={profile.instagram || ''}
            onChange={handleChange} />
            <label>Instagram</label>
        </div>

        <button id='login-submit' className="my-4 custom-button form-control custom-dark-green text-white" type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default EditProfile;
