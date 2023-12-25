import React from 'react';
import './contact.css';

function Contact(){
  return(
    <div id='update'>
  <div id="contact">contact us:</div>
  <div className="mains">
    <div className="location sames">
      <span>
        <i>Location:</i>
      </span>
      <p>
        GWP, Patna
        <br />
        Sahay Nagar
        <br />
        Phulwarisharif, Patna - 801506
      </p>
    </div>
    <div className="call sames">
      <span>
        <i>call us on:</i>
      </span>{" "}
      <br />
      <p>
        toll free number:
        <br />
        0612-2229534
      </p>
    </div>
    <div className="email sames">
      <span>
        <i>Email us on:</i>
      </span>
      <p>gwpc.patna@gmail.com</p>
    </div>
    <div className="google sames">
      <span>
        <i>google location:</i>
      </span>
      <p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1799.2154593402074!2d85.07327343202941!3d25.59059336586103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57babb89184b%3A0xb0d028e399dea3d7!2sGovernment%20Women's%20Polytechnic!5e0!3m2!1sen!2sin!4v1702334139448!5m2!1sen!2sin"
          width={1100}
          height={300}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </p>
    </div>
    <div id='contact_img'>
      <img src='/contact-us-pic.jpg'/>
    </div>
  </div>
</div>

  )
}
export default Contact;