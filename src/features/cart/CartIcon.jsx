import React from 'react';
import { useCart } from './CartContext';

const CartIcon = () => {
  const { itemCount, calculateTotal } = useCart();
  
  return (
    <div style={styles.container}>
      <div style={styles.icon}>🛒</div>
      
      {/* Show badge if items in cart */}
      {itemCount > 0 && (
        <span style={styles.badge}>
          {itemCount}
        </span>
      )}
      
      {/* Show total amount */}
      <div style={styles.total}>
        ${calculateTotal().toFixed(2)}
      </div>
    </div>
  );
};

// Inline styles for this component
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 15px',
    background: '#2a2a2a',
    borderRadius: '8px',
    cursor: 'pointer',
    position: 'relative',
  },
  icon: {
    fontSize: '1.5rem',
  },
  badge: {
    position: 'absolute',
    top: '-5px',
    right: '-5px',
    background: '#646cff',
    color: 'white',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.8rem',
    fontWeight: 'bold',
  },
  total: {
    fontWeight: 'bold',
    color: '#646cff',
    fontSize: '1rem',
  },
};

export default CartIcon;
