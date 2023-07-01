import ChatIcon from '../assets/chat.svg';
import MessageIcon from '../assets/message.svg';

function Contact() {
  return (
    <div className="custom-light-green py-5">
      <div className="container">
        <div className="pt-4 pb-5">
          <div className="row">
            <div className="col-lg-4 me-auto">
              <h3 className="">Contact Us</h3>
              <div className="custom-text-muted desc-ft-size mb-4">
                Struggling to find your dream home?<br/>
                Seeking expert guidance in discovering a comfortable space that suits you?<br/>
                Or require consultation on residential matters?<br/>
                Look no further. Consult with us today.
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <div className="bg-white rounded-5 px-3 py-4 contact">
                    <div className="contact-content">
                      <span className='icon-container text-center custom-light-green'>
                        <img src={ChatIcon} alt="Icon" />
                      </span>
                      <div>
                        <h4>WhatsApp</h4>
                        <div className="custom-text-muted phone">+256-782-016-535</div>
                      </div>
                    </div>
                    <div>
                      <a href="https://api.whatsapp.com/send?phone=256782016535" className="custom-button d-block custom-dark-green text-white">WhatsApp Now</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="bg-white rounded-5 px-3 py-4 contact">
                    <div className="contact-content">
                      <span className='icon-container text-center custom-light-green'>
                        <img src={MessageIcon} alt="Icon" />
                      </span>
                      <div>
                        <h4>Email</h4>
                        <div className="custom-text-muted phone">rentalspoint@gmail.com</div>
                      </div>
                    </div>
                    <div>
                      <a href="mailto:rentalspoint@gmail.com?subject=Hello%20Rentals%20Point!&body=I%20need%20help%20looking%20for%20a%20rental." className="custom-button d-block custom-dark-green text-white">Email Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          
        </div>
      </div>
    </div>
  )
}

export default Contact;