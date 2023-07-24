import { useEffect, useState } from 'react';
import axios from 'axios';

const ListProfiles = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // Fetch the list of user profiles from the backend API
    axios.get('/api/v1/user_profiles')
      .then((response) => {
        setProfiles(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user profiles:', error);
      });
  }, []);

  return (
    <div>
      <h1>List of User Profiles</h1>
      {profiles.map((profile) => (
        <div key={profile.id}>
          <h3>{profile.name}</h3>
          <p>Bio: {profile.bio}</p>
          <p>Preferences: {profile.preferences}</p>
          <p>Budget: {profile.budget}</p>
          {/* Add additional profile information here */}
        </div>
      ))}
    </div>
  );
};

export default ListProfiles;
