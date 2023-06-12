import CallIcon from '../../public/call.svg';
import ChatIcon from '../../public/chat.svg';
import VideoIcon from '../../public/video.svg';
import MessageIcon from '../../public/message.svg';

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
          <div className="col-lg-3">
            <div className="light-bordered rounded-5 px-3 py-4 contact">
              <div className="contact-content">
                <span className='icon-container text-center custom-light-green'>
                  <img src={ChatIcon} alt="Icon" />
                </span>
                <div>
                  <h4>Chat</h4>
                  <div className="custom-text-muted phone">+256-782-016-535</div>
                </div>
              </div>
              <div>
                <a href="#" className="custom-button d-block custom-dark-green">Chat Now</a>
              </div>
            </div>  
          </div>
          <div className="col-lg-3">
            <div className="light-bordered rounded-5 px-3 py-4 contact">
              <div className="contact-content">
                <span className='icon-container text-center custom-light-green'>
                  <img src={VideoIcon} alt="Icon" />
                </span>
                <div>
                  <h4>Video Call</h4>
                  <div className="custom-text-muted phone">+256-782-016-535</div>
                </div>
              </div>
              <div>
                <a href="#" className="custom-button d-block custom-dark-green">Video Call Now</a>
              </div>
            </div>  
          </div>
          <div className="col-lg-3">
            <div className="light-bordered rounded-5 px-3 py-4 contact">
              <div className="contact-content">
                <span className='icon-container text-center custom-light-green'>
                  <img src={MessageIcon} alt="Icon" />
                </span>
                <div>
                  <h4>Message</h4>
                  <div className="custom-text-muted phone">+256-782-016-535</div>
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