import Choice from "./Choice";

interface ChoiceData {
  icon: string;
  title: string;
  description: string;
}

function Choose() {
  const choices: ChoiceData[] = [
    {
      icon: '../../public/communication.svg',
      title: 'Communication',
      description: 'We make sure that we are in contact with you every step of the process.'
    },
    {
      icon: '../../public/reliability.svg',
      title: 'Reliability',
      description: 'We make sure that we are in contact with you every step of the process.'
    },
    {
      icon: '../../public/quality.svg',
      title: 'Quality',
      description: 'We make sure that we are in contact with you every step of the process.'
    },
    {
      icon: '../../public/satisfaction.svg',
      title: 'Satisfaction',
      description: 'We make sure that we are in contact with you every step of the process.'
    },
  ];

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
          {choices.map((choice, index) => (
            <Choice key={index} {...choice} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Choose;