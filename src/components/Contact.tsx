import Social from "./Social";

interface SocialData {
  icon: string;
  title: string;
  phone: string;
}

function Contact() {
  const contacts: SocialData[] = [
    {
      icon: '../../public/call.svg',
      title: 'Call',
      phone: '+256-782-016-535',
    },
    {
      icon: '../../public/chat.svg',
      title: 'Chat',
      phone: '+256-782-016-535',
    },
    {
      icon: '../../public/video.svg',
      title: 'Video Call',
      phone: '+256-782-016-535',
    },
    {
      icon: '../../public/message.svg',
      title: 'Message',
      phone: '+256-782-016-535',
    },
  ];

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
          {contacts.map((contact, index) => (
            <Social key={index} {...contact} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contact;