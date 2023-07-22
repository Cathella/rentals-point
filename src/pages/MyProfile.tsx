const MyProfile = () => {
  return (
    <>
    <div className="pt-4 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
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
          </div>
          <div className="col-lg-9 mx-auto">
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
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default MyProfile;