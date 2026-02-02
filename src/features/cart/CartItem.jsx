import React from 'react';
import { useCart } from './CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div style={styles.item}>
      {/* Product Image */}
      <img 
        src={item.image} 
        alt={item.name} 
        style={styles.image}
      />
      
      {/* Product Details */}
      <div style={styles.details}>
        <h4 style={styles.name}>{item.name}</h4>
        <p style={styles.price}>
          ${item.price.toFixed(2)} each
        </p>
      </div>
      
      {/* Quantity Controls */}
      <div style={styles.quantity}>
        <button
          style={styles.quantityButton}
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
        >
          −
        </button>
        
        <span style={styles.quantityValue}>
          {item.quantity}
        </span>
        
        <button
          style={styles.quantityButton}
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
        >
          +
        </button>
      </div>
      
      {/* Item Total */}
      <div style={styles.total}>
        ${(item.price * item.quantity).toFixed(2)}
      </div>
      
      {/* Remove Button */}
      <button
        style={styles.removeButton}
        onClick={() => removeFromCart(item.id)}
      >
        Remove
      </button>
    </div>
  );
};

const styles = {
  item: {
    display: 'grid',
    gridTemplateColumns: '80px 2fr 1fr 1fr auto',
    gap: '15px',
    alignItems: 'center',
    padding: '15px',
    background: '#1a1a1a',
    borderRadius: '8px',
    marginBottom: '10px',
    border: '1px solid #333',
  },
  image: {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '6px',
  },
  details: {
    textAlign: 'left',
  },
  name: {
    margin: '0 0 5px 0',
    fontSize: '1rem',
    color: '#fff',
  },
  price: {
    color: '#888',
    margin: '0',
    fontSize: '0.9rem',
  },
  quantity: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  quantityButton: {
    background: '#333',
    color: 'white',
    border: 'none',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1rem',
    fontWeight: 'bold',
  },
  quantityValue: {
    fontWeight: 'bold',
    minWidth: '30px',
    textAlign: 'center',
    fontSize: '1rem',
  },
  total: {
    fontWeight: 'bold',
    color: '#4caf50',
    fontSize: '1.1rem',
  },
  removeButton: {
    background: '#ff4444',
    color: 'white',
    border: 'none',
    padding: '8px 15px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: 'bold',
  },
};

export default CartItem;
