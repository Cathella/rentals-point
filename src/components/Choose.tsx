import CommunicationIcon from '../../public/communication.svg';
import SatisfiedIcon from '../../public/satisfaction.svg';
import ReliabilityIcon from '../../public/reliability.svg';
import QualityIcon from '../../public/quality.svg';

function Choose() {
  return (
    <div className="bg-white py-5">
      <div className="container">
        <h3 className="text-center">What we do</h3>
        <div className="text-center pt-4 pb-5">
          <div className="row">
            <div className="col-lg-6 mx-auto custom-text-muted">
              Trustable Full-service brokers making use of modern technology.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="text-center custom-light-green border-3 rounded-5 px-4 py-4">
              <span className='icon-container custom-dark-green'>
                <img src={CommunicationIcon} alt="Icon" />
              </span>
              <h4 className='mt-3'>Communication</h4>
              <div className="choice-desc">We make sure that we are in contact with you every step of the process.</div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="text-center custom-light-green border-3 rounded-5 px-4 py-4">
              <span className='icon-container custom-dark-green'>
                <img src={SatisfiedIcon} alt="Icon" />
              </span>
              <h4 className='mt-3'>Satisfaction</h4>
              <div className="choice-desc">We make sure that we are in contact with you every step of the process.</div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="text-center custom-light-green border-3 rounded-5 px-4 py-4">
              <span className='icon-container custom-dark-green'> 
                <img src={ReliabilityIcon} alt="Icon" />
              </span>
              <h4 className='mt-3'>Reliability</h4>
              <div className="choice-desc">We make sure that we are in contact with you every step of the process.</div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="text-center custom-light-green border-3 rounded-5 px-4 py-4">
              <span className='icon-container custom-dark-green'>
                <img src={QualityIcon} alt="Icon" />
              </span>
              <h4 className='mt-3'>Quality First</h4>
              <div className="choice-desc">We make sure that we are in contact with you every step of the process.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Choose;