import React, { useRef } from 'react';
import './Contact.css'

import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ns2bivg', 'template_20nuvy9', form.current, 'bdJrF3GtJZerN1g2q')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
       e.target.reset()
    };


    
  return (
    <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact-123">
           <div className="contact-options">
            <article className="contact-option">
            <i className="fa-solid fa-envelope"></i>
                <h4>Email</h4>
                

                <a href='mailto:aryansinghchandel1404@gmail.com'  target="_blank" rel="noreferrer">Send a message</a>
            </article>

            <article className='contact-option'>
            <i className="fa-brands fa-linkedin-in"></i>
                <h4>LinkedIn</h4>
              
                <a href='https://www.linkedin.com/in/aryan-singh-chandel-1272a1234/' target="_blank" rel="noreferrer">send a message</a>

            
            </article>

            <article className='contact-option'>
            <i className="fa-brands fa-whatsapp"></i>
                <h4>Whatsapp</h4>
              
                <a href='https://api.whatsapp.com/send?phone=+918966992318' target="_blank" rel="noreferrer">send a message</a>

            
            </article>
            </div>

            <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder='Your Full Name' required />
            <input type="email" name="email" placeholder='Your Email' required />
            <textarea name="message" rows="/" placeholder='Your Message' required />
            <button type='submit' className='btn btn-primary'>Sent message</button>
        </form> 
        </div>

        

    </section>
  )
}

export default Contact
