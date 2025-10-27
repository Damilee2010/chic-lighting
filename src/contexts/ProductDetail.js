import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import '../styles/ProductDetails.css';

function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const cart = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const allProducts = [{
     id: 1,
      image: "/images/outdoor-lantern.jpg",
      name: "Aurora Outdoor Lantern",
      description: "Stylish weather-resistant lantern perfect for patios.",
      type: "durable",
      price: "$189",
      rating: "⭐⭐⭐⭐",
      fullDescription: "Crafted from rustproof aluminum with a glass enclosure, the Aurora Lantern brings elegance and endurance to any outdoor setting.",
      features: ["Weather resistant", "LED compatible", "2-year warranty"],
      specifications: {
        material: "Aluminum & Glass",
        dimensions: "20\" H x 8\" W",
        bulbType: "E26",
        weight: "5.2 lbs"
      }
    },
    {
      id: 2,
      image: "/images/accent-light.jpg",
      name: "Luna Wall Sconce",
      description: "Decorative wall-mounted light for ambient spaces.",
      type: "decor",
      price: "$149",
      rating: "⭐⭐⭐⭐⭐",
      fullDescription: "The Luna Sconce adds a touch of soft illumination to hallways and living rooms, featuring a matte black finish and frosted diffuser.",
      features: ["Matte finish", "Energy efficient", "Soft glow"],
      specifications: {
        material: "Steel & Frosted Glass",
        dimensions: "12\" H x 6\" W",
        bulbType: "E27",
        weight: "3.1 lbs"
      }
    },
    {
      id: 3,
      image: "/images/desk-lamp.jpg",
      name: "Nova Desk Lamp",
      description: "Sleek adjustable desk lamp with dimmable light.",
      type: "modern",
      price: "$119",
      rating: "⭐⭐⭐⭐",
      fullDescription: "Perfect for study or work, Nova features adjustable brightness and a flexible arm for targeted illumination.",
      features: ["Adjustable arm", "Touch dimmer", "LED lighting"],
      specifications: {
        material: "Matte aluminum",
        dimensions: "18\" H x 7\" D",
        bulbType: "Integrated LED",
        weight: "3.3 lbs"
      }
    },
    {
      id: 4,
      image: "/images/zen-accent-light.jpg",
      name: "Zen Accent Light",
      description: "Compact table light with a minimalist design.",
      type: "classic",
      price: "$99",
      rating: "⭐⭐⭐⭐",
      fullDescription: "Designed for subtle beauty, the Zen Accent Light fits perfectly on nightstands or side tables, emitting a calm warm glow.",
      features: ["Compact size", "Soft light tone", "Energy-saving"],
      specifications: {
        material: "Resin base & linen shade",
        dimensions: "15\" H x 8\" W",
        bulbType: "E14 LED",
        weight: "2.1 lbs"
      }
    },
    {
      id: 5,
      image: "/images/vintage-lamp.jpg",
      name: "Edison Vintage Lamp",
      description: "Classic filament-style lamp with brass finish.",
      type: "durable",
      price: "$159",
      rating: "⭐⭐⭐⭐⭐",
      fullDescription: "The Edison Lamp delivers nostalgic charm with a modern touch. Ideal for home offices or reading corners.",
      features: ["Filament bulb", "Brass base", "3-year warranty"],
      specifications: {
        material: "Brass & Glass",
        dimensions: "17\" H x 9\" W",
        bulbType: "E27 filament",
        weight: "4.2 lbs"
      }
    },
    {
      id: 6,
      image: "/images/chandelier.jpg",
      name: "Celeste Crystal Chandelier",
      description: "Elegant hanging chandelier with crystal details.",
      type: "classic",
      price: "$499",
      rating: "⭐⭐⭐⭐⭐",
      fullDescription: "Bring a touch of luxury to your dining space with the Celeste Chandelier, featuring hand-cut crystals and adjustable suspension.",
      features: ["Crystal glass", "Adjustable chain", "Dimmable"],
      specifications: {
        material: "Steel & Crystal",
        dimensions: "24\" H x 20\" W",
        bulbType: "E12",
        weight: "12 lbs"
      }
    },
    {
      id: 7,
      image: "/images/floor-lamp.jpg",
      name: "Verona Floor Lamp",
      description: "Tall standing lamp with sleek silhouette.",
      type: "modern",
      price: "$219",
      rating: "⭐⭐⭐⭐",
      fullDescription: "The Verona Floor Lamp adds elegance to any modern space with a metal frame and ambient light diffusion.",
      features: ["Stable base", "LED compatible", "Soft diffusion"],
      specifications: {
        material: "Stainless steel",
        dimensions: "60\" H x 10\" D",
        bulbType: "E26 LED",
        weight: "7.8 lbs"
      }
    },
    {
      id: 8,
      image: "/images/aria-reading-lamp.jpg",
      name: "Aria Reading Lamp",
      description: "Floor lamp ideal for study or lounge spaces.",
      type: "decor",
      price: "$179",
      rating: "⭐⭐⭐⭐",
      fullDescription: "With its adjustable neck and matte finish, the Aria Lamp brings both function and elegance to your favorite corner.",
      features: ["Adjustable neck", "Warm white LED", "Anti-glare shade"],
      specifications: {
        material: "Metal & Plastic",
        dimensions: "58\" H x 9\" D",
        bulbType: "E26 LED",
        weight: "6.5 lbs"
      }
    },
    {
      id: 9,
      image: "/images/table-lamp.jpg",
      name: "Amber Table Lamp",
      description: "Warm-glow bedside lamp with linen shade.",
      type: "decor",
      price: "$139",
      rating: "⭐⭐⭐⭐",
      fullDescription: "A cozy addition to your bedside or living space, the Amber Lamp combines functionality with soft aesthetics.",
      features: ["Fabric shade", "Warm tone", "Compact base"],
      specifications: {
        material: "Ceramic & Fabric",
        dimensions: "16\" H x 8\" D",
        bulbType: "E27 LED",
        weight: "2.6 lbs"
      }
    },
    {
      id: 10,
      image: "/images/pendant-lamp.jpg",
      name: "Orion Pendant Lamp",
      description: "Industrial ceiling lamp with matte finish.",
      type: "modern",
      price: "$189",
      rating: "⭐⭐⭐⭐⭐",
      fullDescription: "The Orion Pendant Lamp gives your kitchen or workspace a refined industrial appeal with adjustable hanging height.",
      features: ["Adjustable cord", "Matte surface", "Energy efficient"],
      specifications: {
        material: "Metal",
        dimensions: "12\" H x 10\" D",
        bulbType: "E26 LED",
        weight: "3.8 lbs"
      }
    },
    {
      id: 11,
      image: "/images/atlas-garden-lantern.jpg",
      name: "Atlas Garden Lantern",
      description: "Outdoor lantern perfect for garden pathways.",
      type: "classic",
      price: "$199",
      rating: "⭐⭐⭐⭐",
      fullDescription: "Illuminate your garden with the Atlas Lantern — designed to withstand rain and heat while enhancing outdoor beauty.",
      features: ["Rustproof", "Ground stake", "Solar compatible"],
      specifications: {
        material: "Aluminum",
        dimensions: "19\" H x 7\" W",
        bulbType: "Solar LED",
        weight: "4.9 lbs"
      }
    },
    {
      id: 12,
      image: "/images/halo-patio-light.jpg",
      name: "Halo Patio Light",
      description: "Circular lantern ideal for decks and terraces.",
      type: "durable",
      price: "$179",
      rating: "⭐⭐⭐⭐⭐",
      fullDescription: "The Halo Patio Light provides consistent ambient glow with weather-resistant construction for year-round outdoor use.",
      features: ["IP65 waterproof", "Rechargeable battery", "Modern design"],
      specifications: {
        material: "Plastic & Metal",
        dimensions: "15\" H x 12\" D",
        bulbType: "Rechargeable LED",
        weight: "4.2 lbs"
      }
    },
    {
      id: 13,
      image: "/images/nimbus-lantern.jpg",
      name: "Nimbus Lantern",
      description: "Portable lantern with USB rechargeable light.",
      type: "durable",
      price: "$129",
      rating: "⭐⭐⭐⭐",
      fullDescription: "Compact and reliable, Nimbus is ideal for camping or emergency lighting with up to 20 hours of illumination per charge.",
      features: ["USB rechargeable", "Portable handle", "Lightweight"],
      specifications: {
        material: "ABS plastic",
        dimensions: "10\" H x 6\" D",
        bulbType: "LED",
        weight: "2.5 lbs"
      }
    },
    {
      id: 14,
      image: "/images/solara-hanging-light.jpg",
      name: "Solara Hanging Light",
      description: "Hanging outdoor lantern with solar panel top.",
      type: "decor",
      price: "$159",
      rating: "⭐⭐⭐⭐",
      fullDescription: "Eco-friendly and efficient, Solara automatically charges during the day and lights your garden at night.",
      features: ["Solar-powered", "Automatic on/off", "Rustproof"],
      specifications: {
        material: "Metal & Plastic",
        dimensions: "14\" H x 8\" D",
        bulbType: "LED solar",
        weight: "3.9 lbs"
      }
    },
    {
      id: 15,
      image: "/images/lyra-outdoor-lantern.jpg",
      name: "Lyra Outdoor Lantern",
      description: "Elegant modern lantern with frosted glass shade.",
      type: "modern",
      price: "$189",
      rating: "⭐⭐⭐⭐⭐",
      fullDescription: "The Lyra Lantern combines sleek design and efficient LED lighting to create an inviting atmosphere for outdoor evenings.",
      features: ["Frosted glass", "LED ready", "Durable build"],
      specifications: {
        material: "Glass & Steel",
        dimensions: "21\" H x 9\" W",
        bulbType: "E26 LED",
        weight: "5.4 lbs"
      }
    },
    {
      id: 16,
      image: "/images/helios-patio-torch.jpg",
      name: "Helios Patio Torch",
      description: "Outdoor lantern with warm firelight imitation.",
      type: "classic",
      price: "$169",
      rating: "⭐⭐⭐⭐",
      fullDescription: "Helios brings the charm of traditional torches into modern outdoor design, featuring flickering flame-effect LEDs.",
      features: ["Flame effect", "Solar charge", "Weatherproof"],
      specifications: {
        material: "Aluminum & Glass",
        dimensions: "18\" H x 7\" W",
        bulbType: "LED flame",
        weight: "4.1 lbs"
      }
    },
    {
      id: 17,
      image: "/images/eclipse-garden-lamp.jpg",
      name: "Eclipse Garden Lamp",
      description: "Minimalist outdoor lamp for landscape highlights.",
      type: "durable",
      price: "$179",
      rating: "⭐⭐⭐⭐",
      fullDescription: "Eclipse provides subtle illumination for pathways and garden features, blending durability and modern aesthetics.",
      features: ["IP67 waterproof", "Energy-efficient", "Anti-glare lens"],
      specifications: {
        material: "Powder-coated aluminum",
        dimensions: "18\" H x 8\" W",
        bulbType: "E27 LED",
        weight: "4.6 lbs"
      }
    }
  ];

  useEffect(() => {
    const foundProduct = allProducts.find(p => p.id === parseInt(productId));
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      navigate('/');
    }
    setLoading(false);
  }, [productId, navigate]);

  if (loading) return <div className="loading">Loading product details...</div>;
  if (!product) return <div className="error">Product not found</div>;

  return (
    <div className="product-detail">
      
      <div className="product-detail-content">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
          <div className="product-badge">{product.type}</div>
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <div className="price">{product.price}</div>
          <div className="rating">{product.rating}</div>
          <p className="full-description">{product.fullDescription}</p>
          <div className="features">
            <h3>Key Features:</h3>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="specifications">
            <h3>Specifications:</h3>
            <div className="spec-grid">
              <div className="spec-item">
                <span className="spec-label">Material:</span>
                <span className="spec-value">{product.specifications.material}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Dimensions:</span>
                <span className="spec-value">{product.specifications.dimensions}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Bulb Type:</span>
                <span className="spec-value">{product.specifications.bulbType}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Weight:</span>
                <span className="spec-value">{product.specifications.weight}</span>
              </div>
            </div>
          </div>
          <div className="action-buttons">
            <button className="btn btn-primary add-to-cart" onClick={() => cart.addToCart(product)} >
              Add to Cart - {product.price}
            </button>
            <button className="btn btn-secondary" onClick={() => navigate(-1)} >
              ← Back to Products
            </button>
          </div>
        </div>
      </div>
      <div className="related-products">
        <h3>You Might Also Like</h3>
        <div className="related-grid">
          {allProducts
            .filter(p => p.type === product.type && p.id !== product.id)
            .slice(0, 3)
            .map(related => (
              <Link key={related.id} to={`/product/${related.id}`} className="related-card">
                <img src={related.image} alt={related.name} />
                <h4>{related.name}</h4>
                <span className="price">{related.price}</span>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;