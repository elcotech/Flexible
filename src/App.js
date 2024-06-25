import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#initiatives">Initiatives</a></li>
            <li><a href="#get-involved">Get Involved</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <h1>Hope of Light for All</h1>
            <p>Empowering Communities Through Gender Equality and Climate Action</p>
            <a href="#get-involved" className="cta-button">Get Involved</a>
          </div>
        </section>
        <section id="about" className="about">
          <div className="about-content">
            <h2>About Us</h2>
            <p>Mission statement emphasizing gender equality and climate change.</p>
            <p>Impact statement on the urgent need for action.</p>
          </div>
        </section>
        <section id="initiatives" className="initiatives">
          <div className="initiatives-content">
            <h2>Our Initiatives</h2>
            <div className="initiatives-grid">
              {/* Cards for each initiative */}
              <div className="initiative-card">
                <h3>Water Accessibility</h3>
                <p>Description about providing clean water access.</p>
              </div>
              <div className="initiative-card">
                <h3>Agricultural Support</h3>
                <p>Sustainable farming practices to combat climate change effects.</p>
              </div>
              <div className="initiative-card">
                <h3>Community Education</h3>
                <p>Climate change mitigation through education and local practices.</p>
              </div>
              <div className="initiative-card">
                <h3>Advocacy</h3>
                <p>Policy engagement for marginalized communities affected by climate change.</p>
              </div>
              <div className="initiative-card">
                <h3>Monitoring and Evaluation</h3>
                <p>Importance of data-driven impact assessment and strategy refinement.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="get-involved" className="get-involved">
          <div className="get-involved-content">
            <h2>Get Involved</h2>
            <p>Ways to contribute: donate, volunteer, spread the word.</p>
          </div>
        </section>
        <section id="contact" className="contact">
          <div className="contact-content">
            <h2>Contact Us</h2>
            <form>
              <label>Name</label>
              <input type="text" name="name" required />
              <label>Email</label>
              <input type="email" name="email" required />
              <label>Message</label>
              <textarea name="message" rows="4" required></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Hope of Light for All. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
