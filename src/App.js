import React from 'react';
import './App.css';
import emailjs from 'emailjs-com';

function App() {
  const content = {
    about: 'About',
    services: 'Products & Services',
    testimonials: 'Testimonials',
    contact: 'Contact',
    home: 'Home',
    welcome: 'NAD TEXTILE AND GARMENT TRADING SHARE COMPANY',
    description: 'Weaving Quality, Sustainability, and Innovation.',
    aboutText: 'NAD Textile and Garment Trading Share Company is a modern, eco-conscious textile and garment manufacturer located in Sheger City, Lega Tefo. We specialize in producing high-quality fabrics and garments for local and international markets, combining advanced technology with sustainable production practices.',
    servicesOffered: 'Products & Services',
    largeScaleDesign: '• Woven and knitted garments for men, women, and children',
    problemSolving: '• Work wear and uniforms',
    serverAdmin: '• Home textiles (bed sheets, towels, curtains)',
    programmingLanguages: '• Custom fabric and garment manufacturing',
    phpFrameworks: '• Textile trading and sourcing services',
    jsFrameworks: 'Production & Technology',
    htmlCss: 'Our 45,000 m² factory is equipped with advanced cutting, sewing, finishing, and packing units. We use energy-efficient machinery, water recycling systems, and quality control labs for consistent performance.',
    databases: 'Sustainability & Quality',
    testimonialsText1: 'We are committed to eco-friendly operations, minimizing waste through sustainable dyeing, water recycling, ethical labor standards, and continuous quality improvement.',
    testimonialsText2: 'Our dedication to innovation and quality ensures reliable and affordable textile solutions for global customers.',
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
              <h3>Products</h3>
              <p>{content.largeScaleDesign}</p>
              <p>{content.problemSolving}</p>
              <p>{content.serverAdmin}</p>
              <p>{content.programmingLanguages}</p>
              <p>{content.phpFrameworks}</p>
            </div>
            <div className="service-card">
              <h3>{content.jsFrameworks}</h3>
              <p>{content.htmlCss}</p>
              <h3>{content.databases}</h3>
              <p>{content.testimonialsText1}</p>
            </div>
          </div>
        </section>

        <section className="section" id="testimonials">
          <h2>{content.testimonials}</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p>{content.testimonialsText1}</p>
              <p className="testimonial-author">- NAD Textile</p>
            </div>
            <div className="testimonial-card">
              <p>{content.testimonialsText2}</p>
              <p className="testimonial-author">- NAD Textile</p>
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
            <p>
              📍 Sheger City, Lega Tafo <br/>
              ✉ info@nadtextile.com <br/>
              🌐 www.nadtextile.com <br/>
              ☎ +251 935 644 444 / +251 935 67 7777
            </p>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
