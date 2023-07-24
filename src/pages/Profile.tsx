import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from "../components/Footer";
// import SadFace from '../assets/sad.svg';
// import Info from '../assets/info.svg';
// import { Link } from "react-router-dom";


const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Fetch the user profile data from the backend API
    axios.get('/api/v1/user_profile')
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user profile:', error);
      });
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div className="pt-4 pb-5">
      <div className="container">
        {/* <div className='text-center pb-5 mt-5'>
          <img src={SadFace} alt=":(" />
          <p className='custom-text-muted mt-4 mb-5'>Sorry! You haven't completed your profile.</p>
          <Link to='/createprofile' className='btn green-txt custom-light-green '><img src={Info} alt="" /> Update your Profile</Link>
        </div> */}

        <div className="row">
          <div className="col-lg-9 mx-auto">
            <div className="mt-5 mb-4 green-txt">Personal Information</div>
            <div className="border rounded-3 shadow-sm px-5 py-4">
              <div className="row">
                <div className="col-lg-3">
                  <div className="">
                    Name: <br />
                    <span className="custom-text-muted">Nakitto Catherine</span>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="">
                    Gender: <br />
                    <span className="custom-text-muted">Female</span>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="">
                    Age: <br />
                    <span className="custom-text-muted">25</span>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="">
                    Contact: <br />
                    <span className="custom-text-muted">0782016535</span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                Brief Bio: <br />
                <span className="custom-text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi similique in 
                  commodi doloremque delectus quo deserunt necessitatibus? Autem similique et 
                  quisquam dicta? Ex veniam quae doloremque repudiandae perferendis temporibus ratione.
                </span>
              </div>
            </div>

            <div className="mt-5 mb-4 green-txt">Housemate's Preferences</div>
            <div className="border rounded-3 shadow-sm px-5 py-4">
              <div className="row">
                <div className="col-lg-4">
                  <div className="">
                    Preferred Gender: <br />
                    <span className="custom-text-muted">Female</span>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="">
                    Age Range: <br />
                    <span className="custom-text-muted">20 - 25</span>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="">
                    Lifestyle: <br />
                    <span className="custom-text-muted">Outgoing</span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                Specific Requirements: <br />
                <span className="custom-text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi similique in 
                  commodi doloremque delectus quo deserunt necessitatibus? Autem similique et 
                  quisquam dicta? Ex veniam quae doloremque repudiandae perferendis temporibus ratione.
                </span>
              </div>
            </div>

            <div className="mt-5 mb-4 green-txt">Rent Budget</div>
            <div className="border rounded-3 shadow-sm px-5 py-4">
              <div className="row">
                <div className="col-lg-4">
                  <div className="">
                    Budget: <br />
                    <h4 className="green-txt">Ugx. 350,000</h4>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="">
                    Special Notes: <br />
                    <span className="custom-text-muted">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi similique in 
                      commodi doloremque delectus quo deserunt necessitatibus? Autem similique et 
                      quisquam dicta?
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-5 mb-4 green-txt">Social Media Links</div>
            <div className="mb-5 border rounded-3 shadow-sm px-5 py-4">
              <div className="row">
                <div className="col-lg-4">
                  <div className="">
                    Facebook: <br />
                    <a className="green-txt" href="https://www.facebook.com/ncathie">https://www.facebook.com/ncathie</a>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="">
                    Twitter: <br />
                    <a className="green-txt" href="https://twitter.com/cathella9">https://twitter.com/cathella9</a>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="">
                    Instagram: <br />
                    <a className="green-txt" href="https://www.instagram.com/nakittodesignshop/">https://www.instagram.com/nakittodesignshop/</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-2">
            <div className="border rounded-3 shadow-sm p-3">
              <div className="nav justify-content-center flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button className="nav-link mb-4 active" id="v-pills-info-tab" data-bs-toggle="pill" data-bs-target="#v-pills-info" type="button" role="tab" aria-controls="v-pills-info" aria-selected="true">Personal Info</button>
                <button className="nav-link mb-4" id="v-pills-preferences-tab" data-bs-toggle="pill" data-bs-target="#v-pills-preferences" type="button" role="tab" aria-controls="v-pills-preferences" aria-selected="false">Mate Preferences</button>
                <button className="nav-link mb-4" id="v-pills-budget-tab" data-bs-toggle="pill" data-bs-target="#v-pills-budget" type="button" role="tab" aria-controls="v-pills-budget" aria-selected="false">Rent Budget</button>
                <button className="nav-link mb-4" id="v-pills-interests-tab" data-bs-toggle="pill" data-bs-target="#v-pills-interests" type="button" role="tab" aria-controls="v-pills-interests" aria-selected="false">My Interests</button>
                <button className="nav-link mb-4" id="v-pills-socials-tab" data-bs-toggle="pill" data-bs-target="#v-pills-socials" type="button" role="tab" aria-controls="v-pills-socials" aria-selected="false">Social Links</button>
                <button className="nav-link mb-4" id="v-pills-privacy-tab" data-bs-toggle="pill" data-bs-target="#v-pills-privacy" type="button" role="tab" aria-controls="v-pills-privacy" aria-selected="false">Settings</button>
              </div>
            </div>
          </div> */}
          {/* <div className="col-lg-9 mx-auto">
            <div className="tab-content" id="v-pills-tabContent">
              <div className="tab-pane fade show active" id="v-pills-info" role="tabpanel" aria-labelledby="v-pills-info-tab">
                <div className="mb-4">Profile picture</div>
                <div className="mb-4">
                  Name: <br />
                  <span className="custom-text-muted">Nakitto Catherine</span>
                </div>
                <div className="mb-4">
                  Gender: <br />
                  <span className="custom-text-muted">Female</span>
                </div>
                <div className="mb-4">
                  Contact: <br />
                  <span className="custom-text-muted">0782016535</span>
                </div>
                <div className="mb-4">
                  Brief Bio: <br />
                  <span className="custom-text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi similique in 
                    commodi doloremque delectus quo deserunt necessitatibus? Autem similique et 
                    quisquam dicta? Ex veniam quae doloremque repudiandae perferendis temporibus ratione.
                  </span>
                </div>
              </div>
              <div className="tab-pane fade" id="v-pills-preferences" role="tabpanel" aria-labelledby="v-pills-preferences-tab">Housemate Preferences</div>
              <div className="tab-pane fade" id="v-pills-budget" role="tabpanel" aria-labelledby="v-pills-budget-tab">Rent Budget</div>
              <div className="tab-pane fade" id="v-pills-interests" role="tabpanel" aria-labelledby="v-pills-interests-tab">Interests and Hobbies</div>
              <div className="tab-pane fade" id="v-pills-socials" role="tabpanel" aria-labelledby="v-pills-socials-tab">Social Links</div>
              <div className="tab-pane fade" id="v-pills-privacy" role="tabpanel" aria-labelledby="v-pills-privacy-tab">Privacy Settings</div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Profile;