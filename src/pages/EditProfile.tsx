import { useEffect, useState } from 'react';
import axios from 'axios';

const EditProfile = () => {
  const [profile, setProfile] = useState({});
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
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
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={profile.name || ''} onChange={handleChange} />
        </div>
        <div>
          <label>Bio:</label>
          <textarea name="bio" value={profile.bio || ''} onChange={handleChange} />
        </div>
        <div>
          <label>Preferences:</label>
          <input type="text" name="preferences" value={profile.preferences || ''} onChange={handleChange} />
        </div>
        <div>
          <label>Budget:</label>
          <input type="number" name="budget" value={profile.budget || ''} onChange={handleChange} />
        </div>
        {/* Add additional profile fields for editing */}
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditProfile;
