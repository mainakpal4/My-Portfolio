import React from 'react';
import './Contact.css';

function Contact() {
  const email = "mainak.pal.cse@gmail.com";

  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <p className="contact-subtitle">
        Want to connect, collaborate, or schedule an interview? Drop a message below!
      </p>
      
      <div className="contact-info">
        <a href={`mailto:${email}`} className="email-badge">
          📧 {email}
        </a>
      </div>

      <form
        className="contact-form"
        action="https://formspree.io/f/xpwpbvnv"
        method="POST"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="_replyto" placeholder="Your Email" required />
        <textarea name="message" placeholder="Message for Mainak" rows="5" required />
        
        <div className="contact-button-group">
          <button type="submit" className="btn-send">
            Send Message
          </button>
          <a
            href={`mailto:${email}?subject=Interview%20Invitation%20-%20Mainak%20Pal&body=Hi%20Mainak,%20we%20would%20like%20to%20schedule%20an%20interview%20with%20you.`}
            className="btn-schedule"
          >
            📅 Schedule an Interview
          </a>
        </div>
      </form>
    </section>
  );
}

export default Contact;
