import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../contexts/CartContext';
import "../styles/Led.css";

const items = [
  {
    id: 201,
    name: "LED Spot",
    desc: "Warm white, 8W",
    price: "$12",
    img: "/images/led-spot.jpg",
  },
  {
    id: 202,
    name: "LED Decoration",
    desc: "RGB, 5W",
    price: "$24",
    img: "/images/led-decoration.jpg",
  },
  {
    id: 203,
    name: "Apart LED",
    desc: "Adjustable, 10W",
    price: "$39",
    img: "/images/apart-led.jpg",
  },
  {
    id: 204,
    name: "Strip LED",
    desc: "Flexible strip, 2m",
    price: "$18",
    img: "/images/strip-led.jpg",
  },
  {
    id: 205,
    name: "LED Panel",
    desc: "Slim panel, 12W",
    price: "$29",
    img: "/images/led-panel.jpg",
  }
];

function LEDCollection() {
  const cart = useContext(CartContext);

  const handleAddToCart = (item) => {
    if (cart && cart.addToCart) {
      cart.addToCart({ 
        id: item.id, 
        name: item.name, 
        price: item.price, 
        img: item.img 
      });
    }
  };

  return (
    <section className="led-section">
      <div className="led-inner">
        <div className="led-header">
          <h2>LED Lights Collection</h2>
        </div>
        
        <div className="led-grid">
          {items.map((it) => (
            <article className="led-card" key={it.id}>
              <Link to={`/led-product/${it.id}`} className="led-media-link">
                <div className="led-media">
                  <img src={it.img} alt={it.name} />
                  <div className="led-badge">LED</div>
                  <div className="led-price">{it.price}</div>
                </div>
              </Link>
              <div className="led-body">
                <h3 className="title">
                  <Link to={`/led-product/${it.id}`}>{it.name}</Link>
                </h3>
                <p className="led-desc">{it.desc}</p>
                <div className="led-actions">
                  <button
                    className="btn led-add"
                    onClick={() => handleAddToCart(it)}
                  >
                    Add to Cart
                  </button>
                  <Link to={`/led-product/${it.id}`} className="btn btn-outline">
                    Details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

       
      </div>
    </section>
  );
}

export default LEDCollection;