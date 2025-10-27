// CategoryPage.js
import React, { useMemo, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import '../styles/CategoryPage.css';

function CategoryPage() {
  const { categoryType } = useParams();
  const cart = useContext(CartContext);

  const allProducts = [
    {
      id: 1, image: "/images/outdoor-lantern.jpg", name: "Outdoor Lantern", description: "Weather resistant, 20\" height, black finish", type: "durable", price: "$189", rating: "⭐⭐⭐⭐"
    },
    {
      id: 2, image: "/images/pendant-lamp.jpg", name: "Pendant Lamp", description: "Brass finish, 12\" drop", type: "decor", price: "$129", rating: "⭐⭐⭐⭐⭐"
    },
    {
      id: 3, image: "/images/wall-sconce.jpg", name: "Wall Sconce", description: "LED, warm white", type: "modern", price: "$79", rating: "⭐⭐⭐⭐"
    },
    {
      id: 4, image: "/images/table-lamp.jpg", name: "Table Lamp", description: "Marble base with linen shade", type: "classic", price: "$99", rating: "⭐⭐⭐⭐"
    },
    {
      id: 5, image: "/images/floor-lamp.jpg", name: "Floor Lamp", description: "Adjustable arm, matte black", type: "modern", price: "$149", rating: "⭐⭐⭐⭐"
    },
    {
      id: 6, image: "/images/chandelier.jpg", name: "Chandelier", description: "Crystal with brass arms", type: "decor", price: "$499", rating: "⭐⭐⭐⭐⭐"
    },
    {
      id: 7, image: "/images/desk-lamp.jpg", name: "Desk Lamp", description: "LED, touch dimmer", type: "durable", price: "$59", rating: "⭐⭐⭐⭐"
    },
    {
      id: 8, image: "/images/accent-light.jpg", name: "Accent Light", description: "Warm LED strip, 2m", type: "modern", price: "$39", rating: "⭐⭐⭐⭐"
    }
  ];

  const categoryProducts = useMemo(() => {
    if (categoryType === 'all') return allProducts;
    return allProducts.filter(product => product.type === categoryType);
  }, [categoryType]);

  const categoryName = categoryType === 'all' ? 'All Products' : 
                      categoryType.charAt(0).toUpperCase() + categoryType.slice(1) + ' Lights';

  return (
    <div className="category-page">
      <div className="category-header">
        <h1>{categoryName}</h1>
        <p className="product-count">Showing {categoryProducts.length} products</p>
      </div>
      
      <div className="category-products">
        {categoryProducts.map(product => (
          <div key={product.id} className="category-product-card">
            <Link to={`/product/${product.id}`} className="product-image-link">
              <img src={product.image} alt={product.name} />
              <div className="product-type-badge">{product.type}</div>
            </Link>
            
            <div className="product-info">
              <Link to={`/product/${product.id}`}>
                <h3>{product.name}</h3>
              </Link>
              <p className="product-description">{product.description}</p>
              
              <div className="product-meta">
                <span className="price">{product.price}</span>
                <span className="rating">{product.rating}</span>
              </div>

              <button 
                className="btn add-to-cart-btn"
                onClick={() => cart.addToCart({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  img: product.image,
                  type: product.type
                })}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {categoryProducts.length === 0 && (
        <div className="no-products">
          <h3>No products found in this category</h3>
          <Link to="/" className="btn">Browse All Products</Link>
        </div>
      )}
    </div>
  );
}

export default CategoryPage;