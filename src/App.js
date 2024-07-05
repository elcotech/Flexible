import React from 'react';
import './App.css';
import emailjs from 'emailjs-com';

function App() {
  const content = {
    about: 'About',
    services: 'Services',
    testimonials: 'Testimonials',
    contact: 'Contact',
    welcome: 'Welcome to ELCOTECH',
    description: 'Experienced and Certified Freelancer - For Big Companies',
    aboutText: '⭐ 10+ years of experience as a full-stack PHP developer.\n🔥 Available full-time, ready to assist with your projects for 30+ hours a week, serving as a solutions architect and team leader. My expertise lies in React, JavaScript, PHP, Mobile and web App development, with a focus on React, Laravel, MySQL, React native, Vue.js, and Node.js, alongside CSS,HTML and PHP frameworks.\n🏆 Since 2012, I\'ve been deeply involved with the LAMP/MERN stack and associated software stacks, continually refining my skills and staying abreast of the latest technologies.\n🔑 My primary objective is to establish lasting relationships that go beyond individual projects. I strive to exceed expectations, understanding that this is crucial for ongoing collaboration. Regular communication is a cornerstone of my work ethic, ensuring that we stay aligned throughout the project lifecycle.',
    servicesOffered: 'Services Offered',
    largeScaleDesign: 'Large-scale website architecture design, including database design and query optimization.',
    problemSolving: 'Problem-solving, addressing any issues that arise during the project.',
    serverAdmin: 'Server Administration and Optimization.',
    programmingLanguages: 'Programming Languages and Techniques',
    phpFrameworks: 'PHP & PHP frameworks (Laravel/CodeIgniter/CakePHP).',
    jsFrameworks: 'JavaScript & JS frameworks (Node.js/Express/React.js/Vue.js).',
    htmlCss: 'HTML/CSS/jQuery.',
    databases: 'Databases: MySQL/PostgreSQL/MongoDB/Airtable.',
    cloudServices: 'Cloud Services: AWS (EC2, Lambda, S3), Firebase.',
    integration: 'Integration: Webhooks (Zapier, Make...).',
    cms: 'Content Management Systems: WordPress',
    versionControl: 'Version Control: Git',
    projectManagement: 'Project Management: Jira',
    testimonialsText1: 'ELCOTECH helped us design a robust architecture for our large-scale web application.',
    testimonialsText2: 'The team at ELCOTECH provided excellent problem-solving skills and optimized our server setup.',
    contactForm: 'Contact Us'
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_udbhs7q', 'template_kssz2gr', e.target, 'LkPanZm-3OzubO9Pg')
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
          <h2>{content.services}</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>{content.servicesOffered}</h3>
              <p>{content.largeScaleDesign}</p>
              <p>{content.problemSolving}</p>
              <p>{content.serverAdmin}</p>
            </div>
            <div className="service-card">
              <h3>{content.programmingLanguages}</h3>
              <p>{content.phpFrameworks}</p>
              <p>{content.jsFrameworks}</p>
              <p>{content.htmlCss}</p>
              <p>{content.databases}</p>
              <p>{content.cloudServices}</p>
              <p>{content.integration}</p>
              <p>{content.cms}</p>
              <p>{content.versionControl}</p>
              <p>{content.projectManagement}</p>
            </div>
          </div>
        </section>
        <section className="section" id="testimonials">
          <h2>{content.testimonials}</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p>{content.testimonialsText1}</p>
              <p className="testimonial-author">- MEAB Agency</p>
            </div>
            <div className="testimonial-card">
              <p>{content.testimonialsText2}</p>
              <p className="testimonial-author">- Andnet University College</p>
            </div>
          </div>
        </section>
        <section className="section" id="contact">
          <p>Price for website like this is <h1>$30</h1> free unlimited hosting</p>
          <h2>{content.contact}</h2>
          <form className="contact-form" onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required /><br />
            <textarea name="message" placeholder="Your Message" required></textarea><br /><br />
            <button type="submit">Send</button>
          </form>
        </section>
      </main> 
    </div>
  );  }

export default App;
