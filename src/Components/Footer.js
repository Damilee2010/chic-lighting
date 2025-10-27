import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer fade-in">
     <div className=" top">
       <div className="about">
        <h2>About Us</h2>
        <p>Since 1971, bringing elegant <br/>lighting solutions to homesand <br/>businesses.</p>
      </div>
      <div className="about">
        <h2>Quick Links</h2>
        <p >Site Map</p>
        <p>FAQ</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
      <div className="about">
        <h2>Contact</h2>
        <p><i className="fa-solid fa-location-dot"></i>123 Lighting Street</p>
          <p><i className="fa-solid fa-signs-post"></i>City, State 12345</p>
          <p><i className="fa-solid fa-envelope"></i>info@chiclighting.com</p>
          <p><i className="fa-solid fa-phone"></i>(555) 123-4567</p>
      </div>
      <div className="about">
        <h2>Download</h2>
         <a href="/files/sample.pdf" download="MyGuide.pdf" className="btn">
         <button className="btn2">Download Catalog</button>
      </a>
      </div>
     </div>

     <div className="bottom">
      <p>© 2025 Chic Lighting And Design — All rights reserved.</p>
     </div>

    </footer>
  );
}