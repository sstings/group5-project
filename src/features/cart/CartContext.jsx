import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const CartContext = createContext();

// Custom hook to use cart
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Cart provider component
export const CartProvider = ({ children }) => {
  // Load cart from localStorage on initial render
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('ecommerce-cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('ecommerce-cart', JSON.stringify(cart));
  }, [cart]);

  // ========== CRUD OPERATIONS ==========

  // 1. ADD to cart (CREATE)
  const addToCart = (product) => {
    setCart(prevCart => {
      // Check if product already exists in cart
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        // If exists, increase quantity
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If new, add with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // 2. REMOVE from cart (DELETE)
  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  // 3. UPDATE quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      // If quantity becomes 0, remove from cart
      removeFromCart(id);
      return;
    }
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // 4. Clear entire cart
  const clearCart = () => {
    setCart([]);
  };

  // ========== CALCULATIONS ==========

  // Calculate total amount
  const calculateTotal = () => {
    return cart.reduce((total, item) => 
      total + (item.price * item.quantity), 0
    );
  };

  // Count total items in cart
  const countTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Get cart item count (for badge)
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Value provided to all components
  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    calculateTotal,
    countTotalItems,
    itemCount
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
