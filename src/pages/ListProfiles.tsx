import { useEffect, useState } from 'react';
import axios from 'axios';

interface UserProfile {
  id: number;
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

const ListProfiles = () => {
  const [profiles, setProfiles] = useState<UserProfile[]>([]);

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
      <h3>List of User Profiles</h3>
      {profiles.map((profile) => (
        <div key={profile.id}>
          <h3>{profile.name}</h3>
          <p>Bio: {profile.bio}</p>
          <p>Budget: {profile.budget}</p>
        </div>
      ))}
    </div>
  );
};

export default ListProfiles;
