import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ledProducts = [
  {
    id: 201,
    name: "LED Spot",
    description: "Warm white, 8W",
    type: "led",
    price: "$12",
    image: "/images/led-spot.jpg",
    rating: "⭐⭐⭐⭐",
    fullDescription: "High-quality LED spot light with warm white illumination, perfect for accent lighting.",
    features: ["8W power consumption", "Warm white light", "Long lifespan"],
    specifications: {
      wattage: "8W",
      color: "Warm White",
      lifespan: "25,000 hours"
    }
  },
  {
    id: 202,
    name: "LED Decoration",
    description: "RGB, 5W",
    type: "led",
    price: "$24",
    image: "/images/led-decoration.jpg",
    rating: "⭐⭐⭐⭐",
    fullDescription: "Colorful RGB LED decoration lights for creating vibrant atmospheres.",
    features: ["RGB color changing", "Remote control", "Multiple modes"],
    specifications: {
      wattage: "5W",
      color: "RGB",
      control: "Remote"
    }
  },
  // Add other LED products...
];

function LEDDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const productId = parseInt(id);
  
  const product = ledProducts.find(p => p.id === productId);

  if (!product) {
    return (
      <div style={{ padding: '60px 10%', textAlign: 'center' }}>
        <h2>Product Not Found</h2>
        <p>The LED product you're looking for doesn't exist.</p>
        <button 
          className="btn" 
          onClick={() => navigate('/led')}
          style={{ marginTop: '20px' }}
        >
          Back to LED Collection
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '60px 10%' }}>
      <button 
        className="btn" 
        onClick={() => navigate(-1)}
        style={{ marginBottom: '30px' }}
      >
        ← Back
      </button>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '40px',
        alignItems: 'start'
      }}>
        <div>
          <img 
            src={product.image} 
            alt={product.name}
            style={{ 
              width: '100%', 
              borderRadius: '12px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}
          />
        </div>
        
        <div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{product.name}</h1>
          <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '20px' }}>
            {product.fullDescription || product.description}
          </p>
          
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fbbf24', marginBottom: '20px' }}>
            {product.price}
          </div>
          
          <div style={{ marginBottom: '20px' }}>
            <span style={{ fontSize: '1.1rem' }}>Rating: </span>
            <span>{product.rating}</span>
          </div>
          
          
          {product.features && (
            <div style={{ marginBottom: '30px' }}>
              <h3>Features</h3>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index} style={{ marginBottom: '5px' }}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
          
          {product.specifications && (
            <div style={{ marginBottom: '30px' }}>
              <h3>Specifications</h3>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                gap: '10px',
                background: '#f9f9f9',
                padding: '15px',
                borderRadius: '8px'
              }}>
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key}>
                    <strong>{key}:</strong> {value}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <button className="btn" style={{ marginRight: '15px' }}>
            Add to Cart
          </button>
          <button className="btn" style={{ background: '#2c2c2c', color: 'white' }}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default LEDDetail;