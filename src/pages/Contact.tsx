import './Contact.css';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

// STEP 1: Update the FormData interface with index signature
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  [key: string]: string; // This allows any string key with string values
}

const Contact = () => {
  // STEP 2: Use the updated interface in useState
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean, message: string} | null>(null);

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
      handle: "info@bubblantvatteri.se",
      url: "mailto:info@bubblantvatteri.se",
      icon: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
    },
    {
      platform: "Telefon",
      handle: "070-787 94 10",
      url: "tel:+46707879410",
      icon: "https://cdn-icons-png.flaticon.com/512/597/597177.png",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // STEP 3: Now formData will work perfectly with emailjs.send
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await emailjs.send(
        'service_fp589ji',          // Your Service ID
        'template_wnffwwa',         // Your Template ID
        formData,                   // Now properly typed
        'egQPKxrCs1OSQAZuI'         // Your Public Key
      );

      if (response.status === 200) {
        setSubmitStatus({ 
          success: true, 
          message: 'Tack för ditt meddelande! Vi återkommer så snart som möjligt.' 
        });
        setFormData({ 
          name: '', 
          email: '', 
          phone: '', 
          message: '' 
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({ 
        success: false, 
        message: 'Något gick fel. Försök igen senare.' 
      });
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Kontakta oss</h2>
      <p className="contact-subtitle">
        Vi finns här för att hjälpa dig! Välj något av alternativen nedan eller fyll i formuläret:
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

      <div className="contact-form-container">
        <h3 className="contact-form-title">Skicka oss ett meddelande</h3>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Namn *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Ditt fullständiga namn"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">E-post *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="din@epost.se"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Telefonnummer</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="070-123 45 67"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Meddelande *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Hur kan vi hjälpa dig?"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            disabled={isSubmitting} 
            className="submit-button"
          >
            {isSubmitting ? 'Skickar...' : 'Skicka meddelande'}
          </button>
          
          {submitStatus && (
            <div className={`submit-message ${submitStatus.success ? 'success' : 'error'}`}>
              {submitStatus.message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;