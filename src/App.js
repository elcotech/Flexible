import React from 'react';
import './App.css';
import emailjs from 'emailjs-com';

function App() {
  const content = {
    about: 'ስለ እኛ',
    services: 'ምርቶች እና አገልግሎቶች',
    testimonials: 'ምስክርነቶች',
    contact: 'አግኙን',
    home: 'መነሻ',
    welcome: 'ናድ ጨርቃጨርቅና አልባሳት ትሬዲንግ አክሲዮን ማኅበር',
    description: 'ጥራት፣ መራራትነትና ኢኖቬሽን በማጣመር የተቀረበ እጅግ የተሻለ አምራችነት።',
    aboutText: 'ናድ ጨርቃጨርቅና አልባሳት ትሬዲንግ አክሲዮን ማኅበር በሸገር ከተማ በለጋ ቴፎ የሚገኝ ዘመናዊ ሥነ-ምህዳር ጨርቃጨርቅና አልባሳት አምራች ነው። የላቀ ቴክኖሎጂን ከዘላቂ የአመራረት ልምዶች ጋር በማጣመር ለሀገር ውስጥ እና ለአለም አቀፍ ገበያዎች ከፍተኛ ጥራት ያላቸውን ጨርቆች እና አልባሳት በማምረት ላይ እንሰራለን።',
    servicesOffered: 'ምርቶች እና አገልግሎቶች',
    largeScaleDesign: '• ለወንዶች፣ ለሴቶች እና ለልጆች የተሸመኑ እና የተጠለፉ ልብሶች',
    problemSolving: '• የስራ ልብስ እና ዩኒፎርም',
    serverAdmin: '• የቤት ውስጥ ጨርቃ ጨርቅ (አልጋ አንሶላ፣ ፎጣ፣ መጋረጃዎች)',
    programmingLanguages: '• ብጁ ጨርቅ እና ልብስ ማምረት',
    phpFrameworks: '• የጨርቃጨርቅ ግብይት እና ምንጭ አገልግሎቶች',
    jsFrameworks: 'ምርት እና ቴክኖሎጂ',
    htmlCss: 'የኛ ፋብሪካ 45,000 m² ሲሆን የመቁረጫ፣ የስፌት፣ የማጠናቀቂያ እና የማሸጊያ ክፍሎች የተገጠመለት ነው። ወጥነት ያለው አፈፃፀም እና ውጤት ለማረጋገጥ ኃይል ቆጣቢ ማሽነሪዎችን እና የውሃ መልሶ ጥቅም ላይ ማዋል ስርዓቶችን እንጠቀማለን።',
    databases: 'ዘላቂነት እና ጥራት',
    testimonialsText1: 'ቆሻሻን እና ልቀቶችን በመቀነስ ለአካባቢ ተስማሚ ስራዎች ቁርጠኞች ነን፣ ዘላቂ የማቅለም እና የማጠናቀቅ ሂደቶችን እንከተላለን፣ የውሃ አያያዝ እና እንደገና ጥቅም ላይ ማዋል ስርዓቶችን እና ፍትሃዊ የስራ ቦታ መደቦችን እንጠብቃለን።',
    testimonialsText2: 'ከፍተኛ ጥራት፣ ኢኖቬሽን እና ተመጣጣኝ ዋጋ ያላቸው ምርቶችን ለዓለም ገበያ ለማቅረብ ተስፋ የተሰጠ ተግባራዊ ቅንጅት እና ትጉህ አስተዳደር እንደምንያዘዝ ተግባራዊ ማስረጃ ነው።',
    contactForm: 'አግኙን'
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
          <img src="2.jpg" alt="Hero" style={{ width: '60%', height: 'auto' }} />
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
              📍 Sheger City, Lega Tefo <br/>
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
