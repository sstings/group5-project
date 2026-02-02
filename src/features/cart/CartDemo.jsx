import React, { useState } from 'react';
import { CartProvider } from './CartContext';
import CartIcon from './CartIcon';
import ProductCard from './ProductCard';
import CartPage from './CartPage';

// Sample product data
const PRODUCTS = [
  {
    id: 1,
    name: 'Premium Laptop',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
    description: 'High-performance laptop for professionals',
  },
  {
    id: 2,
    name: 'Wireless Headphones',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    description: 'Noise-cancelling wireless headphones',
  },
  {
    id: 3,
    name: 'Smartphone',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
    description: 'Latest smartphone with advanced camera',
  },
  {
    id: 4,
    name: 'Gaming Mouse',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400',
    description: 'RGB gaming mouse with high DPI',
  },
  {
    id: 5,
    name: 'Mechanical Keyboard',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1525648199074-cee30ba5a785?w=400',
    description: 'Mechanical keyboard with RGB lighting',
  },
  {
    id: 6,
    name: '4K Monitor',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400',
    description: '27-inch 4K UHD monitor',
  },
];

const CartDemo = () => {
  const [currentView, setCurrentView] = useState('products');

  return (
    <CartProvider>
      <div style={styles.app}>
        {/* Header */}
        <header style={styles.header}>
          <div style={styles.headerLeft}>
            <h1 style={styles.logo}>🛒 E-Commerce Store</h1>
          </div>
          
          {/* Navigation */}
          <nav style={styles.nav}>
            <button
              style={{
                ...styles.navButton,
                ...(currentView === 'products' ? styles.activeNavButton : {})
              }}
              onClick={() => setCurrentView('products')}
            >
              Products
            </button>
            
            <button
              style={{
                ...styles.navButton,
                ...(currentView === 'cart' ? styles.activeNavButton : {})
              }}
              onClick={() => setCurrentView('cart')}
            >
              Cart
            </button>
          </nav>
          
          {/* Cart Icon */}
          <div 
            style={styles.cartIconContainer}
            onClick={() => setCurrentView('cart')}
          >
            <CartIcon />
          </div>
        </header>

        {/* Main Content */}
        <main style={styles.main}>
          {currentView === 'products' ? (
            <div style={styles.productsSection}>
              <h2 style={styles.sectionTitle}>Featured Products</h2>
              
              <div style={styles.productsGrid}>
                {PRODUCTS.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                  />
                ))}
              </div>
              
              {/* Instructions */}
              <div style={styles.instructions}>
                <p>🎯 <strong>Cart Features:</strong></p>
                <ul style={styles.featureList}>
                  <li>✅ Add products to cart</li>
                  <li>✅ Update quantities</li>
                  <li>✅ Remove items</li>
                  <li>✅ Calculate total amount</li>
                  <li>✅ Persistent storage</li>
                </ul>
              </div>
            </div>
          ) : (
            <CartPage />
          )}
        </main>

        {/* Footer */}
        <footer style={styles.footer}>
          <p style={styles.footerText}>
            Cart Functionality Demo • CRUD Operations + Total Calculation
          </p>
        </footer>
      </div>
    </CartProvider>
  );
};

// All styles for the demo app
const styles = {
  app: {
    minHeight: '100vh',
    background: '#242424',
    color: 'rgba(255, 255, 255, 0.87)',
    fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    background: '#1a1a1a',
    borderBottom: '2px solid #333',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  headerLeft: {
    flex: 1,
  },
  logo: {
    margin: 0,
    color: '#646cff',
    fontSize: '1.8rem',
  },
  nav: {
    display: 'flex',
    gap: '10px',
  },
  navButton: {
    padding: '0.8rem 1.5rem',
    border: '2px solid #646cff',
    background: 'transparent',
    color: '#646cff',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1rem',
    transition: 'all 0.3s',
  },
  activeNavButton: {
    background: '#646cff',
    color: 'white',
  },
  cartIconContainer: {
    cursor: 'pointer',
  },
  main: {
    padding: '2rem',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  productsSection: {
    marginBottom: '3rem',
  },
  sectionTitle: {
    textAlign: 'center',
    color: '#646cff',
    marginBottom: '2rem',
    fontSize: '2rem',
  },
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem',
  },
  instructions: {
    background: '#1a1a1a',
    borderRadius: '12px',
    padding: '1.5rem',
    border: '1px solid #333',
    maxWidth: '600px',
    margin: '0 auto',
  },
  featureList: {
    margin: '1rem 0 0 0',
    paddingLeft: '1.5rem',
    color: '#ddd',
  },
  footer: {
    textAlign: 'center',
    padding: '2rem',
    borderTop: '1px solid #333',
    marginTop: '2rem',
  },
  footerText: {
    color: '#888',
    margin: 0,
  },
};

export default CartDemo;
