import LocationIcon from '../../public/location.svg';

function Property() {
  return (
    <>
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
    </>
  );
}

export default Property;