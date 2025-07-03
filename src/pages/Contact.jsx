import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'YOUR_SERVICE_ID',      // Replace with your EmailJS Service ID
                'YOUR_TEMPLATE_ID',     // Replace with your EmailJS Template ID
                form.current,
                'YOUR_PUBLIC_KEY'       // Replace with your EmailJS Public Key
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert('Message sent successfully!');
                    form.current.reset();
                },
                (error) => {
                    console.log(error.text);
                    alert('Oops! Something went wrong.');
                }
            );
    };

    return (
        <div className="contact-hero">
            <div className="bubbles-container">
                <span className="bubble bubble1"></span>
                <span className="bubble bubble2"></span>
                <span className="bubble bubble3"></span>
                <span className="bubble bubble4"></span>
                <span className="bubble bubble5"></span>
                <span className="bubble bubble6"></span>
                <span className="bubble bubble7"></span>
                <span className="bubble bubble8"></span>
                <span className="bubble bubble9"></span>
            </div>
            <div className="contact-hero-text">
                <h1>
                    Let’s <span>Connect</span>
                </h1>
                <p>Have a project in mind or just want to say hi? I’d love to hear from you.</p>
            </div>

            <div className="contact-form-section">
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="user_name">Name</label>
                        <input type="text" id="user_name" name="user_name" placeholder="Your name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="user_email">Email</label>
                        <input type="email" id="user_email" name="user_email" placeholder="you@example.com" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>
        </div>
    );
}