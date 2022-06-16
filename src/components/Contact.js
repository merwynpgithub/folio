import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './styles/contact.css';

function Contact() {
  const form = useRef();
  const [done, setDone] = useState(false)
  const handleSubmit = e => {
    e.preventDefault();
    emailjs.sendForm('service_6qz1vjm', 'template_gxli3yn', form.current, 'BU6X7yeHVO8n7shuT')
      .then((result) => {
          console.log(result.text);
          setDone(true);
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("subject").value = "";
          document.getElementById("message").value = "";
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrap">
        <div className="c-left">
          <h1 className="c-title">Let's discuss the Job</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src="https://pngimg.com/uploads/phone/phone_PNG48996.png" alt="phone" className="c-icon" />
              +1 437 374 9471
            </div>
            <div className="c-info-item">
              <img src="https://pngimg.com/uploads/email/email_PNG100740.png" alt="email" className="c-icon" />
              merwynpatrick@gmail.com
            </div>
            <div className="c-info-item">
              <img src="https://www.pngitem.com/pimgs/m/509-5096659_address-dizhidaohang-address-icon-white-png-transparent-png.png" alt="address" className="c-icon" />
              Windsor, ON, Canada
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <strong>Contact me. </strong> Get in touch. Ready to be hired as a developer and willing to relocate
          </p>
          <form ref={form} onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Full Name" id="name" required />
            <input type="email" name="email" placeholder="Email Address" id="email" required />
            <input type="subject" name="subject" placeholder="Subject" id="subject" required />
            <textarea placeholder="Your Message" name="message" rows="5" id="message" required></textarea>
            <button type="submit">Submit Form</button>
            {done && <p>Thanks for contacting.</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;