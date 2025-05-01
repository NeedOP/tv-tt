import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Kontakta Oss</h2>
      <p>Vi finns här för att hjälpa dig. Välj något av alternativen nedan:</p>

      <div className="contact-grid">
        <a href="https://instagram.com" target="_blank" className="contact-card">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" />
          <span>@tvattföretag</span>
        </a>

        <a href="https://facebook.com" target="_blank" className="contact-card">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
          <span>Tvätt Företag</span>
        </a>

        <a href="mailto:info@tvatt.se" className="contact-card">
          <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Mail" />
          <span>info@tvatt.se</span>
        </a>

        <a href="tel:+46701234567" className="contact-card">
          <img src="https://cdn-icons-png.flaticon.com/512/597/597177.png" alt="Telefon" />
          <span>070-123 45 67</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
