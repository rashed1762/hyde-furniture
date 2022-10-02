import React from 'react';
import { Link } from 'react-router-dom';
import '../components/CssFile/Contact.css';
import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import emailjs from '@emailjs/browser';
import Footercomp from '../components/footer/Footercomp';


const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e0upac7', 'template_3v6hllz', form.current, 'oYs0fZ-tmSmHuYr2P')
      .then((result) => {
          console.log(result.text);
          console.log("massage sent")
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
    return (
        <div>
            <div className='contact'>
                <h1>CONTACT</h1>
                
            </div>

            <div className='container mt-5'>
                <div className="row">
                    <div className="col-md-1 ">
                      
                        
                    </div>
                    <div className="col-md-1">

                    </div>
                    <div className="col-md-8 contact-part pt-5" data-aos="zoom-in-left">
                        <div className='ps-3 contactstyle'>
                        <h2 >GET IN TOUCH</h2>
                        <hr />
                        <form ref={form} onSubmit={sendEmail}>
                     <label>Name</label>
                     <br />
                    <input className='name' type="text" name="user_name" />
                    <br />
                    <br />
                    <label>Email</label>
                    <br />
                    <input className='name' type="email" name="user_email" />
                    <br />
                    <br />
                    <label>Message</label>
                    <br />
                    <textarea className='massage' name="message" />
                    <br />
                    <br />
                    <Button type="submit" variant="light">SEND</Button>{' '}
                    
                   
    </form>
                        </div>
                        
                    </div>
                </div>
            </div>


            <section>
                <Footercomp></Footercomp>
            </section>
            
        </div>
    );
};

export default Contact;