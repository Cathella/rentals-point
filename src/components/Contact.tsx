import Social from "./Social";

interface SocialData {
  icon: string;
  title: string;
  phone: string;
}

function Contact() {
  const contacts: SocialData[] = [
    {
      icon: './chat.svg',
      title: 'WhatsApp',
      phone: '+256-782-016-535',
    },
    {
      icon: './message.svg',
      title: 'Email',
      phone: 'support@rentalspoint.com',
    },
  ];

  return (
    <div className="custom-light-green py-5">
      <div className="container">
        <div className="pt-4 pb-5">
          <div className="row">
            <div className="col-lg-4 mx-auto">
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
                {contacts.map((contact, index) => (
                  <Social key={index} {...contact} />
                ))}
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