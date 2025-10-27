  import React from "react";
  import { Link } from 'react-router-dom';
  import "../styles/Hero.css";

  function Hero() {
    return (
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title"> Illuminate Your Space<br/> <span className="span">Elegance</span> </h1>
          <p className="hero-lead"> Since 1971, we have been bringing unique lighting and accessories from the most elegant traditional to refined contemporary for today's eclectic interiors. </p>
          <div className="hero-features">
            <span> ✓ Free Shipping &nbsp;</span>
            <span>&nbsp;✓ Lifetime Warranty&nbsp;</span>
            <span>&nbsp;✓ Expert Installation&nbsp;</span>
          </div>
          <Link to="/contact">
            <button className="btn secondary"> Book Consultation </button>
          </Link>
        </div>
        <div className="hero-images">
          <img src="./images/floor-lamp.jpg" alt="Modern chandelier lighting" className="big"/>
          <img src="./images/image-1.png" alt="Contemporary table lamp" className="sml"/>
          <img src="./images/hero.jpg" alt="Elegant wall sconce" className="big"/>
          <img src="./images/image-2.png" alt="Designer floor lamp" className="sml"/>
        </div>
      </section>
    );
  }

  export default Hero;