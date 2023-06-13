import LocationIcon from '../../public/location.svg';

function Recents() {
  return (
    <div className="custom-light-green py-5">
      <div className="container">
        <h3 className="text-center pb-5">Recently Added Properties</h3>
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="house-entry bg-white p-3 border-3 rounded-5">
              <div className="house-one"></div>
              <div className="price">
                <h4>UGX. 750,000</h4>
                <span className="times">(per month)</span>
              </div>
              <div className="location">
                <img src={LocationIcon} alt="Icon" />
                <span>Kiwatule</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="house-entry bg-white p-3 border-3 rounded-5">
              <div className="house-two"></div>
              <div className="price">
                <h4>UGX. 500,000</h4>
                <span className="times">(per month)</span>
              </div>
              <div className="location">
                <img src={LocationIcon} alt="Icon" />
                <span>Namugongo</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="house-entry bg-white p-3 border-3 rounded-5">
              <div className="house-three"></div>
              <div className="price">
                <h4>UGX. 370,000</h4>
                <span className="times">(per month)</span>
              </div>
              <div className="location">
                <img src={LocationIcon} alt="Icon" />
                <span>Makerere</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="house-entry bg-white p-3 border-3 rounded-5">
              <div className="house-four"></div>
              <div className="price">
                <h4>UGX. 900,000</h4>
                <span className="times">(per month)</span>
              </div>
              <div className="location">
                <img src={LocationIcon} alt="Icon" />
                <span>Wakiso</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recents;