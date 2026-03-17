import { contactData, socialLinks, developerInfo } from '../data/contact-data';

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Information</h3>
            <div className="contact-info">
              <p><i className="fas fa-map-marker-alt"></i> {contactData.address}</p>
              <p><i className="fas fa-phone"></i> {contactData.phone}</p>
              <p><i className="fas fa-envelope"></i> {contactData.email}</p>
            </div>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Holiday Hotel – All Rights Reserved</p>
          <p>Developed by <a href={developerInfo.url} target="_blank" rel="noopener noreferrer" className="developer-link">{developerInfo.name}</a></p>
        </div>
      </div>
    </footer>
  );
}
