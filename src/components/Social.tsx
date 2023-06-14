import CallIcon from '../../public/call.svg';

function Social() {
  return (
    <>
      <div className="col-md-6 col-lg-3">
        <div className="light-bordered rounded-5 px-3 py-4 contact">
          <div className="contact-content">
            <span className='icon-container text-center custom-light-green'>
              <img src={CallIcon} alt="Icon" />
            </span>
            <div>
              <h4>Call</h4>
              <div className="custom-text-muted phone">+256-782-016-535</div>
            </div>
          </div>
          <div>
            <a href="#" className="custom-button d-block custom-dark-green">Call Now</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Social;