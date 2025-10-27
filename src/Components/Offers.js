import React from "react";
import "../styles/offers.css";

export default function Offers() {
  const offers = [
    {
      icon: "fa-solid fa-percent",
      title: "Summer Sale",
      text: "Get up to 40% off on selected chandeliers",
      percent: "40% OFF",
      button: "Shop Now",
    },
    {
      icon: "fa-solid fa-gift",
      title: "Buy 1 Get 1",
      text: "Exclusive deals on wall and ceiling lights",
      percent: "BUY 1 GET 1",
      button: "Shop Now",
    },
    {
      icon: "fa-solid fa-tag",
      title: "15% Discount",
      text: "Enjoy 15% off on all LED light collections",
      percent: "15% OFF",
      button: "Shop Now",
    },
  ];

  return (
    <section className="offers-section">
      <h2 className="offers-title">Special Offers</h2>
      <p className="offers-subtitle">
        Don’t miss out on these exclusive deals
      </p>

      <div className="offers-container">
        {offers.map((offer, index) => (
          <div className="offer-card" key={index}>
            <div className="offer-circle">
              <span className="offer-icon"><i className={offer.icon}></i></span>
            </div>
            <h3 className="offer-name">{offer.title}</h3>
            <p className="offer-desc">{offer.text}</p>
            <p className="offer-percent">{offer.percent}</p>
            <button className="offer-btn">{offer.button}</button>
          </div>
        ))}
      </div>
    </section>
  );
}
