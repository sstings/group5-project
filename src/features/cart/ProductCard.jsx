import React from 'react';
import { useCart } from './CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img 
          src={product.image} 
          alt={product.name} 
          style={styles.image}
        />
      </div>
      
      <div style={styles.info}>
        <h3 style={styles.name}>{product.name}</h3>
        <p style={styles.description}>{product.description}</p>
        
        <div style={styles.footer}>
          <span style={styles.price}>
            ${product.price.toFixed(2)}
          </span>
          
          <button
            style={styles.button}
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    background: '#1a1a1a',
    borderRadius: '12px',
    padding: '20px',
    border: '1px solid #333',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  imageContainer: {
    width: '100%',
    height: '180px',
    overflow: 'hidden',
    borderRadius: '8px',
    marginBottom: '15px',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s',
  },
  info: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    margin: '0 0 8px 0',
    fontSize: '1.2rem',
    color: '#fff',
  },
  description: {
    color: '#888',
    fontSize: '0.9rem',
    margin: '0 0 15px 0',
    flex: 1,
    lineHeight: '1.5',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
  },
  price: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#4caf50',
  },
  button: {
    background: '#646cff',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    transition: 'background 0.3s',
  },
};

export default ProductCard;
