import React, { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { SearchContext } from '../contexts/SearchContext';
import Visitor from './Visitor';
import "../styles/Hero.css";

function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const close = () => setOpen(false);
  const cart = useContext(CartContext);
  const search = useContext(SearchContext);

  useEffect(() => {
    if (open) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [open]);

  const handleSearch = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      console.log('Searching for:', search.query);
    }
  };

  const handleCloseSearch = () => {
    search.close();
    search.setQuery(''); 
  };

  const handleResultClick = (product) => {
    console.log('Selected product:', product);
    handleCloseSearch();
    
    // Navigate to appropriate details page based on product type or ID range
    if (product.type === 'led' || product.id >= 200) {
      // LED products - navigate to LED details
      navigate(`/led/${product.id}`);
    } else {
      // Regular products - navigate to product details
      navigate(`/products/${product.id}`);
    }
  };

  return (
    <div className="header">
      <h1><span className="span">Chic</span> Lightings and Designs</h1>

      <div className="icons">
        <button className="icon-btn" onClick={() => search.toggle()} aria-label="Open search">
          <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
        </button>
        <button className="icon-btn" onClick={() => cart.toggleCart()} aria-label="Open cart">
          <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
          <span className="cart-count">{cart?.totals?.totalCount || 0}</span>
        </button>
       <Visitor/>
        <button className="menu-btn" onClick={() => setOpen((s) => !s)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          <i className="fa-solid fa-bars" aria-hidden="true"></i>
        </button>
      </div>

      {/* Combined overlay for menu and cart */}
      <div 
        className={`sheet-overlay ${(open || cart?.openCart || search?.openSearch) ? 'visible' : ''}`} 
        onClick={() => { 
          close(); 
          cart.close(); 
          handleCloseSearch();
        }} 
        aria-hidden={!(open || cart?.openCart || search?.openSearch)}
      ></div>

      {/* Search Overlay */}
      <div className={`search-overlay ${search?.openSearch ? 'visible' : ''}`} aria-hidden={!search?.openSearch}>
        <div className="search-box">
          <input 
            value={search?.query || ''} 
            onChange={(e) => search.setQuery(e.target.value)}
            onKeyPress={handleSearch}
            placeholder="Search products..." 
            autoFocus
          />
          <button 
            className="search-action" 
            onClick={handleSearch}
            aria-label="Search"
          >
            <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
            <span className="sr-only">Search</span>
          </button>
          <button 
            className="search-close" 
            onClick={handleCloseSearch}
            aria-label="Close search"
          >
            <i className="fa-solid fa-times" aria-hidden="true" />
          </button>
        </div>

        {/* Search Results - Text Only */}
        {(search?.query && search?.openSearch) && (
          <div className="search-results">
            {search.isSearching ? (
              <div className="search-loading">Searching...</div>
            ) : search.searchResults.length > 0 ? (
              <div className="search-results-list">
                {search.searchResults.map(product => (
                  <div 
                    key={product.id} 
                    className="search-result-item"
                    onClick={() => handleResultClick(product)}
                  >
                    <div className="search-result-info">
                      <h4>{product.name}</h4>
                      <p>{product.description || product.desc}</p>
                      <div className="search-result-meta">
                        <span className="search-result-price">{product.price}</span>
                        <span className="search-result-type">{product.type}</span>
                        <span className="search-result-rating">{product.rating}</span>
                      </div>
                      <div className="search-result-category">
                        {product.type === 'led' || product.id >= 200 ? 'LED Product' : 'Lighting Product'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="search-no-results">
                No products found for "{search.query}"
              </div>
            )}
          </div>
        )}
      </div>

      {/* Navigation Side Sheet */}
      <aside className={`side-sheet ${open ? 'open' : ''}`} role="dialog" aria-modal="true" aria-hidden={!open}>
        <nav className="sheet-nav">
          <NavLink to="/"  onClick={close} className={({isActive}) => isActive ? 'navlink active': 'navlink'}>Home</NavLink>
          <NavLink to="/products" onClick={close} className={({isActive}) => isActive ? 'navlink active': 'navlink'}>Products</NavLink>
          <NavLink to="/led" onClick={close} className={({isActive}) => isActive ? 'navlink active': 'navlink'}>LEDs</NavLink>
          <NavLink to="/gallery" onClick={close} className={({isActive}) => isActive ? 'navlink active': 'navlink'}>Gallery</NavLink>
          <NavLink to="/offers" onClick={close} className={({isActive}) => isActive ? 'navlink active': 'navlink'}>Offers</NavLink>
          <NavLink to="/contact" onClick={close} className={({isActive}) => isActive ? 'navlink active': 'navlink'}>Contact</NavLink>
        </nav>
      </aside>

      {/* Cart Side Sheet */}
      <aside className={`side-sheet cart-sheet ${cart?.openCart ? 'open' : ''}`} role="dialog" aria-modal="true" aria-hidden={!cart?.openCart}>
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button className="cart-close" onClick={() => cart.close()}>Close</button>
        </div>
        <div className="cart-body">
          {cart?.cartItems?.length ? cart.cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-info">
                <div className="cart-item-title">{item.title || item.name}</div>
                <div className="cart-item-meta">{item.price} × {item.qty}</div>
              </div>
              <div className="cart-item-controls">
                <button className="ctrl-btn" onClick={() => cart.updateQty(item.id, item.qty - 1)}>-</button>
                <button className="ctrl-btn" onClick={() => cart.updateQty(item.id, item.qty + 1)}>+</button>
                <button className="ctrl-btn remove" onClick={() => cart.removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          )) : <div className="cart-empty">Your cart is empty</div>}
        </div>
        <div className="cart-footer">
          <div className="cart-total">Total: ${cart?.totals?.totalPrice?.toFixed(2) || '0.00'}</div>
          <button className="btn checkout">Checkout</button>
        </div>
      </aside>
    </div>
  );
}

export default Header;