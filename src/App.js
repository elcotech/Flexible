import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <h1>Welcome to MEAB</h1>
            <p>Empowering Ethiopian women through international employment opportunities.</p>
            <a href="#contact" className="cta-button">Contact Us</a>
          </div>
        </section>
        <section className="section" id="about">
          <h2>About MEAB</h2>
          <p>MEAB is a leading employment agency based in Addis Ababa, Ethiopia, specializing in providing job opportunities abroad for Ethiopian women.</p>
        </section>
        <section className="section-extended" id="services">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Job Placement</h3>
              <p>Matching skilled Ethiopian women with international job opportunities.</p>
            </div>
            <div className="service-card">
              <h3>Legal Support</h3>
              <p>Assisting with legal documentation and processes for overseas employment.</p>
            </div>
            <div className="service-card">
              <h3>Training Programs</h3>
              <p>Providing training in languages, cultural orientation, and job-specific skills.</p>
            </div>
          </div>
        </section>
        <section className="section" id="testimonials">
          <h2>Testimonials</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p>"MEAB helped me secure a job in Dubai, and now I can support my family back home."</p>
              <p className="testimonial-author">- Selamawit, Dubai</p>
            </div>
            <div className="testimonial-card">
              <p>"The team at MEAB was supportive throughout my journey to Kuwait. Highly recommend!"</p>
              <p className="testimonial-author">- Mahlet, Kuwait</p>
            </div>
          </div>
        </section>
        <section className="section-extended" id="contact">
          <h2>Contact Us</h2>
          <div className="contact-content">
            <form>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required /><br/>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required /><br/>
              <label htmlFor="message">Message</label><br/><br/><br/>
              <textarea id="message" name="message" required></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 MEAB. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;