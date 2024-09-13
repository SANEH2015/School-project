import React, { useState } from 'react';
import Image from '../assets/school.jfif';
import '../Navigation.css';

function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <header>
        <div className="container" style={{ backgroundColor: 'darkblue', color: 'white' }}>
          <div className="logo-and-navigation">
            <h1>CURRO</h1>
            <button className="hamburger" onClick={toggleNav}>
              {isNavOpen ? '✖' : '☰'}
            </button>
            <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
              <button className="close-button" onClick={toggleNav}>✖</button>
              <ul>
                <li><a href="#">Find a School</a></li>
                <li><a href="#">Latest News</a></li>
                <li><a href="#">Quick Tour</a></li>
                <li><a href="#">Info for Parents</a></li>
                <li><a href="#">Our Models</a></li>
                <li><a href="#">Investor Relations</a></li>
                <li><a href="#">Vacancies</a></li>
                <li><a href="#">MyHub</a></li>
                <li><button className="contact-button">CONTACT ME</button></li>
                <li><button className="apply-button" style={{ backgroundColor: 'green' }}>APPLY NOW</button></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main>
        <img style={{ width: '100%', height: '500px', objectFit: 'cover' }} src={Image} alt="School" />
        <section className="hero">
          <div className="container">
            <div className="hero-text">
              <h2>
                <a href="#">PRESCHOOL</a>
                <a href="#"> | PRIMARY SCHOOL</a>
                <a href="#"> | HIGH SCHOOL</a>
              </h2>
              <h3 style={{ marginLeft: '40%' }}>CURRO SCHOOL</h3>
              <h1>Welcome to Curro Thatchfield High School</h1>
              <div className="share-button">
                <i className="fas fa-share-alt"></i>
              </div>
            </div>
          </div>
          <section className="call-to-action">
            <div className="container">
              <div className="buttons">
                <button className="academics-button">Academics</button>
                <button className="ncv-button">NCV</button>
                <button className="facilities-button">Facilities</button>
                <button className="downloads-button">Downloads</button>
                <button className="how-to-pay-button">How to pay</button>
                <button className="contact-us-button">Contact us</button>
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default Navigation;
