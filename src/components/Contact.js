import './styles/contact.css';

function Contact() {
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrap">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src="https://pngimg.com/uploads/phone/phone_PNG48996.png" alt="phone" className="c-icon" />
              +1 737 744 7895
            </div>
            <div className="c-info-item">
              <img src="https://pngimg.com/uploads/email/email_PNG100740.png" alt="phone" className="c-icon" />
              merwynpatrick@gmail.com
            </div>
            <div className="c-info-item">
              <img src="https://p.kindpng.com/picc/s/705-7056384_address-png-file-address-icon-png-transparent-png.png" alt="address" className="c-icon" />
              Windsor, ON, Canada
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <strong>What's your story</strong> Get in touch. Ready to be hired as a developer and willing to relocate
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;