import Social from "./Social";

interface SocialData {
  icon: string;
  title: string;
  phone: string;
}

function Contact() {
  const contacts: SocialData[] = [
    {
      icon: './call.svg',
      title: 'Call',
      phone: '+256-782-016-535',
    },
    {
      icon: './chat.svg',
      title: 'Chat',
      phone: '+256-782-016-535',
    },
    {
      icon: './video.svg',
      title: 'Video Call',
      phone: '+256-782-016-535',
    },
    {
      icon: './message.svg',
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
            <div className="col-lg-7 mx-auto custom-text-muted desc-ft-size mb-4">
              Struggling to find your dream home? Seeking expert guidance in discovering a comfortable space that suits you? Or require consultation on residential matters? Look no further. Consult with us today.
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