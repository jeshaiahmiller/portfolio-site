import React from 'react';
import './Contact.css'
import { useEffect } from 'react';

export default function Contact() {
  
  useEffect(() => {
    document.body.className = 'contact-page-body';
}, []);
  return (
    <div className="contact-parent">
      <div>
        <h1>Work With Me!</h1>
      </div>
      <form className="contact-form">
        <input className="input" type="text" placeholder="Your Name" />
        <input className="input" type="email" placeholder="Email" />
        <textarea className="input" placeholder="Message"></textarea>
        <button>Send</button>
      </form>
  </div>


  )
}
