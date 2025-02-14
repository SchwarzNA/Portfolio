import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <h2>🤝 Let's Connect!</h2>

      <div className="contact-top">
        <div className="qr-code-container">
          <img src="qr-code.png" alt="QR Code" className="qr-code" />
        </div>
        <div className="business-card-link-container">
          <a
            href="https://bit.ly/timothy-john-nicolas-business-card"
            target="_blank"
            rel="noopener noreferrer"
            className="business-card-link rotated-link"
          >
            Business Card
          </a>
        </div>
      </div>

      <div className="contact-details">
        <p>📞 +63-919-001-7425</p>
        <p>✉️ nicolas.timothyjohn@gmail.com</p>
        <p>
          <span role="img" aria-label="LinkedIn">🔗</span>{" "}
          <a
            href="http://www.linkedin.com/in/timothy-john-nicolas"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            LinkedIn Profile
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
