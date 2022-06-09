import './styles/contact.css';

function Contact() {
  const handleSubmit = e => {
    e.preventDefault();
    const url = "https://formsubmit.co/merwynpatrick@gmail.com";
    const name = document.getElementsByClassName("form-control")[0].value;
    const email = document.getElementsByClassName("form-control")[1].value;
    const message = document.getElementsByClassName("form-control")[2].value;
    const contactData = { name, email, message };
    fetch(url, {
      method: "post",
      body: JSON.stringify(contactData)
    })
    .then(res => {
      console.log(res);
      document.getElementsByClassName("form-control")[0].value = "";
      document.getElementsByClassName("form-control")[1].value = "";
      document.getElementsByClassName("form-control")[2].value = "";
      alert("Your message was sent. Thanks for contacting");
    })
    .catch(err => console.log(err));
  };
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
            <strong>What's your story?</strong> Get in touch. Ready to be hired as a developer and willing to relocate
          </p>
          <form action="https://formsubmit.co/merwynpatrick@gmail.com" method="POST" target="_blank">
            <input type="text" name="name" class="form-control" placeholder="Full Name" required />
            <input type="email" name="email" class="form-control" placeholder="Email Address" required />
            <textarea placeholder="Your Message" class="form-control" name="message" rows="5" required></textarea>
            <button type="submit" class="btn">Submit Form</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;