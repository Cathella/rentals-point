interface SocialProps {
  icon: string;
  title: string;
  phone: string;
}

const Social: React.FC<SocialProps> = ({ icon, title, phone }) => {
  return (
    <div className="col-md-6 col-lg-6">
      <div className="bg-white rounded-5 px-3 py-4 contact">
        <div className="contact-content">
          <span className='icon-container text-center custom-light-green'>
            <img src={icon} alt="Icon" />
          </span>
          <div>
            <h4>{title}</h4>
            <div className="custom-text-muted phone">{phone}</div>
          </div>
        </div>
        <div>
          <a href="#" className="custom-button d-block custom-dark-green text-white">{title} Now</a>
        </div>
      </div>
    </div>
  );
}

export default Social;