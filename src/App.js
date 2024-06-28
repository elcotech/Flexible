import React from 'react';
import './App.css';

function App() {
  const content = {
    home: 'Home',
    about: 'About MEAB',
    services: 'Services',
    testimonials: 'Testimonials',
    contact: 'Contact Us',
    welcome: 'Welcome to MEAB',
    description: 'We facilitate job opportunities abroad for Ethiopian women.',
    aboutText: 'MEAB is a leading agency in Addis Ababa, Ethiopia, specializing in facilitating job opportunities abroad for Ethiopian women.',
    jobPlacement: 'Job Placement',
    jobPlacementDesc: 'We connect Ethiopian women with employment opportunities abroad.',
    legalSupport: 'Legal Support',
    legalSupportDesc: 'We provide legal assistance for Ethiopian women working abroad.',
    trainingPrograms: 'Training Programs',
    trainingProgramsDesc: 'We offer training in language, cultural adaptation, and job skills.',
    testimonialsText1: 'MEAB helped me secure a job in Dubai, and now I can support my family back home.',
    testimonialsText2: 'The team at MEAB was instrumental in my employment journey in Kuwait. I am very grateful.',
    contactForm: 'Contact Us'
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
      </header>
      <div className="hero-image">
        <img src="2.jpg" alt="Hero" style={{ width: '100%', height: 'auto' }} />
      </div>
      <main>
        <section className="hero" id="home">
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
          <h2>{content.services}</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>{content.jobPlacement}</h3>
              <p>{content.jobPlacementDesc}</p>
            </div>
            <div className="service-card">
              <h3>{content.legalSupport}</h3>
              <p>{content.legalSupportDesc}</p>
            </div>
            <div className="service-card">
              <h3>{content.trainingPrograms}</h3>
              <p>{content.trainingProgramsDesc}</p>
            </div>
          </div>
        </section>
        <section className="section" id="testimonials">
          <h2>{content.testimonials}</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p>{content.testimonialsText1}</p>
              <p className="testimonial-author">- Selamawit, Dubai</p>
            </div>
            <div className="testimonial-card">
              <p>{content.testimonialsText2}</p>
              <p className="testimonial-author">- Genet, Kuwait</p>
            </div>
          </div>
        </section>
        <section className="section" id="contact">
          <h2>{content.contact}</h2>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
