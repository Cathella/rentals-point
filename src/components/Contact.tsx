function Contact() {
  return (
    <div className="bg-white py-5">
      <div className="container">
        <h3 className="text-center">Contact Us</h3>
        <div className="text-center pt-4 pb-5">
          <div className="row">
            <div className="col-lg-7 mx-auto custom-text-muted">
              Is there a problem finding your dream home? Need a guide in finding a comfortable space that suites you?
              Or need a consultation on residential issues? Feel free to consult us.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="light-bordered rounded-5 px-4 py-4 contact">
              <div className="contact-content">
                <span>Icon</span>
                <div>
                  <h4>Call</h4>
                  <div className="custom-text-muted">+256-782-016-535</div>
                </div>
              </div>
              <div>
                <a href="#" className="custom-button d-block custom-dark-green">Call Now</a>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="light-bordered rounded-5 px-4 py-4 contact">
              <div className="contact-content">
                <span>Icon</span>
                <div>
                  <h4>Chat</h4>
                  <div className="custom-text-muted">+256-782-016-535</div>
                </div>
              </div>
              <div>
                <a href="#" className="custom-button d-block custom-dark-green">Chat Now</a>
              </div>
            </div>  
          </div>
          <div className="col-lg-3">
            <div className="light-bordered rounded-5 px-4 py-4 contact">
              <div className="contact-content">
                <span>Icon</span>
                <div>
                  <h4>Video Call</h4>
                  <div className="custom-text-muted">+256-782-016-535</div>
                </div>
              </div>
              <div>
                <a href="#" className="custom-button d-block custom-dark-green">Video Call Now</a>
              </div>
            </div>  
          </div>
          <div className="col-lg-3">
            <div className="light-bordered rounded-5 px-4 py-4 contact">
              <div className="contact-content">
                <span>Icon</span>
                <div>
                  <h4>Message</h4>
                  <div className="custom-text-muted">+256-782-016-535</div>
                </div>
              </div>
              <div>
                <a href="#" className="custom-button d-block custom-dark-green">Message Now</a>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;