import React, { useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
import '../styles/LEDDetail.css';

function LEDDetail() {
  const { ledId } = useParams();
  const navigate = useNavigate();
  const cart = useContext(CartContext);

  const ledItems = [
    {
      id: 201,
      name: "LED Spot",
      desc: "Warm white, 8W",
      price: "$12",
      img: "/images/led-spot.jpg",
      fullDescription: "Energy-efficient LED spot light with warm white illumination. Perfect for accent lighting and highlighting specific areas.",
      features: ["Warm white light", "Energy efficient", "Long lifespan", "Dimmable"],
      specifications: {
        wattage: "8W",
        colorTemperature: "2700K",
        lumens: "800 lm",
        beamAngle: "36°",
        lifespan: "25,000 hours"
      }
    },
    {
      id: 202,
      name: "LED Decoration",
      desc: "RGB, 5W",
      price: "$24",
      img: "/images/led-decoration.jpg",
      fullDescription: "Color-changing RGB LED decoration light with remote control. Create amazing lighting effects for any occasion.",
      features: ["RGB color changing", "Remote control", "Multiple modes", "Water resistant"],
      specifications: {
        wattage: "5W",
        colors: "16 million RGB",
        control: "IR remote",
        modes: "8 dynamic modes",
        ipRating: "IP44"
      }
    },
    {
      id: 203,
      name: "Apart LED",
      desc: "Adjustable, 10W",
      price: "$39",
      img: "/images/apart-led.jpg",
      fullDescription: "Modern adjustable LED light with sleek design. Perfect for modern interiors and focused lighting needs.",
      features: ["Adjustable arms", "Sleek design", "High CRI", "Energy saving"],
      specifications: {
        wattage: "10W",
        CRI: "90+",
        adjustable: "360° rotation",
        color: "3000K/4000K/6000K",
        dimmable: "Yes"
      }
    },
    {
      id: 204,
      name: "Strip LED",
      desc: "Flexible strip, 2m",
      price: "$18",
      img: "/images/strip-led.jpg",
      fullDescription: "Flexible LED strip light that can be cut to size. Ideal for under-cabinet, cove, and accent lighting.",
      features: ["Cuttable every 3 LEDs", "Self-adhesive", "Flexible", "Bright output"],
      specifications: {
        length: "2 meters",
        cutPoints: "Every 3 LEDs",
        voltage: "12V DC",
        color: "Warm white",
        adhesive: "3M backing"
      }
    },
    {
      id: 205,
      name: "LED Panel",
      desc: "Slim panel, 12W",
      price: "$29",
      img: "/images/led-panel.jpg",
      fullDescription: "Ultra-slim LED panel providing uniform and glare-free lighting. Perfect for offices and commercial spaces.",
      features: ["Slim design", "Uniform light", "Glare-free", "Easy installation"],
      specifications: {
        wattage: "12W",
        thickness: "12mm",
        lightOutput: "1200 lm",
        colorTemp: "4000K",
        installation: "Surface/recessed"
      }
    }
  ];

  const ledProduct = ledItems.find(item => item.id === parseInt(ledId));

  if (!ledProduct) {
    return (
      <div className="led-not-found">
        <h2>LED Product Not Found</h2>
        <p>The requested LED product does not exist.</p>
        <button onClick={() => navigate('/leds')} className="btn">
          Back to LED Collection
        </button>
      </div>
    );
  }

  return (
    <div className="led-detail">

      <div className="led-detail-content">
        <div className="led-image-section">
          <div className="led-main-image">
            <img src={ledProduct.img} alt={ledProduct.name} />
          </div>
        </div>
        
        <div className="led-info-section">
          <h1>{ledProduct.name}</h1>
          <div className="led-price">{ledProduct.price}</div>
          <p className="led-short-desc">{ledProduct.desc}</p>
          
          <p className="led-full-description">{ledProduct.fullDescription}</p>
          
          <div className="led-features">
            <h3>Features:</h3>
            <ul>
              {ledProduct.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="led-specifications">
            <h3>Technical Specifications:</h3>
            <div className="spec-grid">
              {Object.entries(ledProduct.specifications).map(([key, value]) => (
                <div key={key} className="spec-item">
                  <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                </div>
              ))}
            </div>
          </div>

          <button 
            className="btn led-add-to-cart"
            onClick={() => cart.addToCart({
              id: ledProduct.id,
              name: ledProduct.name,
              price: ledProduct.price,
              img: ledProduct.img,
              desc: ledProduct.desc
            })}
          >
            Add to Cart - {ledProduct.price}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LEDDetail;