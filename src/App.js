import React from 'react';
import './App.css';
import emailjs from 'emailjs-com';

function App() {
  const content = {
    about: 'About',
    services: 'Services',
    testimonials: 'Testimonials',
    contact: 'Contact',
    welcome: 'Welcome to Flexible Packaging',
    description: 'Keep your food fresher for longer!',
    aboutText: 'Our flexible barrier packaging protects your food from the things that can spoil it: air, moisture, and contamination. This means your food stays fresher, tastier, and safer for longer, whether it\'s on the shelf, in storage, or on the move. We offer a variety of pre-made pouches, bags, and liners perfect for military, business, and everyday use. All our products are made following strict guidelines to ensure food safety and quality.',
    servicesOffered: 'How It Works',
    largeScaleDesign: 'Our barriers block out air and moisture, preventing spoilage and preserving flavor.',
    problemSolving: 'They also protect your food from contamination, keeping it safe and healthy.',
    serverAdmin: 'Our pre-made options are convenient and easy to use, saving you time and effort.',
    programmingLanguages: 'Benefits',
    phpFrameworks: 'Longer shelf life',
    jsFrameworks: 'Fresher, tastier food',
    htmlCss: 'Improved safety and quality',
    databases: 'Convenient and easy to use',
    testimonialsText1: 'Flexible Packaging has significantly improved the shelf life of our products.',
    testimonialsText2: 'The convenience and quality of their packaging solutions are unmatched.',
    contactForm: 'Contact Us'
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message. Please try again.');
      });

    e.target.reset();
  };

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#home">{content.home}</a></li>
            <li><a href="#about">{content.about}</a></li>
            <li><a href="#services">{content.services}</a></li>
            <li><a href="#testimonials">{content.testimonials}</a></li>
            <li><a href="#contact">{content.contact}</a></li>
          </ul>
        </nav>
        <div className="hero-image">
          <img src="2.jpg" alt="Hero" style={{ width: '100%', height: 'auto' }} />
        </div>
      </header>
      <main>
        <section className="hero" id="about">
          <div className="hero-content">
            <h1>{content.welcome}</h1>
            <p>{content.description}</p>
            <a href="#contact" className="cta-button">{content.contactForm}</a>
          </div>
        </section>
        <section className="section" id="about">
          <h2>{content.about}</h2>
          <p>{content.aboutText}</p>
        </section>
        <section className="section-extended" id="services">
          <h2>{content.servicesOffered}</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>{content.largeScaleDesign}</h3>
              <p>{content.problemSolving}</p>
              <p>{content.serverAdmin}</p>
            </div>
            <div className="service-card">
              <h3>{content.programmingLanguages}</h3>
              <p>{content.phpFrameworks}</p>
              <p>{content.jsFrameworks}</p>
              <p>{content.htmlCss}</p>
              <p>{content.databases}</p>
            </div>
          </div>
        </section>
        <section className="section" id="testimonials">
          <h2>{content.testimonials}</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p>{content.testimonialsText1}</p>
              <p className="testimonial-author">- Military Supplier</p>
            </div>
            <div className="testimonial-card">
              <p>{content.testimonialsText2}</p>
              <p className="testimonial-author">- Food Business Owner</p>
            </div>
          </div>
        </section>
        <section className="section" id="contact">
          <h2>{content.contact}</h2>
          <form className="contact-form" onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required /><br />
            <textarea name="message" placeholder="Your Message" required></textarea><br /><br />
            <button type="submit">Send</button>
            <p> 🇪🇹𝑭𝒍𝒆𝒙𝒊𝒃𝒍𝒆 𝒑𝒂𝒄𝒌𝒂𝒈𝒊𝒏𝒈 𝒎𝒂𝒏𝒖𝒇𝒂𝒄𝒕𝒖𝒓𝒊𝒏𝒈 𝑷.𝑳.𝑪
𝑬𝒎𝒂𝒊𝒍:- 𝒇𝒍𝒆𝒙𝒑𝒂𝒄𝒌02@𝒈𝒎𝒂𝒊𝒍.𝒄𝒐𝒎
𝑷.𝑶.𝑩𝑶𝑿:-13 𝑪𝑶𝑫𝑬 1250<br/>
𝑻𝒆𝒍:-0114391939</p>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
