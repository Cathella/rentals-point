import Choice from "./Choice";

interface ChoiceData {
  icon: string;
  title: string;
  description: string;
}

function Choose() {
  const choices: ChoiceData[] = [
    {
      icon: './communication.svg',
      title: 'Communication',
      description: 'Stay connected and informed throughout the process for a seamless home experience.'
    },
    {
      icon: './reliability.svg',
      title: 'Reliability',
      description: 'Count on our trustworthy service to guide you towards your perfect home.'
    },
    {
      icon: './quality.svg',
      title: 'Quality',
      description: 'Experience top-notch service and exceptional attention to detail for a superior home search.'
    },
    {
      icon: './satisfaction.svg',
      title: 'Satisfaction',
      description: 'Discover a service that goes above and beyond to ensure your complete satisfaction.'
    },
  ];

  return (
    <div className="bg-white py-5">
      <div className="container">
        <h3 className="text-center">What we do</h3>
        <div className="text-center pt-4 pb-5">
          <div className="row">
            <div className="col-lg-6 mx-auto custom-text-muted desc-ft-size mb-4">
              Reliable full-service brokers integrating modern technology to ensure a trustworthy experience.
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