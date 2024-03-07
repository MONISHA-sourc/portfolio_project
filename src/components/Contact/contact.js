import React, { useRef } from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png'
import YoutubeIcon from '../../assets/youtube.png';
import TwitterIcon from '../../assets/twitter.png';
import emailjs from '@emailjs/browser';
import Linkedin from '../../assets/linkedin.png';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nlb8xcf', 'template_p3q84ua', form.current, {
        publicKey: 'nLQuPxLVjWSftS1aF',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section className='contactPage'>
      {/*<div id='clients'>
        <h1 className='contactPageTitle'>My Clients</h1>
        <p className='clientDesc'>It was nice working with you</p>
        <div className='clientImgs'>
          <img src={Walmart} alt='Client' className='clientImg' />
          <img src={Adobe} alt='Client' className='clientImg' />
          <img src={Microsoft} alt='Client' className='clientImg' />
          <img src={Facebook} alt='Client' className='clientImg' />
  </div>
  </div>*/}
      <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please fill the form below to contact me</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type='text' className='name' placeholder='Your Name' name="user_name" />
          <input type='email' className='email' placeholder='Your Email' name="user_email" />
          <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
          <button type='submit' value='Send' className='submitBtn'>Submit</button>
          {/*<div className='links'>
                        <img src={FacebookIcon} alt='Facebook' className='link'/>
                        <img src={YoutubeIcon} alt='Youtube' className='link'/>
                        <img src={TwitterIcon} alt='Twitter' className='link'/>
                        <img src={InstagramIcon} alt='Instagram' className='link'/>

                     </div>*/}
          <div className='links'>
            <a href="https://www.facebook.com/monisha.sarkar.121?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
              <img src={FacebookIcon} alt='Facebook' className='link' />
            </a>
            <a href="https://www.youtube.com/channel/UCRyLO84ITq4N0YKSdPxEPuQ" target="_blank" rel="noopener noreferrer">
              <img src={YoutubeIcon} alt='Youtube' className='link' />
            </a>
            {/*<a href="https://www.twitter.com/your_username" target="_blank" rel="noopener noreferrer">
              <img src={TwitterIcon} alt='Twitter' className='link' />
            </a>
                    */}
            <a href="https://www.linkedin.com/in/monishasomani/" target="_blank" rel="noopener noreferrer">
              <img src={Linkedin} alt='Instagram' className='link1' />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
export default Contact