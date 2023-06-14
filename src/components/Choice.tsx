import CommunicationIcon from '../../public/communication.svg';

function Choice() {
  return (
    <>
      <div className="col-md-6 col-lg-3">
        <div className="text-center custom-light-green border-3 rounded-5 p-4 why">
          <span className='icon-container custom-dark-green'>
            <img src={CommunicationIcon} alt="Icon" />
          </span>
          <h4 className='mt-3'>Communication</h4>
          <div className="choice-desc">We make sure that we are in contact with you every step of the process.</div>
        </div>
      </div>
    </>
  );
}

export default Choice;