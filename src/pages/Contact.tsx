import './Contact.css';

const Contact = () => {
  const contactMethods = [
    {
      platform: "Instagram",
      handle: "@tvattforetag",
      url: "https://instagram.com/tvattforetag",
      icon: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
    },
    {
      platform: "Facebook",
      handle: "Tvätt Företag",
      url: "https://facebook.com/tvattforetag",
      icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
    },
    {
      platform: "Email",
      handle: "info@tvatt.se",
      url: "mailto:info@tvatt.se",
      icon: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
    },
    {
      platform: "Telefon",
      handle: "070-787 94 10",
      url: "tel:+46707879410",
      icon: "https://cdn-icons-png.flaticon.com/512/597/597177.png",
    },
  ];

  return (
    <div className="contact-container">
      <h2 className="contact-title">Kontakta oss</h2>
      <p className="contact-subtitle">
        Vi finns här för att hjälpa dig! Välj något av alternativen nedan:
      </p>

      <div className="contact-grid">
        {contactMethods.map((method) => (
          <a
            key={method.platform}
            href={method.url}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <img
              src={method.icon}
              alt={method.platform}
              className="contact-icon"
            />
            <div className="contact-info">
              <h3>{method.platform}</h3>
              <p>{method.handle}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;