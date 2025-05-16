import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <p>Want to connect, collaborate, or just say hi? Drop a message below!</p>
      <form
        className="contact-form"
        action="https://formspree.io/f/xpwpbvnv"  // Replace with your Formspree ID
        method="POST"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="_replyto" placeholder="Your Email" required />
        <textarea name="message" placeholder="Message for Mainak" rows="6" required />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
