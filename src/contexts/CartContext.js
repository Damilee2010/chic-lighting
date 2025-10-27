import React, { createContext, useState, useMemo } from 'react';

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  const addToCart = (item) => {
    console.log('addToCart called with', item);
    setCartItems((prev) => {
      const found = prev.find((p) => p.id === item.id);
      if (found) {
        return prev.map((p) => p.id === item.id ? { ...p, qty: p.qty + 1 } : p);
      }
      return [...prev, { ...item, qty: 1 }];
    });
    setOpenCart(true);
  };

  const removeFromCart = (id) => setCartItems((prev) => prev.filter((p) => p.id !== id));
  const updateQty = (id, qty) => setCartItems((prev) => prev.map(p => p.id === id ? { ...p, qty: Math.max(1, qty) } : p));
  const clearCart = () => setCartItems([]);

  const toggleCart = () => setOpenCart(s => !s);
  const open = () => setOpenCart(true);
  const close = () => setOpenCart(false);

  const totals = useMemo(() => {
    const totalCount = cartItems.reduce((s, it) => s + (it.qty || 0), 0);
    const totalPrice = cartItems.reduce((s, it) => {
      const n = Number(String(it.price).replace(/[^0-9.]/g, '')) || 0;
      return s + n * (it.qty || 0);
    }, 0);
    return { totalCount, totalPrice };
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQty, clearCart, totals, openCart, toggleCart, open, close }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
