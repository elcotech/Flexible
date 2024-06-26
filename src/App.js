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
            <li><a href="#initiatives">Initiatives</a></li>
            <li><a href="#get-involved">Get Involved</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <h1>Welcome to Hope for All</h1>
            <p>Together we can make a difference.</p>
            <a href="#get-involved" className="cta-button">Get Involved</a>
          </div>
        </section>
        <section className="section" id="about">
          <h2>About Us</h2>
          <p>Hope of Light for All is dedicated to addressing the intersectionality of gender equality and climate change.</p>
        </section>
        <section className="section-extended">
          <h2>Our Mission</h2>
          <p>We aim to support women and children affected by climate change, building resilience and adaptive capacity.</p>
        </section>
        <section className="section" id="initiatives">
          <h2>Our Initiatives</h2>
          <div className="initiatives-grid">
            <div className="initiative-card">
              <h3>Water Access</h3>
              <p>Providing clean water access to improve health outcomes.</p>
            </div>
            <div className="initiative-card">
              <h3>Agricultural Support</h3>
              <p>Supporting sustainable agricultural practices.</p>
            </div>
            <div className="initiative-card">
              <h3>Community Education</h3>
              <p>Educating communities on climate change mitigation strategies.</p>
            </div>
            <div className="initiative-card">
              <h3>Advocacy</h3>
              <p>Engaging with policymakers to address climate change impacts.</p>
            </div>
          </div>
        </section>
        <section className="section-extended">
          <h2>Our Vision</h2>
          <p>Creating a more just and equitable society for all.</p>
        </section>
        <section className="section" id="get-involved">
          <h2>Get Involved</h2>
          <div className="get-involved-content">
            <p>Join us in making a difference. Your contribution will help us support women and children affected by climate change.</p>
            <a href="#contact" className="cta-button">Contact Us</a>
          </div>
        </section>
        <section className="section-extended">
          <h2>Our Impact</h2>
          <p>We have positively impacted the lives of many families through our initiatives.</p>
        </section>
        <section className="section" id="contact">
          <h2>Contact Us</h2>
          <div className="contact-content">
            <form>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message"></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Hope for All. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
