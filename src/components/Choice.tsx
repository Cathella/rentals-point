interface ChoiceProps {
  icon: string;
  title: string;
  description: string;
}

const Choice: React.FC<ChoiceProps> = ({ icon, title, description }) => {
  return (
      <div className="col-md-6 col-lg-3">
        <div className="text-center custom-light-green border-3 rounded-5 p-4 why">
          <span className='icon-container custom-dark-green'>
            <img src={icon} alt="Icon" />
          </span>
          <h4 className='mt-3'>{title}</h4>
          <div className="choice-desc custom-text-muted mb-3">{description}</div>
        </div>
      </div>
  );
};

export default Choice;