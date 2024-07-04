import React from 'react';
import './App.css';
function App() {
  const content = {
    home: 'Home',
    about: 'About ELCOTECH',
    services: 'Services',
    testimonials: 'Testimonials',
    contact: 'Contact Us',
    welcome: 'Welcome to ELCOTECH',
    description: '🏆 Experienced and Certified Freelancer - For Big Companies',
    aboutText: '⭐ 10+ years of experience as a full-stack PHP developer.\n🔥 Available full-time, ready to assist with your projects for 30+ hours a week. I am a senior full-stack web developer with over 8 years of extensive experience, serving as a solutions architect and team leader. My expertise lies in React, JavaScript, and PHP, Mobile and web App development, with a focus on PHP, Laravel, MySQL, React native, Vue.js, and Node.js, alongside CSS frameworks.\nSince 2012, I\'ve been deeply involved with the LAMP/MERN stack and associated software stacks, continually refining my skills and staying abreast of the latest technologies.\n🔑 My primary objective is to establish lasting relationships that go beyond individual projects. I strive to exceed expectations, understanding that this is crucial for ongoing collaboration. Regular communication is a cornerstone of my work ethic, ensuring that we stay aligned throughout the project lifecycle.',
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
          <img src="2.jpg" alt="Hero" style={{ width: '70%', height: 'auto' }} />
         
        </div>
      </header>
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
              <p className="testimonial-author">- Andnet unversity college</p>
            </div>
            <div className="testimonial-card">
              <p>{content.testimonialsText2}</p>
              <p className="testimonial-author">- MEAB Agency</p>
            </div>
          </div>
        </section>
        <section className="section" id="contact">
          <h2>{content.contact}</h2>
          <form className="contact-form">
          <p>Price for website like this is <h1>$30</h1> free unlimited hosting for 6 months</p>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required /><br />
            <textarea placeholder="Your Message" required></textarea><br /><br />
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
      
    </div>
    
  );
}

export default App;
